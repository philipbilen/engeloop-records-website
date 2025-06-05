// src/lib/errorHandling.ts

import { logger } from "./logger";

// Error types for better categorization
export enum ErrorType {
  NETWORK = "network",
  VALIDATION = "validation",
  AUTHENTICATION = "authentication",
  AUTHORIZATION = "authorization",
  NOT_FOUND = "not_found",
  RATE_LIMIT = "rate_limit",
  SERVER = "server",
  EXTERNAL_API = "external_api",
  DATABASE = "database",
}

// Error severity levels
export enum ErrorSeverity {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
  CRITICAL = "critical",
}

// Standardized error structure
export interface AppError {
  type: ErrorType;
  message: string;
  userMessage: string;
  severity: ErrorSeverity;
  code?: string;
  statusCode?: number;
  context?: Record<string, unknown>;
  originalError?: unknown;
  retryable?: boolean;
  timestamp: string;
}

// Error factory functions
export class ErrorFactory {
  private static createError(
    type: ErrorType,
    message: string,
    userMessage: string,
    severity: ErrorSeverity,
    options: {
      code?: string;
      statusCode?: number;
      context?: Record<string, unknown>;
      originalError?: unknown;
      retryable?: boolean;
    } = {}
  ): AppError {
    return {
      type,
      message,
      userMessage,
      severity,
      timestamp: new Date().toISOString(),
      ...options,
    };
  }

  static network(
    message: string,
    userMessage: string = "Connection error. Please check your internet connection.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.NETWORK,
      message,
      userMessage,
      ErrorSeverity.MEDIUM,
      {
        statusCode: 503,
        retryable: true,
        context,
      }
    );
  }

  static validation(
    message: string,
    userMessage: string = "Please check your input and try again.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.VALIDATION,
      message,
      userMessage,
      ErrorSeverity.LOW,
      {
        statusCode: 400,
        retryable: false,
        context,
      }
    );
  }

  static authentication(
    message: string,
    userMessage: string = "Please log in to continue.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.AUTHENTICATION,
      message,
      userMessage,
      ErrorSeverity.MEDIUM,
      {
        statusCode: 401,
        retryable: false,
        context,
      }
    );
  }

  static authorization(
    message: string,
    userMessage: string = "You do not have permission to perform this action.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.AUTHORIZATION,
      message,
      userMessage,
      ErrorSeverity.MEDIUM,
      {
        statusCode: 403,
        retryable: false,
        context,
      }
    );
  }

  static notFound(
    message: string,
    userMessage: string = "The requested resource was not found.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.NOT_FOUND,
      message,
      userMessage,
      ErrorSeverity.LOW,
      {
        statusCode: 404,
        retryable: false,
        context,
      }
    );
  }

  static rateLimit(
    message: string,
    userMessage: string = "Too many requests. Please wait before trying again.",
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.RATE_LIMIT,
      message,
      userMessage,
      ErrorSeverity.MEDIUM,
      {
        statusCode: 429,
        retryable: true,
        context,
      }
    );
  }

  static server(
    message: string,
    userMessage: string = "An unexpected error occurred. Please try again later.",
    originalError?: unknown,
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.SERVER,
      message,
      userMessage,
      ErrorSeverity.HIGH,
      {
        statusCode: 500,
        retryable: true,
        originalError,
        context,
      }
    );
  }

  static externalApi(
    service: string,
    message: string,
    userMessage: string = "External service temporarily unavailable. Please try again later.",
    originalError?: unknown,
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.EXTERNAL_API,
      message,
      userMessage,
      ErrorSeverity.MEDIUM,
      {
        statusCode: 503,
        retryable: true,
        originalError,
        context: { service, ...context },
      }
    );
  }

  static database(
    message: string,
    userMessage: string = "Database error. Please try again later.",
    originalError?: unknown,
    context?: Record<string, unknown>
  ): AppError {
    return this.createError(
      ErrorType.DATABASE,
      message,
      userMessage,
      ErrorSeverity.HIGH,
      {
        statusCode: 500,
        retryable: true,
        originalError,
        context,
      }
    );
  }
}

// Error handler that logs and optionally reports errors
export class ErrorHandler {
  static handle(error: AppError, reportToExternal: boolean = false): void {
    // Log based on severity
    const logContext = {
      type: error.type,
      code: error.code,
      statusCode: error.statusCode,
      retryable: error.retryable,
      ...error.context,
    };

    switch (error.severity) {
      case ErrorSeverity.LOW:
        logger.debug(error.message, logContext);
        break;
      case ErrorSeverity.MEDIUM:
        logger.warn(error.message, logContext);
        break;
      case ErrorSeverity.HIGH:
      case ErrorSeverity.CRITICAL:
        logger.error(error.message, error.originalError, logContext);
        break;
    }

    // Report critical errors to external monitoring (implement as needed)
    if (reportToExternal && error.severity === ErrorSeverity.CRITICAL) {
      this.reportToMonitoring(error);
    }
  }

