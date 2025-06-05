// src/app/api/admin/dashboard-stats/route.ts

import { NextResponse } from "next/server";
import { getServiceRoleSupabase } from "@/lib/supabase";
import {
  withAdminAuth,
  createSuccessResponse,
  createErrorResponse,
} from "@/lib/apiUtils";
import { logger } from "@/lib/logger";
import { withErrorHandling, ErrorFactory } from "@/lib/errorHandling";
import { checkAdminSyncLimit } from "@/lib/rateLimiting";

interface DashboardStats {
  pendingSubmissions: number;
  activeContracts: number;
  upcomingReleases: number;
  totalArtists: number;
  recentSubmissions: number;
  submissionsThisMonth: number;
}

export const GET = withAdminAuth(async (request, user) => {
  logger.admin("Dashboard stats requested", user.email);

  return withErrorHandling(
    async () => {
      const supabase = getServiceRoleSupabase();

      logger.admin("Fetching dashboard statistics", user.email);

      // Calculate date ranges
      const now = new Date();
      const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      // Fetch all stats in parallel for better performance
      const [
        { count: pendingSubmissions, error: pendingError },
        { count: totalArtists, error: artistsError },
        { count: recentSubmissions, error: recentError },
        { count: submissionsThisMonth, error: monthlyError },
      ] = await Promise.all([
        // Pending demo submissions
        supabase
          .from("demo_submissions")
          .select("*", { count: "exact", head: true })
          .eq("submission_status", "pending"),

        // Total artists
        supabase.from("artists").select("*", { count: "exact", head: true }),

        // Recent submissions (last 7 days)
        supabase
          .from("demo_submissions")
          .select("*", { count: "exact", head: true })
          .gte("submitted_at", last7Days.toISOString()),

        // Submissions this month
        supabase
          .from("demo_submissions")
          .select("*", { count: "exact", head: true })
          .gte("submitted_at", startOfMonth.toISOString()),
      ]);

      // Log any specific errors but don't fail the entire request
      if (pendingError) {
        logger.error("Error fetching pending submissions", pendingError, {
          user: user.email,
        });
      }
      if (artistsError) {
        logger.error("Error fetching artists count", artistsError, {
          user: user.email,
        });
      }
      if (recentError) {
        logger.error("Error fetching recent submissions", recentError, {
          user: user.email,
        });
      }
      if (monthlyError) {
        logger.error("Error fetching monthly submissions", monthlyError, {
          user: user.email,
        });
      }

      // For now, we'll use placeholder values for features not yet implemented
      const stats: DashboardStats = {
        pendingSubmissions: pendingSubmissions || 0,
        activeContracts: 8, // Placeholder - update when contracts table is added
        upcomingReleases: 3, // Placeholder - update when releases table is added
        totalArtists: totalArtists || 0,
        recentSubmissions: recentSubmissions || 0,
        submissionsThisMonth: submissionsThisMonth || 0,
      };

      logger.admin("Dashboard stats retrieved successfully", user.email, {
        pendingSubmissions: stats.pendingSubmissions,
        totalArtists: stats.totalArtists,
        recentSubmissions: stats.recentSubmissions,
      });

      return createSuccessResponse(stats, undefined, 200);
    },
    {
      operation: "dashboard_stats_fetch",
      adminUser: user.email,
    }
  ).then((result) => {
    if (result.error) {
      logger.admin("Dashboard stats fetch failed", user.email, {
        errorType: result.error.type,
        errorMessage: result.error.message,
      });

      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500
      );
    }

    return result.data!;
  });
});

// Optional: Add a POST method for refreshing stats cache if needed
export const POST = withAdminAuth(async (request, user) => {
  logger.admin("Dashboard stats refresh requested", user.email);

  return withErrorHandling(
    async () => {
      // Check rate limiting for admin operations
      const rateLimitResult = await checkAdminSyncLimit(user.email, {
        operation: "dashboard_refresh",
      });

      if (!rateLimitResult.allowed) {
        logger.admin("Dashboard refresh rate limited", user.email, {
          remainingAttempts: rateLimitResult.remainingAttempts,
          resetTime: rateLimitResult.resetTime,
        });

        return NextResponse.json(
          {
            success: false,
            error: rateLimitResult.message,
            retryAfter: Math.ceil(
              (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
            ),
          },
          {
            status: 429,
            headers: {
              "Retry-After": Math.ceil(
                (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
              ).toString(),
            },
          }
        );
      }

      // For now, just call the GET method to refresh stats
      // In the future, this could clear caches, trigger background jobs, etc.
      const getRequest = new Request(request.url, {
        method: "GET",
        headers: request.headers,
      });
      return GET(getRequest);
    },
    {
      operation: "dashboard_stats_refresh",
      adminUser: user.email,
    }
  ).then((result) => {
    if (result.error) {
      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500
      );
    }

    return result.data!;
  });
});
