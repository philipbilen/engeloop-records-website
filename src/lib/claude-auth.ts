// src/lib/claude-auth.ts
import { NextRequest } from "next/server";

/**
 * Authentication middleware for Claude API access
 * Uses a simple API key approach for external access
 */

export function validateClaudeAuth(request: NextRequest): {
  authorized: boolean;
  error?: string;
} {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader) {
      return { authorized: false, error: "Missing authorization header" };
    }

    // Expect format: "Bearer YOUR_CLAUDE_API_KEY"
    if (!authHeader.startsWith("Bearer ")) {
      return {
        authorized: false,
        error: "Invalid authorization format. Expected: Bearer <token>",
      };
    }

    const token = authHeader.split(" ")[1];
    const expectedToken = process.env.CLAUDE_API_KEY;

    if (!expectedToken) {
      console.error("CLAUDE_API_KEY not configured in environment variables");
      return { authorized: false, error: "Server configuration error" };
    }

    if (token !== expectedToken) {
      return { authorized: false, error: "Invalid API key" };
    }

    return { authorized: true };
  } catch (error) {
    console.error("Claude auth validation error:", error);
    return { authorized: false, error: "Authentication failed" };
  }
}

/**
 * Helper function to create unauthorized response
 */
export function createUnauthorizedResponse(error: string) {
  return new Response(
    JSON.stringify({
      success: false,
      error: "Unauthorized",
      message: error,
    }),
    {
      status: 401,
      headers: { "Content-Type": "application/json" },
    }
  );
}
