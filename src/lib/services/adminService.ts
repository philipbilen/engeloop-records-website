// src/lib/services/adminService.ts

import { getServiceRoleSupabase } from "@/lib/supabase";
import { logger } from "@/lib/logger";
import { ErrorFactory } from "@/lib/errorHandling";
import { checkAdminSyncLimit } from "@/lib/rateLimiting";

interface DashboardStats {
  pendingSubmissions: number;
  activeContracts: number;
  upcomingReleases: number;
  totalArtists: number;
  recentSubmissions: number;
  submissionsThisMonth: number;
}

/**
 * Fetches aggregated statistics for the admin dashboard.
 * @returns {Promise<DashboardStats>} A promise that resolves to the dashboard stats object.
 */
async function getDashboardStats(): Promise<DashboardStats> {
  const supabase = getServiceRoleSupabase();
  logger.info("Fetching dashboard statistics from service layer.");

  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  // Use Promise.allSettled to allow partial data even if one query fails
  const results = await Promise.allSettled([
    supabase
      .from("demo_submissions")
      .select("id", { count: "exact", head: true })
      .eq("submission_status", "pending"),
    supabase.from("artists").select("id", { count: "exact", head: true }),
    supabase
      .from("demo_submissions")
      .select("id", { count: "exact", head: true })
      .gte("submitted_at", last7Days.toISOString()),
    supabase
      .from("demo_submissions")
      .select("id", { count: "exact", head: true })
      .gte("submitted_at", startOfMonth.toISOString()),
  ]);

  const getCount = (
    result: PromiseSettledResult<{ count: number | null; error: any }>
  ): number => {
    if (result.status === "fulfilled" && result.value.error === null) {
      return result.value.count || 0;
    }
    if (result.status === "fulfilled" && result.value.error) {
      logger.warn("A non-critical dashboard stat query failed", {
        error: result.value.error.message,
      });
    }
    if (result.status === "rejected") {
      logger.error(
        "A dashboard stat query promise was rejected",
        result.reason
      );
    }
    return 0; // Default to 0 on failure
  };

  const stats: DashboardStats = {
    pendingSubmissions: getCount(results[0] as any),
    totalArtists: getCount(results[1] as any),
    recentSubmissions: getCount(results[2] as any),
    submissionsThisMonth: getCount(results[3] as any),
    activeContracts: 8, // Placeholder
    upcomingReleases: 3, // Placeholder
  };

  logger.info("Dashboard stats retrieved successfully from service.", {
    pendingSubmissions: stats.pendingSubmissions,
    totalArtists: stats.totalArtists,
  });

  return stats;
}

/**
 * Refreshes dashboard stats after checking rate limits.
 * @param {string} adminEmail - The email of the user requesting the refresh.
 * @returns {Promise<DashboardStats>} A promise that resolves to the dashboard stats object.
 */
async function refreshDashboardStats(
  adminEmail: string
): Promise<DashboardStats> {
  logger.info("Dashboard stats refresh triggered via service.", {
    user: adminEmail,
  });

  const rateLimitResult = await checkAdminSyncLimit(adminEmail, {
    operation: "dashboard_refresh",
  });
  if (!rateLimitResult.allowed) {
    logger.admin("Dashboard refresh rate limited", adminEmail);
    const error = ErrorFactory.rateLimit(
      "Dashboard refresh rate limited.",
      rateLimitResult.message
    );
    error.context = {
      retryAfter: Math.ceil(
        (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
      ),
    };
    throw error;
  }

  // Currently just re-fetches, but could clear a cache in the future
  return getDashboardStats();
}

export const adminService = {
  getDashboardStats,
  refreshDashboardStats,
};
