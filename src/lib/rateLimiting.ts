// src/lib/rateLimiting.ts

import { getServiceRoleSupabase } from "./supabase";
import { logger } from "./logger";

export interface RateLimitConfig {
  windowMs: number;
  maxAttempts: number;
  operation: string;
}

export interface RateLimitResult {
  allowed: boolean;
  remainingAttempts: number;
  resetTime: Date;
  message?: string;
}

// Predefined rate limit configurations
export const RATE_LIMIT_CONFIGS = {
  DEMO_SUBMISSION: {
    windowMs: 3600000, // 1 hour
    maxAttempts: 3,
    operation: "demo_submission",
  },
  ADMIN_SYNC: {
    windowMs: 300000, // 5 minutes
    maxAttempts: 2,
    operation: "admin_sync",
  },
  API_GENERAL: {
    windowMs: 60000, // 1 minute
    maxAttempts: 60,
    operation: "api_general",
  },
  PASSWORD_RESET: {
    windowMs: 900000, // 15 minutes
    maxAttempts: 3,
    operation: "password_reset",
  },
  LOGIN_ATTEMPT: {
    windowMs: 900000, // 15 minutes
    maxAttempts: 5,
    operation: "login_attempt",
  },
} as const;

class RateLimiter {
  private supabase = getServiceRoleSupabase();

  /**
   * Check if an operation is allowed for a given identifier
   */
  async checkRateLimit(
    identifier: string,
    config: RateLimitConfig,
    metadata?: Record<string, unknown>
  ): Promise<RateLimitResult> {
    try {
      const now = new Date();
      const windowStart = new Date(now.getTime() - config.windowMs);

      // Get recent attempts within the window
      const { data: attempts, error } = await this.supabase
        .from("rate_limit_attempts")
        .select("attempted_at")
        .eq("identifier", identifier)
        .eq("operation", config.operation)
        .gte("attempted_at", windowStart.toISOString())
        .order("attempted_at", { ascending: false });

      if (error) {
        logger.error("Rate limit check failed", error, {
          identifier,
          operation: config.operation,
        });
        // Fail open - allow the request if we can't check rate limits
        return this.createAllowedResult(config.maxAttempts);
      }

      const attemptCount = attempts?.length || 0;
      const remainingAttempts = Math.max(0, config.maxAttempts - attemptCount);
      const isAllowed = attemptCount < config.maxAttempts;

      // Calculate reset time (end of current window)
      const oldestAttempt = attempts?.[attempts.length - 1];
      const resetTime = oldestAttempt
        ? new Date(
            new Date(oldestAttempt.attempted_at).getTime() + config.windowMs
          )
        : new Date(now.getTime() + config.windowMs);

      if (isAllowed) {
        // Record this attempt
        await this.recordAttempt(identifier, config.operation, metadata);

        logger.debug("Rate limit check passed", {
          identifier,
          operation: config.operation,
          attemptCount: attemptCount + 1,
          maxAttempts: config.maxAttempts,
        });

        return {
          allowed: true,
          remainingAttempts: remainingAttempts - 1,
          resetTime,
        };
      } else {
        logger.warn("Rate limit exceeded", {
          identifier,
          operation: config.operation,
          attemptCount,
          maxAttempts: config.maxAttempts,
          resetTime,
        });

        return {
          allowed: false,
          remainingAttempts: 0,
          resetTime,
          message: `Too many attempts. Please wait until ${resetTime.toLocaleTimeString()} before trying again.`,
        };
      }
    } catch (error) {
      logger.error("Rate limit system error", error, {
        identifier,
        operation: config.operation,
      });
      // Fail open - allow the request if there's a system error
      return this.createAllowedResult(config.maxAttempts);
    }
  }

  /**
   * Record an attempt in the database
   */
  private async recordAttempt(
    identifier: string,
    operation: string,
    metadata?: Record<string, unknown>
  ): Promise<void> {
    try {
      const { error } = await this.supabase.from("rate_limit_attempts").insert({
        identifier,
        operation,
        attempted_at: new Date().toISOString(),
        metadata: metadata || {},
      });

      if (error) {
        logger.error("Failed to record rate limit attempt", error, {
          identifier,
          operation,
        });
      }
    } catch (error) {
      logger.error("Error recording rate limit attempt", error, {
        identifier,
        operation,
      });
    }
  }

  /**
   * Clean up old rate limit records (should be called periodically)
   */
  async cleanup(olderThanHours: number = 24): Promise<void> {
    try {
      const cutoffTime = new Date(Date.now() - olderThanHours * 60 * 60 * 1000);

      const { error } = await this.supabase
        .from("rate_limit_attempts")
        .delete()
        .lt("attempted_at", cutoffTime.toISOString());

      if (error) {
        logger.error("Rate limit cleanup failed", error);
      } else {
        logger.info("Rate limit cleanup completed", { cutoffTime });
      }
    } catch (error) {
      logger.error("Rate limit cleanup error", error);
    }
  }

