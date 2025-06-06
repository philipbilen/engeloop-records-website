// src/app/api/artists/refresh-data/route.ts

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
  logger.sync(
    "Spotify data refresh for existing artists requested",
    user.email
  );

  return withErrorHandling(
    async () => {
      // All the complex logic is now encapsulated in the service.
      const refreshResult =
        await artistService.refreshExistingArtistsWithSpotify(user.email);

      // Return the raw data. The wrapper will pass this to the .then() block.
      return refreshResult;
    },
    {
      operation: "spotify_refresh_existing_artists",
      adminUser: user.email,
    }
  ).then((result) => {
    // This block handles the final HTTP response creation.
    if (result.error) {
      logger.api(
        "POST",
        "/api/artists/refresh-data",
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

    logger.api("POST", "/api/artists/refresh-data", 200, {
      summary: result.data?.summary,
    });

    // Wrap the raw data from the service in our standard success response.
    return createSuccessResponse(result.data);
  });
});
