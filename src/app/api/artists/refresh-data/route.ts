import { NextResponse } from "next/server";
import {
  createServerSupabaseClient,
  getServiceRoleSupabase,
  handleSupabaseError,
} from "@/lib/supabase";
import { spotifyAPI } from "@/lib/spotify";

// Security: Check for authenticated admin user
async function checkAdminAuth(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        authorized: false,
        error: "Missing or invalid authorization header",
      };
    }

    const token = authHeader.split(" ")[1];

    // Create server client and verify the JWT token
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return { authorized: false, error: "Invalid or expired token" };
    }

    // Check if user has admin role
    const userRole = user.user_metadata?.role;
    if (userRole !== "admin") {
      return { authorized: false, error: "Insufficient privileges" };
    }

    return { authorized: true, user };
  } catch (error) {
    console.error("Auth check error:", error);
    return { authorized: false, error: "Authentication failed" };
  }
}

export async function POST(request: Request) {
  // Check authentication
  const authResult = await checkAdminAuth(request);
  if (!authResult.authorized) {
    return NextResponse.json(
      { success: false, error: authResult.error },
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
      `[Admin: ${authResult.user?.email}] Refreshing data for ${
        artists?.length || 0
      } artists with Spotify IDs...`
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

    console.log(
      `[Admin: ${authResult.user?.email}] Refresh completed: ${updated} updated, ${failed} failed`
    );

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
