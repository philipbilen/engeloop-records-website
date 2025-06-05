// src/lib/apiUtils.ts

import { NextResponse } from "next/server";
import { createServerSupabaseClient } from "./supabase";

export interface AdminUser {
  id: string;
  email: string;
  role: string;
  name?: string;
}

export interface AuthResult {
  authorized: boolean;
  user?: AdminUser;
  error?: string;
}

// Centralized admin authentication check
export async function checkAdminAuth(request: Request): Promise<AuthResult> {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        authorized: false,
        error: "Missing or invalid authorization header",
      };
    }

    const token = authHeader.split(" ")[1];

    // Create server client and verify the JWT token
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return { authorized: false, error: "Invalid or expired token" };
    }

    // Check if user has admin role
    const userRole = user.user_metadata?.role;
    if (userRole !== "admin") {
      return { authorized: false, error: "Insufficient privileges" };
    }

    return {
      authorized: true,
      user: {
        id: user.id,
        email: user.email!,
        role: userRole,
        name: user.user_metadata?.name || user.email?.split("@")[0],
      },
    };
  } catch (error) {
    console.error("Auth check error:", error);
    return { authorized: false, error: "Authentication failed" };
  }
}

// Standardized error response creator
export function createErrorResponse(
  message: string,
  status: number = 500,
  details?: unknown
) {
  return NextResponse.json(
    {
      success: false,
      error: message,
      ...(typeof details === "object" && details !== null ? { details } : {}),
    },
    { status }
  );
}

// Standardized success response creator
export function createSuccessResponse<T>(
  data: T,
  message?: string,
  status: number = 200
) {
  return NextResponse.json(
    {
      success: true,
      data,
      ...(message && { message }),
    },
    { status }
  );
}

// Middleware wrapper for admin-only routes
export function withAdminAuth(
  handler: (request: Request, user: AdminUser) => Promise<NextResponse>
) {
  return async (request: Request): Promise<NextResponse> => {
    const authResult = await checkAdminAuth(request);

    if (!authResult.authorized) {
      return createErrorResponse(authResult.error!, 401);
    }

    return handler(request, authResult.user!);
  };
}

// Helper to get authenticated session for client-side requests
export async function makeAuthenticatedRequest(
  url: string,
  options: RequestInit = {},
  token: string
): Promise<Response> {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
}
