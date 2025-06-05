// src/app/components/ErrorDisplay.tsx

"use client";

import React from "react";
import { AlertCircle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AppError, ErrorType, ErrorSeverity } from "@/lib/errorHandling";

interface ErrorDisplayProps {
  error: AppError;
  onRetry?: () => void;
  showRetry?: boolean;
  showDetails?: boolean;
  compact?: boolean;
  className?: string;
}

export default function ErrorDisplay({
  error,
  onRetry,
  showRetry = true,
  showDetails = false,
  compact = false,
  className = "",
}: ErrorDisplayProps) {
  const getErrorColor = (type: ErrorType, severity: ErrorSeverity) => {
    if (
      severity === ErrorSeverity.CRITICAL ||
      severity === ErrorSeverity.HIGH
    ) {
      return "text-red-600 bg-red-50 border-red-200";
    }
    if (type === ErrorType.VALIDATION) {
      return "text-yellow-600 bg-yellow-50 border-yellow-200";
    }
    return "text-gray-600 bg-gray-50 border-gray-200";
  };

  const getErrorIcon = (type: ErrorType) => {
    switch (type) {
      case ErrorType.NETWORK:
        return "🌐";
      case ErrorType.AUTHENTICATION:
        return "🔒";
      case ErrorType.AUTHORIZATION:
        return "🚫";
      case ErrorType.NOT_FOUND:
        return "🔍";
      case ErrorType.RATE_LIMIT:
        return "⏰";
      case ErrorType.VALIDATION:
        return "⚠️";
      default:
        return "❌";
    }
  };

  if (compact) {
    return (
      <div
        className={`flex items-center gap-2 text-sm ${getErrorColor(
          error.type,
          error.severity
        )} ${className}`}
      >
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
        <span>{error.userMessage}</span>
        {showRetry && error.retryable && onRetry && (
          <button
            onClick={onRetry}
            className="text-blue-600 hover:text-blue-800 underline ml-2"
          >
            Retry
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`rounded-lg border p-6 ${getErrorColor(
        error.type,
        error.severity
      )} ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="text-2xl">{getErrorIcon(error.type)}</div>
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">
            {getErrorTitle(error.type)}
          </h3>
          <p className="mb-4 leading-relaxed">{error.userMessage}</p>

          {showDetails && (
            <details className="mb-4">
              <summary className="cursor-pointer text-sm font-medium opacity-75 hover:opacity-100">
                Technical Details
              </summary>
              <div className="mt-2 text-sm opacity-75 font-mono bg-white/50 p-2 rounded">
                <p>
                  <strong>Error:</strong> {error.message}
                </p>
                <p>
                  <strong>Type:</strong> {error.type}
                </p>
                <p>
                  <strong>Code:</strong> {error.code || "N/A"}
                </p>
                <p>
                  <strong>Timestamp:</strong>{" "}
                  {new Date(error.timestamp).toLocaleString()}
                </p>
                {error.context && (
                  <p>
                    <strong>Context:</strong>{" "}
                    {JSON.stringify(error.context, null, 2)}
                  </p>
                )}
              </div>
            </details>
          )}

          <div className="flex flex-wrap gap-3">
            {showRetry && error.retryable && onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-current rounded-md hover:bg-opacity-90 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </button>
            )}

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-current rounded-md hover:bg-opacity-90 transition-colors no-underline"
            >
              <Home className="w-4 h-4" />
              Go Home
            </Link>

            {error.type === ErrorType.AUTHENTICATION && (
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-current rounded-md hover:bg-opacity-90 transition-colors no-underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function getErrorTitle(type: ErrorType): string {
  switch (type) {
    case ErrorType.NETWORK:
      return "Connection Problem";
    case ErrorType.VALIDATION:
      return "Invalid Input";
    case ErrorType.AUTHENTICATION:
      return "Authentication Required";
    case ErrorType.AUTHORIZATION:
      return "Access Denied";
    case ErrorType.NOT_FOUND:
      return "Not Found";
    case ErrorType.RATE_LIMIT:
      return "Too Many Requests";
    case ErrorType.EXTERNAL_API:
      return "Service Unavailable";
    case ErrorType.DATABASE:
      return "Database Error";
    default:
      return "Something Went Wrong";
  }
}

// Loading state component
interface LoadingStateProps {
  message?: string;
  size?: "small" | "medium" | "large";
  className?: string;
}

export function LoadingState({
  message = "Loading...",
  size = "medium",
  className = "",
}: LoadingStateProps) {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <div
        className={`animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 ${sizeClasses[size]}`}
      />
      <p className="text-gray-600 text-sm">{message}</p>
    </div>
  );
}

// Empty state component
interface EmptyStateProps {
  title: string;
  description?: string;
  action?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  icon?: string;
  className?: string;
}

export function EmptyState({
  title,
  description,
  action,
  icon = "📭",
  className = "",
}: EmptyStateProps) {
  return (
    <div className={`text-center py-12 ${className}`}>
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      {description && (
        <p className="text-gray-600 mb-6 max-w-md mx-auto">{description}</p>
      )}
      {action &&
        (action.href ? (
          <Link
            href={action.href}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors no-underline"
          >
            {action.label}
          </Link>
        ) : (
          <button
            onClick={action.onClick}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            {action.label}
          </button>
        ))}
    </div>
  );
}

// Success message component
interface SuccessMessageProps {
  title?: string;
  message: string;
  onDismiss?: () => void;
  autoHide?: boolean;
  autoHideDelay?: number;
  className?: string;
}

export function SuccessMessage({
  title = "Success!",
  message,
  onDismiss,
  autoHide = false,
  autoHideDelay = 5000,
  className = "",
}: SuccessMessageProps) {
  React.useEffect(() => {
    if (autoHide && onDismiss) {
      const timer = setTimeout(onDismiss, autoHideDelay);
      return () => clearTimeout(timer);
    }
  }, [autoHide, autoHideDelay, onDismiss]);

  return (
    <div
      className={`bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="text-xl">✅</div>
        <div className="flex-1">
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-green-600 hover:text-green-800 text-lg leading-none"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

// Form validation error list
interface ValidationErrorsProps {
  errors: string[];
  className?: string;
}

export function ValidationErrors({
  errors,
  className = "",
}: ValidationErrorsProps) {
  if (errors.length === 0) return null;

  return (
    <div
      className={`bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 ${className}`}
    >
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        <div>
          <h4 className="font-semibold mb-2">
            Please fix the following errors:
          </h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
