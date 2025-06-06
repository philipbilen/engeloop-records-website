// src/app/api/admin/stats/dashboard/route.ts

import { NextRequest, NextResponse } from "next/server";
import {
  withAdminAuth,
  createSuccessResponse,
  createErrorResponse,
  AdminUser,
} from "@/lib/apiUtils";
import { withErrorHandling } from "@/lib/errorHandling";
import { logger } from "@/lib/logger";
import { adminService } from "@/lib/services/adminService";

// GET handler logic
// FIX: Use the standard `Request` type to match the wrapper
async function getHandler(request: Request, user: AdminUser) {
  const stats = await adminService.getDashboardStats();
  return createSuccessResponse(stats);
}

// Wrapped GET export
export const GET = withAdminAuth(async (request: Request, user: AdminUser) => {
  const result = await withErrorHandling(() => getHandler(request, user), {
    operation: "dashboard_stats_fetch",
    adminUser: user.email,
  });

  if (result.error) {
    logger.api(
      "GET",
      "/api/admin/stats/dashboard",
      result.error.statusCode || 500,
      { errorType: result.error.type }
    );
    return createErrorResponse(
      result.error.userMessage,
      result.error.statusCode || 500
    );
  }

  logger.api("GET", "/api/admin/stats/dashboard", 200, { completed: true });
  return result.data!;
});

// POST handler logic (for refreshing stats)
// FIX: Use the standard `Request` type to match the wrapper
async function postHandler(request: Request, user: AdminUser) {
  const stats = await adminService.refreshDashboardStats(user.email);
  return createSuccessResponse(
    stats,
    "Dashboard stats refreshed successfully."
  );
}

// Wrapped POST export
export const POST = withAdminAuth(async (request: Request, user: AdminUser) => {
  const result = await withErrorHandling(() => postHandler(request, user), {
    operation: "dashboard_stats_refresh",
    adminUser: user.email,
  });

  if (result.error) {
    logger.api(
      "POST",
      "/api/admin/stats/dashboard",
      result.error.statusCode || 500,
      { errorType: result.error.type }
    );
    // Specifically handle rate limit responses to include the header
    if (
      result.error.type === "rate_limit" &&
      result.error.context?.retryAfter
    ) {
      return NextResponse.json(
        { success: false, error: result.error.userMessage },
        {
          status: 429,
          headers: {
            "Retry-After": result.error.context.retryAfter.toString(),
          },
        }
      );
    }
    return createErrorResponse(
      result.error.userMessage,
      result.error.statusCode || 500
    );
  }

  logger.api("POST", "/api/admin/stats/dashboard", 200, { completed: true });
  return result.data!;
});
