// src/app/api/artists/route.ts

import { withErrorHandling, ErrorFactory } from "@/lib/errorHandling";
import { createSuccessResponse, createErrorResponse } from "@/lib/apiUtils";
import { logger } from "@/lib/logger";
import { artistService } from "@/lib/services/artistService";

// 1. Define the core logic in a simple async function.
// It returns a complete NextResponse on success or throws an error on failure.
async function handler() {
  const artists = await artistService.getAllArtists();
  logger.info(`Service successfully fetched ${artists.length} artists.`);
  return createSuccessResponse(artists);
}

// 2. Export a GET function that uses our robust wrapper pattern.
export const GET = async (request: Request) => {
  // `withErrorHandling` will execute our handler and catch any errors.
  const result = await withErrorHandling(handler, {
    operation: "fetch_all_artists",
  });

  // If the wrapper caught an error, result.error will be populated.
  if (result.error) {
    logger.api("GET", "/api/artists", result.error.statusCode || 500, {
      errorType: result.error.type,
      completed: true,
    });
    return createErrorResponse(
      result.error.userMessage,
      result.error.statusCode || 500
    );
  }

  // If successful, result.data contains the NextResponse we created in the handler.
  logger.api("GET", "/api/artists", 200, { completed: true });
  return result.data!;
};
