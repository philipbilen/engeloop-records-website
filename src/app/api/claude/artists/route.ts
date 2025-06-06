// src/app/api/claude/artists/route.ts

import { NextRequest, NextResponse } from "next/server";
import { getServiceRoleSupabase } from "@/lib/supabase";
import { withErrorHandling, ErrorFactory } from "@/lib/errorHandling";
import { createSuccessResponse, createErrorResponse } from "@/lib/apiUtils";
import { logger } from "@/lib/logger";
import {
  validateClaudeAuth,
  createUnauthorizedResponse,
} from "@/lib/claude-auth";

// The ClaudeArtistData interface remains the same
interface ClaudeArtistData {
  id: string;
  artistName: string;
  contactEmail?: string;
  imageUrl?: string;
  spotifyUrl?: string;
  instagramUrl?: string;
  appleMusicUrl?: string;
  spotifyId?: string;
  status: "active" | "inactive" | "prospect";
  joinedDate?: string;
  lastContact?: string;
  currentProjects?: string[];
  dealTerms?: {
    type: string;
    split?: string;
    duration?: string;
  };
}

export async function GET(request: NextRequest) {
  // 1. Claude-specific authentication
  const authResult = validateClaudeAuth(request);
  if (!authResult.authorized) {
    logger.security("Claude API unauthorized access attempt", {
      reason: authResult.error,
    });
    return createUnauthorizedResponse(authResult.error!);
  }

  const { searchParams } = new URL(request.url);
  const artistId = searchParams.get("id");
  const includeInactive = searchParams.get("includeInactive") === "true";
  const format = searchParams.get("format") || "detailed";

  // 2. Wrap the core logic
  return withErrorHandling(
    async () => {
      const supabase = getServiceRoleSupabase();
      let query = supabase.from("artists").select(`
          id, artist_name, image_url, spotify_url, apple_music_url, 
          instagram_url, spotify_id, created_at, updated_at
      `);

      if (artistId) {
        query = query.eq("id", artistId);
      }
      query = query.order("artist_name", { ascending: true });

      const { data: artists, error } = await query;

      if (error) {
        throw ErrorFactory.database(
          `Claude API: fetch artists failed: ${error.message}`,
          "Could not retrieve artist data from the database.",
          error
        );
      }

      // 3. Format data (business logic)
      const formattedArtists: ClaudeArtistData[] = (artists || []).map(
        (artist) => {
          const baseData: ClaudeArtistData = {
            id: artist.id,
            artistName: artist.artist_name,
            imageUrl: artist.image_url || undefined,
            spotifyUrl: artist.spotify_url || undefined,
            instagramUrl: artist.instagram_url || undefined,
            appleMusicUrl: artist.apple_music_url || undefined,
            spotifyId: artist.spotify_id || undefined,
            status: "active",
            joinedDate: artist.created_at,
          };
          if (format === "summary") {
            return {
              id: baseData.id,
              artistName: baseData.artistName,
              status: baseData.status,
              spotifyUrl: baseData.spotifyUrl,
            } as ClaudeArtistData;
          }
          return baseData;
        }
      );

      const metadata = {
        totalArtists: formattedArtists.length,
        lastUpdated: new Date().toISOString(),
        format,
        includeInactive,
      };

      const responsePayload = {
        data: artistId ? formattedArtists[0] || null : formattedArtists,
        metadata,
      };

      logger.info(
        `Claude API: Successfully processed ${formattedArtists.length} artists.`
      );

      // ** FIX: Return the raw payload, not a NextResponse **
      return responsePayload;
    },
    {
      operation: "claude_fetch_artists",
      queryParams: { artistId, includeInactive, format },
    }
  ).then((result) => {
    // 4. Handle the final response creation in the .then() block
    if (result.error) {
      logger.api("GET", "/api/claude/artists", result.error.statusCode || 500, {
        errorType: result.error.type,
      });
      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500
      );
    }

    // ** FIX: Now `result.data` is the raw `responsePayload` object **
    logger.api("GET", "/api/claude/artists", 200, {
      totalArtists: result.data?.metadata.totalArtists,
    });

    // Create the final success response here
    return createSuccessResponse(result.data);
  });
}
