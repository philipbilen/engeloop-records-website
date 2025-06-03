import { NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";
import { spotifyAPI } from "@/lib/spotify";

// Security: Check for authorization header
function checkAuth(request: Request) {
  const authHeader = request.headers.get("authorization");
  const expectedAuth = `Bearer ${process.env.API_SECRET_KEY}`;

  if (!authHeader || authHeader !== expectedAuth) {
    return false;
  }
  return true;
}

interface Artist {
  id: string;
  artist_name: string;
  image_url: string | null;
  spotify_url: string | null;
  spotify_id: string | null;
}

interface SyncResult {
  artist: string;
  status: "updated" | "skipped" | "not_found" | "error";
  spotifyData?: {
    id: string;
    name: string;
    imageUrl: string | null;
    spotifyUrl: string;
    followers: number;
    popularity: number;
  };
  confidence?: string;
  error?: unknown;
}

export async function POST(request: Request) {
  // Check authorization
  if (!checkAuth(request)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized" },
      { status: 401 }
    );
  }

  try {
    const supabase = getServiceRoleSupabase();

    // Get all artists from database
    const { data: artists, error } = await supabase
      .from("artists")
      .select("id, artist_name, image_url, spotify_url, spotify_id")
      .order("artist_name", { ascending: true });

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "sync-spotify: fetch artists"
      );
      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    const results: SyncResult[] = [];
    let updated = 0;
    let skipped = 0;
    let failed = 0;

    console.log(
      `Starting enhanced Spotify sync for ${artists?.length || 0} artists...`
    );

    for (const artist of (artists as Artist[]) || []) {
      try {
        // Skip if already has spotify_id (already processed)
        if (artist.spotify_id) {
          console.log(
            `Skipping ${artist.artist_name} - already has Spotify ID`
          );
          skipped++;
          results.push({
            artist: artist.artist_name,
            status: "skipped",
          });
          continue;
        }

        console.log(`Searching Spotify for: ${artist.artist_name}`);

        // Use enhanced search with confidence scoring
        const searchResult = await spotifyAPI.searchArtistWithConfidence(
          artist.artist_name
        );

        if (searchResult.artist && searchResult.confidence === "high") {
          // Auto-approve high confidence matches
          const spotifyData = {
            id: searchResult.artist.id,
            name: searchResult.artist.name,
            imageUrl: searchResult.artist.images?.[0]?.url || null,
            spotifyUrl: searchResult.artist.external_urls.spotify,
            followers: searchResult.artist.followers.total,
            popularity: searchResult.artist.popularity,
          };

          // Update database with comprehensive Spotify data
          const updateData: Partial<Artist> = {
            spotify_id: spotifyData.id,
            spotify_url: spotifyData.spotifyUrl,
          };

          // Only update image if we don't have one
          if (!artist.image_url && spotifyData.imageUrl) {
            updateData.image_url = spotifyData.imageUrl;
          }

          const { error: updateError } = await supabase
            .from("artists")
            .update(updateData)
            .eq("id", artist.id);

          if (updateError) {
            throw updateError;
          }

          console.log(
            `✅ Updated ${artist.artist_name} with Spotify ID: ${spotifyData.id}`
          );
          updated++;

          results.push({
            artist: artist.artist_name,
            status: "updated",
            spotifyData,
            confidence: searchResult.confidence,
          });
        } else if (
          searchResult.artist &&
          searchResult.confidence === "medium"
        ) {
          // Log medium confidence for manual review
          console.log(
            `⚠️ Medium confidence match for ${artist.artist_name} - needs review`
          );

          results.push({
            artist: artist.artist_name,
            status: "not_found",
            spotifyData: {
              id: searchResult.artist.id,
              name: searchResult.artist.name,
              imageUrl: searchResult.artist.images?.[0]?.url || null,
              spotifyUrl: searchResult.artist.external_urls.spotify,
              followers: searchResult.artist.followers.total,
              popularity: searchResult.artist.popularity,
            },
            confidence: "medium",
          });
          failed++;
        } else {
          console.log(
            `❌ No high-confidence Spotify match for: ${artist.artist_name}`
          );
          failed++;

          results.push({
            artist: artist.artist_name,
            status: "not_found",
            confidence: searchResult.confidence,
          });
        }

        // Add delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 150));
      } catch (artistError: unknown) {
        console.error(`Error processing ${artist.artist_name}:`, artistError);
        failed++;

        results.push({
          artist: artist.artist_name,
          status: "error",
          error: artistError,
        });
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        total: artists?.length || 0,
        updated,
        skipped,
        failed,
      },
      results,
    });
  } catch (error: unknown) {
    console.error("Enhanced Spotify sync error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: error,
      },
      { status: 500 }
    );
  }
}
