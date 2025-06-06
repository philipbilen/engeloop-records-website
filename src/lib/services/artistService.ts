// src/lib/services/artistService.ts

import { getServiceRoleSupabase } from "@/lib/supabase";
import { spotifyAPI } from "@/lib/spotify";
import { logger } from "@/lib/logger";
import { ErrorFactory } from "@/lib/errorHandling";
import { Artist, SyncResult } from "@/types";

/**
 * Fetches all artists from the database, ordered by name.
 * @returns {Promise<Artist[]>} A promise that resolves to an array of artists.
 */
async function getAllArtists(): Promise<Artist[]> {
  // ... (this function remains unchanged)
  const supabase = getServiceRoleSupabase();
  const { data, error } = await supabase
    .from("artists")
    .select(
      "id, artist_name, image_url, spotify_url, apple_music_url, instagram_url, spotify_id"
    )
    .order("artist_name", { ascending: true });

  if (error) {
    throw ErrorFactory.database(
      `Failed to fetch all artists: ${error.message}`,
      "Could not retrieve artist data.",
      error
    );
  }

  return (data as Artist[]) || [];
}

/**
 * Syncs artists from the database who are missing a Spotify ID.
 * @param {string} adminUserEmail - The email of the admin performing the sync for logging.
 * @returns {Promise<{ summary: object; results: SyncResult[] }>} A promise that resolves to the sync summary.
 */
async function syncNewArtistsWithSpotify(
  adminUserEmail: string
): Promise<{ summary: object; results: SyncResult[] }> {
  // ... (this function remains unchanged)
  const supabase = getServiceRoleSupabase();

  const { data: artists, error } = await supabase
    .from("artists")
    .select("id, artist_name, image_url, spotify_id")
    .is("spotify_id", null)
    .order("artist_name", { ascending: true });

  if (error) {
    throw ErrorFactory.database(
      `Sync Spotify: fetch artists failed: ${error.message}`,
      "Could not retrieve unsynced artists from the database.",
      error
    );
  }

  const results: SyncResult[] = [];
  let updated = 0;
  let skipped = 0;
  let failed = 0;

  logger.sync(
    `Processing ${artists?.length || 0} unsynced artists`,
    adminUserEmail
  );

  for (const artist of (artists as Artist[]) || []) {
    try {
      const searchResult = await spotifyAPI.searchArtistWithConfidence(
        artist.artist_name
      );

      if (searchResult.artist && searchResult.confidence === "high") {
        const spotifyData = {
          id: searchResult.artist.id,
          name: searchResult.artist.name,
          imageUrl: searchResult.artist.images?.[0]?.url || null,
          spotifyUrl: searchResult.artist.external_urls.spotify,
          followers: searchResult.artist.followers.total,
          popularity: searchResult.artist.popularity,
        };

        const { error: updateError } = await supabase
          .from("artists")
          .update({
            spotify_id: spotifyData.id,
            spotify_url: spotifyData.spotifyUrl,
            ...(!artist.image_url && { image_url: spotifyData.imageUrl }),
          })
          .eq("id", artist.id);

        if (updateError) throw updateError;

        updated++;
        results.push({
          artist: artist.artist_name,
          status: "updated",
          spotifyData,
          confidence: searchResult.confidence,
        });
      } else {
        failed++;
        results.push({
          artist: artist.artist_name,
          status: "not_found",
          confidence: searchResult.confidence,
        });
        logger.warn(`No high-confidence match for: ${artist.artist_name}`, {
          confidence: searchResult.confidence,
          score: searchResult.score,
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 150));
    } catch (artistError) {
      failed++;
      results.push({
        artist: artist.artist_name,
        status: "error",
        error: artistError,
      });
      logger.error(
        `Error processing ${artist.artist_name} during sync`,
        artistError
      );
    }
  }

  const summary = { total: artists?.length || 0, updated, skipped, failed };
  logger.sync(
    "Spotify sync for new artists completed",
    adminUserEmail,
    summary
  );

  return { summary, results };
}

/**
 * Refreshes data for artists who already have a Spotify ID.
 * @param {string} adminUserEmail - The email of the admin performing the refresh for logging.
 * @returns {Promise<{ summary: object; results: SyncResult[] }>} A promise that resolves to the refresh summary.
 */
async function refreshExistingArtistsWithSpotify(
  adminUserEmail: string
): Promise<{ summary: object; results: SyncResult[] }> {
  const supabase = getServiceRoleSupabase();

  const { data: artists, error } = await supabase
    .from("artists")
    .select("id, artist_name, spotify_id")
    .not("spotify_id", "is", null) // Only fetch artists WITH a spotify_id
    .order("artist_name", { ascending: true });

  if (error) {
    throw ErrorFactory.database(
      `Refresh Spotify: fetch artists failed: ${error.message}`,
      "Could not retrieve existing artists from the database.",
      error
    );
  }

  const results: SyncResult[] = [];
  let updated = 0;
  let failed = 0;

  logger.sync(
    `Refreshing data for ${artists?.length || 0} existing artists`,
    adminUserEmail
  );

  for (const artist of (artists as Artist[]) || []) {
    try {
      const freshData = await spotifyAPI.getArtistByID(artist.spotify_id!);

      if (freshData) {
        const { error: updateError } = await supabase
          .from("artists")
          .update({
            image_url: freshData.images?.[0]?.url || null,
            spotify_url: freshData.external_urls.spotify,
          })
          .eq("id", artist.id);

        if (updateError) throw updateError;

        updated++;
        results.push({
          artist: artist.artist_name,
          status: "updated",
          newData: {
            followers: freshData.followers.total,
            popularity: freshData.popularity,
            imageUrl: freshData.images?.[0]?.url || null,
          },
        });
      } else {
        failed++;
        results.push({ artist: artist.artist_name, status: "not_found" });
        logger.warn(
          `Could not re-fetch Spotify artist by ID: ${artist.spotify_id}`,
          { artistName: artist.artist_name }
        );
      }
      await new Promise((resolve) => setTimeout(resolve, 100)); // Rate limiting
    } catch (artistError) {
      failed++;
      results.push({
        artist: artist.artist_name,
        status: "error",
        error: artistError,
      });
      logger.error(`Error refreshing ${artist.artist_name}`, artistError, {
        spotifyId: artist.spotify_id,
      });
    }
  }

  const summary = { total: artists?.length || 0, updated, skipped: 0, failed };
  logger.sync("Spotify data refresh completed", adminUserEmail, summary);

  return { summary, results };
}

// Export all functions as a single service object
export const artistService = {
  getAllArtists,
  syncNewArtistsWithSpotify,
  refreshExistingArtistsWithSpotify, // <-- Newly added
};