  private static reportToMonitoring(error: AppError): void {
    // TODO: Implement external error reporting
    // Examples: Sentry, LogRocket, Bugsnag, etc.
    logger.info("Error reported to monitoring", { errorId: error.timestamp });
  }
}

// Utility to convert unknown errors to AppError
export function normalizeError(
  error: unknown,
  defaultType: ErrorType = ErrorType.SERVER
): AppError {
  if (error && typeof error === "object" && "type" in error) {
    return error as AppError;
  }

  if (error instanceof Error) {
    // Handle specific error types
    if (error.name === "ValidationError") {
      return ErrorFactory.validation(error.message, undefined, {
        originalName: error.name,
      });
    }

    if (error.name === "NetworkError" || error.message.includes("fetch")) {
      return ErrorFactory.network(error.message, undefined, {
        originalName: error.name,
      });
    }

    if (
      error.message.includes("Unauthorized") ||
      error.message.includes("401")
    ) {
      return ErrorFactory.authentication(error.message, undefined, {
        originalName: error.name,
      });
    }

    if (error.message.includes("Forbidden") || error.message.includes("403")) {
      return ErrorFactory.authorization(error.message, undefined, {
        originalName: error.name,
      });
    }

    if (error.message.includes("Not found") || error.message.includes("404")) {
      return ErrorFactory.notFound(error.message, undefined, {
        originalName: error.name,
      });
    }

    // Default to server error for unknown Error instances
    return ErrorFactory.server(error.message, undefined, error, {
      originalName: error.name,
    });
  }

  // Handle string errors
  if (typeof error === "string") {
    return ErrorFactory.server(error, undefined, error);
  }

  // Handle unknown error types
  return ErrorFactory.server("An unknown error occurred", undefined, error, {
    originalType: typeof error,
  });
}

// Async wrapper that catches and normalizes errors
export async function withErrorHandling<T>(
  operation: () => Promise<T>,
  context?: Record<string, unknown>
): Promise<{ data?: T; error?: AppError }> {
  try {
    const data = await operation();
    return { data };
  } catch (error) {
    const appError = normalizeError(error);
    appError.context = { ...appError.context, ...context };
    ErrorHandler.handle(appError);
    return { error: appError };
  }
}

// Retry wrapper for retryable operations
export async function withRetry<T>(
  operation: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000,
  context?: Record<string, unknown>
): Promise<T> {
  let lastError: AppError | undefined;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = normalizeError(error);
      lastError.context = {
        ...lastError.context,
        attempt,
        maxRetries,
        ...context,
      };

      // Don't retry if error is not retryable
      if (!lastError.retryable || attempt === maxRetries) {
        ErrorHandler.handle(lastError);
        throw lastError;
      }

      // Log retry attempt
      logger.warn(
        `Operation failed, retrying (${attempt}/${maxRetries})`,
        lastError.context
      );

      // Wait before retrying with exponential backoff
      const delay = delayMs * Math.pow(2, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError!;
}

// Client-side error boundary helper
export interface ErrorBoundaryState {
  hasError: boolean;
  error?: AppError;
  errorId?: string;
}

export function createErrorBoundaryState(): ErrorBoundaryState {
  return { hasError: false };
}

export function handleErrorBoundary(error: unknown): ErrorBoundaryState {
  const appError = normalizeError(error);
  ErrorHandler.handle(appError);

  return {
    hasError: true,
    error: appError,
    errorId: appError.timestamp,
  };
}

// Common error messages for consistency
export const ERROR_MESSAGES = {
  NETWORK:
    "Connection error. Please check your internet connection and try again.",
  SERVER: "Something went wrong on our end. Please try again later.",
  VALIDATION: "Please check your input and try again.",
  AUTHENTICATION: "Please log in to continue.",
  AUTHORIZATION: "You do not have permission to perform this action.",
  NOT_FOUND: "The requested resource was not found.",
  RATE_LIMIT: "Too many requests. Please wait a moment before trying again.",
  SPOTIFY_API: "Music service temporarily unavailable. Please try again later.",
  DEMO_SUBMISSION: "Failed to submit demo. Please try again.",
  FILE_UPLOAD: "File upload failed. Please try again.",
  FORM_VALIDATION: "Please fix the errors below and try again.",
} as const;
