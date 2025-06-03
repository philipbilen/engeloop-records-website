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

    // Get artists with Spotify IDs
    const { data: artists, error } = await supabase
      .from("artists")
      .select("id, artist_name, spotify_id")
      .not("spotify_id", "is", null)
      .order("artist_name", { ascending: true });

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "refresh-spotify: fetch artists"
      );
      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    const results = [];
    let updated = 0;
    let failed = 0;

    console.log(
      `Refreshing data for ${artists?.length || 0} artists with Spotify IDs...`
    );

    for (const artist of artists || []) {
      try {
        // Get fresh data from Spotify using stored ID
        const freshData = await spotifyAPI.getArtistByID(artist.spotify_id);

        if (freshData) {
          // Update with latest data
          const { error: updateError } = await supabase
            .from("artists")
            .update({
              image_url: freshData.images?.[0]?.url || null,
              spotify_url: freshData.external_urls.spotify,
            })
            .eq("id", artist.id);

          if (updateError) {
            throw updateError;
          }

          console.log(`✅ Refreshed ${artist.artist_name}`);
          updated++;

          results.push({
            artist: artist.artist_name,
            status: "updated",
            newData: {
              followers: freshData.followers.total,
              popularity: freshData.popularity,
              imageUrl: freshData.images?.[0]?.url,
            },
          });
        } else {
          failed++;
          results.push({
            artist: artist.artist_name,
            status: "failed",
          });
        }

        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (error: unknown) {
        console.error(`Error refreshing ${artist.artist_name}:`, error);
        failed++;
        results.push({
          artist: artist.artist_name,
          status: "error",
        });
      }
    }

    return NextResponse.json({
      success: true,
      summary: {
        total: artists?.length || 0,
        updated,
        failed,
      },
      results,
    });
  } catch (error: unknown) {
    console.error("Refresh error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
