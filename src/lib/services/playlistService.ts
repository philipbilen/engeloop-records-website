// src/lib/services/playlistService.ts

import { getServiceRoleSupabase } from "@/lib/supabase";
import { logger } from "@/lib/logger";
import { ErrorFactory } from "@/lib/errorHandling";

interface Playlist {
  name: string;
  followers: number;
  description: string;
  trackCount: number;
  image: string;
  spotifyUrl: string;
}

interface PlaylistData {
  hero: Playlist;
  supporting: Playlist[];
  totalFollowers: number;
  playlistCount: number;
  success: boolean;
  lastUpdated: string;
}

/**
 * Fetches the main playlist data object from the database.
 * @returns {Promise<PlaylistData>} A promise that resolves to the playlist data.
 * @throws {AppError} Throws a structured error if data is not found or if a database error occurs.
 */
async function getPlaylistData(): Promise<PlaylistData> {
  const supabase = getServiceRoleSupabase();
  logger.info("Fetching playlist data from service layer.");

  const { data, error } = await supabase
    .from("playlist_data")
    .select("data")
    .eq("id", 1)
    .single();

  if (error) {
    if (error.code === "PGRST116") {
      // Specific error for .single() not finding a row
      throw ErrorFactory.notFound(
        `Playlist data not found in database: ${error.message}`,
        "Could not find the required playlist data.",
        { errorCode: error.code }
      );
    }
    // For all other database errors
    throw ErrorFactory.database(
      `Failed to fetch playlist data: ${error.message}`,
      "Could not retrieve playlist data due to a database error.",
      error
    );
  }

  if (!data || !data.data) {
    throw ErrorFactory.notFound(
      "Playlist data row exists but the 'data' column is empty.",
      "Playlist data is currently unavailable."
    );
  }

  logger.info("Playlist data retrieved successfully from service.");
  return data.data as PlaylistData;
}

export const playlistService = {
  getPlaylistData,
};
