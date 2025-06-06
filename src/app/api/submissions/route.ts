// src/app/api/submissions/route.ts

import { withErrorHandling } from "@/lib/errorHandling";
import { createSuccessResponse, createErrorResponse } from "@/lib/apiUtils";
import { logger } from "@/lib/logger";
import { submissionService } from "@/lib/services/submissionService";
import { NextRequest, NextResponse } from "next/server";

// Define the handler as a clean async function.
async function handler(request: NextRequest) {
  const body = await request.json().catch(() => {
    // This handles cases where the request body is not valid JSON
    throw new Error("Invalid JSON in request body.");
  });

  // Delegate all logic to the service layer
  const result = await submissionService.createSubmission(body);

  // On success, create a standard success response
  return createSuccessResponse(
    result,
    "Demo submitted successfully! We'll review it and get back to you within 7-14 business days.",
    201 // 201 Created is more appropriate for a successful POST
  );
}

// Wrap the handler with our error handling utility
export const POST = async (request: NextRequest) => {
  const result = await withErrorHandling(() => handler(request), {
    operation: "demo_submission",
  });

  if (result.error) {
    // If the error is a rate limit error, we might need to add specific headers
    if (
      result.error.type === "rate_limit" &&
      result.error.context?.retryAfter
    ) {
      return NextResponse.json(
        { success: false, error: result.error.userMessage },
        {
          status: result.error.statusCode || 429,
          headers: {
            "Retry-After": result.error.context.retryAfter.toString(),
          },
        }
      );
    }

    logger.api("POST", "/api/submissions", result.error.statusCode || 500, {
      errorType: result.error.type,
      completed: true,
    });

    return createErrorResponse(
      result.error.userMessage,
      result.error.statusCode || 500
    );
  }

  // On success, result.data contains the NextResponse from our handler
  logger.api("POST", "/api/submissions", 201, {
    submissionId: (result.data?.body as any)?.submissionId, // A bit of a workaround to log the ID
    completed: true,
  });
  return result.data!;
};
