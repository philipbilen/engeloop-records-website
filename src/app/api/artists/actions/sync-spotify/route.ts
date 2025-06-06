// src/app/api/artists/sync-spotify/route.ts

import {
  withAdminAuth,
  createSuccessResponse,
  createErrorResponse,
  AdminUser,
} from "@/lib/apiUtils";
import { withErrorHandling } from "@/lib/errorHandling";
import { logger } from "@/lib/logger";
import { artistService } from "@/lib/services/artistService";

export const POST = withAdminAuth(async (request: Request, user: AdminUser) => {
  logger.sync("Spotify sync for new artists requested", user.email);

  return withErrorHandling(
    async () => {
      // All the complex logic is now encapsulated in the service.
      const syncResult = await artistService.syncNewArtistsWithSpotify(
        user.email
      );

      // Return the raw data. The wrapper will pass this to the .then() block.
      return syncResult;
    },
    {
      operation: "spotify_sync_new_artists",
      adminUser: user.email,
    }
  ).then((result) => {
    // This block handles the final HTTP response creation.
    if (result.error) {
      logger.api(
        "POST",
        "/api/artists/sync-spotify",
        result.error.statusCode || 500,
        {
          errorType: result.error.type,
        }
      );
      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500
      );
    }

    logger.api("POST", "/api/artists/sync-spotify", 200, {
      summary: result.data?.summary,
    });

    // Wrap the raw data from the service in our standard success response.
    return createSuccessResponse(result.data);
  });
});
