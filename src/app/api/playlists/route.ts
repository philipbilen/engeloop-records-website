// src/app/api/playlists/route.ts

import { NextRequest, NextResponse } from "next/server";
import { withErrorHandling } from "@/lib/errorHandling";
import { createSuccessResponse, createErrorResponse } from "@/lib/apiUtils";
import { logger } from "@/lib/logger";
import { playlistService } from "@/lib/services/playlistService";

// Core logic in a simple async function
async function handler() {
  const playlistData = await playlistService.getPlaylistData();
  return createSuccessResponse(playlistData);
}

// Wrapped GET export that calls the handler
export const GET = async (request: Request) => {
  const result = await withErrorHandling(handler, {
    operation: "fetch_all_playlists",
  });

  if (result.error) {
    logger.api("GET", "/api/playlists", result.error.statusCode || 500, {
      errorType: result.error.type,
      completed: true,
    });
    return createErrorResponse(
      result.error.userMessage,
      result.error.statusCode || 500
    );
  }

  logger.api("GET", "/api/playlists", 200, { completed: true });
  return result.data!;
};