  /**
   * Get rate limit status without recording an attempt
   */
  async getRateLimitStatus(
    identifier: string,
    config: RateLimitConfig
  ): Promise<RateLimitResult> {
    try {
      const now = new Date();
      const windowStart = new Date(now.getTime() - config.windowMs);

      const { data: attempts, error } = await this.supabase
        .from("rate_limit_attempts")
        .select("attempted_at")
        .eq("identifier", identifier)
        .eq("operation", config.operation)
        .gte("attempted_at", windowStart.toISOString())
        .order("attempted_at", { ascending: false });

      if (error) {
        logger.error("Rate limit status check failed", error);
        return this.createAllowedResult(config.maxAttempts);
      }

      const attemptCount = attempts?.length || 0;
      const remainingAttempts = Math.max(0, config.maxAttempts - attemptCount);
      const isAllowed = attemptCount < config.maxAttempts;

      const oldestAttempt = attempts?.[attempts.length - 1];
      const resetTime = oldestAttempt
        ? new Date(
            new Date(oldestAttempt.attempted_at).getTime() + config.windowMs
          )
        : new Date(now.getTime() + config.windowMs);

      return {
        allowed: isAllowed,
        remainingAttempts,
        resetTime,
        ...(!isAllowed && {
          message: `Rate limit exceeded. Resets at ${resetTime.toLocaleTimeString()}`,
        }),
      };
    } catch (error) {
      logger.error("Error checking rate limit status", error);
      return this.createAllowedResult(config.maxAttempts);
    }
  }

  /**
   * Reset rate limit for a specific identifier and operation
   */
  async resetRateLimit(identifier: string, operation: string): Promise<void> {
    try {
      const { error } = await this.supabase
        .from("rate_limit_attempts")
        .delete()
        .eq("identifier", identifier)
        .eq("operation", operation);

      if (error) {
        logger.error("Failed to reset rate limit", error, {
          identifier,
          operation,
        });
      } else {
        logger.admin("Rate limit reset", "system", { identifier, operation });
      }
    } catch (error) {
      logger.error("Error resetting rate limit", error, {
        identifier,
        operation,
      });
    }
  }

  private createAllowedResult(maxAttempts: number): RateLimitResult {
    return {
      allowed: true,
      remainingAttempts: maxAttempts - 1,
      resetTime: new Date(Date.now() + 3600000), // 1 hour from now
    };
  }
}

// Export singleton instance
export const rateLimiter = new RateLimiter();

// Convenience functions for common operations
export async function checkDemoSubmissionLimit(
  email: string,
  metadata?: Record<string, unknown>
): Promise<RateLimitResult> {
  return rateLimiter.checkRateLimit(
    email.toLowerCase(),
    RATE_LIMIT_CONFIGS.DEMO_SUBMISSION,
    metadata
  );
}

export async function checkAdminSyncLimit(
  userEmail: string,
  metadata?: Record<string, unknown>
): Promise<RateLimitResult> {
  return rateLimiter.checkRateLimit(
    userEmail.toLowerCase(),
    RATE_LIMIT_CONFIGS.ADMIN_SYNC,
    metadata
  );
}

export async function checkLoginLimit(
  identifier: string, // Could be email or IP
  metadata?: Record<string, unknown>
): Promise<RateLimitResult> {
  return rateLimiter.checkRateLimit(
    identifier.toLowerCase(),
    RATE_LIMIT_CONFIGS.LOGIN_ATTEMPT,
    metadata
  );
}

export async function checkGeneralApiLimit(
  ipAddress: string,
  metadata?: Record<string, unknown>
): Promise<RateLimitResult> {
  return rateLimiter.checkRateLimit(
    ipAddress,
    RATE_LIMIT_CONFIGS.API_GENERAL,
    metadata
  );
}

// Middleware helper for Next.js API routes
export function withRateLimit(
  config: RateLimitConfig,
  getIdentifier: (request: Request) => string
) {
  return async (
    request: Request,
    handler: () => Promise<Response>
  ): Promise<Response> => {
    const identifier = getIdentifier(request);
    const result = await rateLimiter.checkRateLimit(identifier, config);

    if (!result.allowed) {
      return new Response(
        JSON.stringify({
          success: false,
          error: result.message || "Rate limit exceeded",
          retryAfter: Math.ceil(
            (result.resetTime.getTime() - Date.now()) / 1000
          ),
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil(
              (result.resetTime.getTime() - Date.now()) / 1000
            ).toString(),
            "X-RateLimit-Limit": config.maxAttempts.toString(),
            "X-RateLimit-Remaining": result.remainingAttempts.toString(),
            "X-RateLimit-Reset": result.resetTime.getTime().toString(),
          },
        }
      );
    }

    return handler();
  };
}

// Helper to extract client IP from request
export function getClientIP(request: Request): string {
  // Try various headers that might contain the real IP
  const headers = [
    "x-forwarded-for",
    "x-real-ip",
    "x-client-ip",
    "cf-connecting-ip", // Cloudflare
    "x-forwarded",
    "forwarded-for",
    "forwarded",
  ];

  for (const header of headers) {
    const value = request.headers.get(header);
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first one
      const ip = value.split(",")[0].trim();
      if (ip && ip !== "unknown") {
        return ip;
      }
    }
  }

  // Fallback
  return "unknown";
}
