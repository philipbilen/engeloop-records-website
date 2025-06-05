// src/lib/logger.ts

export type LogLevel = "debug" | "info" | "warn" | "error";

export interface LogContext {
  [key: string]: unknown;
}

interface LogEntry {
  timestamp: string;
  level: LogLevel;
  message: string;
  context?: LogContext;
  error?: unknown;
  userId?: string;
  userEmail?: string;
}

class Logger {
  private logLevel: LogLevel;
  private isDevelopment: boolean;

  constructor() {
    this.logLevel = (process.env.LOG_LEVEL as LogLevel) || "info";
    this.isDevelopment = process.env.NODE_ENV === "development";
  }

  private shouldLog(level: LogLevel): boolean {
    const levels: Record<LogLevel, number> = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3,
    };

    return levels[level] >= levels[this.logLevel];
  }

  private formatMessage(entry: LogEntry): string {
    if (this.isDevelopment) {
      // Pretty format for development
      const emoji = {
        debug: "🔍",
        info: "ℹ️",
        warn: "⚠️",
        error: "❌",
      };

      let message = `${emoji[entry.level]} [${entry.timestamp}] ${
        entry.message
      }`;

      if (entry.context && Object.keys(entry.context).length > 0) {
        message += ` | Context: ${JSON.stringify(entry.context)}`;
      }

      if (entry.userEmail) {
        message += ` | User: ${entry.userEmail}`;
      }

      return message;
    } else {
      // Structured JSON for production
      return JSON.stringify(entry);
    }
  }

  private log(
    level: LogLevel,
    message: string,
    error?: unknown,
    context?: LogContext,
    userEmail?: string
  ): void {
    if (!this.shouldLog(level)) return;

    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      ...(context && { context }),
      ...(userEmail && { userEmail }),
    };

    if (error !== undefined) {
      entry.error = this.serializeError(error);
    }

    const formattedMessage = this.formatMessage(entry);

    // Use appropriate console method
    switch (level) {
      case "debug":
        console.debug(formattedMessage);
        break;
      case "info":
        console.info(formattedMessage);
        break;
      case "warn":
        console.warn(formattedMessage);
        break;
      case "error":
        console.error(formattedMessage);
        if (error && this.isDevelopment) {
          console.error(error); // Also log the full error object in dev
        }
        break;
    }
  }

  private serializeError(error: unknown): unknown {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
      };
    }
    return error;
  }

  // Public logging methods
  debug(message: string, context?: LogContext): void {
    this.log("debug", message, undefined, context);
  }

  info(message: string, context?: LogContext): void {
    this.log("info", message, undefined, context);
  }

  warn(message: string, context?: LogContext): void {
    this.log("warn", message, undefined, context);
  }

  error(message: string, error?: unknown, context?: LogContext): void {
    this.log("error", message, error, context);
  }

  // Special methods for common use cases
  admin(message: string, userEmail: string, context?: LogContext): void {
    this.log("info", `[ADMIN] ${message}`, undefined, context, userEmail);
  }

  api(
    method: string,
    endpoint: string,
    status: number,
    context?: LogContext
  ): void {
    const level = status >= 400 ? "error" : "info";
    this.log(level, `${method} ${endpoint} - ${status}`, undefined, {
      method,
      endpoint,
      status,
      ...context,
    });
  }

  submission(message: string, context?: LogContext): void {
    this.log("info", `[SUBMISSION] ${message}`, undefined, context);
  }

  spotify(message: string, context?: LogContext): void {
    this.log("info", `[SPOTIFY] ${message}`, undefined, context);
  }

  sync(message: string, userEmail: string, context?: LogContext): void {
    this.log("info", `[SYNC] ${message}`, undefined, context, userEmail);
  }

  // Performance logging
  performance(operation: string, duration: number, context?: LogContext): void {
    this.log(
      "info",
      `[PERF] ${operation} completed in ${duration}ms`,
      undefined,
      {
        operation,
        duration,
        ...context,
      }
    );
  }

  // Security logging
  security(event: string, context?: LogContext): void {
    this.log("warn", `[SECURITY] ${event}`, undefined, context);
  }
}

// Export singleton instance
export const logger = new Logger();

// Helper for timing operations
export function withTiming<T>(
  operation: string,
  fn: () => Promise<T>,
  context?: LogContext
): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const start = Date.now();
    try {
      const result = await fn();
      const duration = Date.now() - start;
      logger.performance(operation, duration, context);
      resolve(result);
    } catch (error) {
      const duration = Date.now() - start;
      logger.error(`${operation} failed after ${duration}ms`, error, context);
      reject(error);
    }
  });
}
