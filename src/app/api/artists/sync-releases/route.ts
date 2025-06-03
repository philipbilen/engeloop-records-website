import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sortBy = searchParams.get("sort") || "name"; // 'name', 'recent', 'popularity'
    const filter = searchParams.get("filter") || "all"; // 'all', 'recent' (last 6 months), 'active' (last year)

    let query = supabase.from("artists").select(`
                id, 
                artist_name, 
                image_url, 
                spotify_url, 
                apple_music_url, 
                instagram_url,
                spotify_id,
                latest_release_date,
                latest_release_name,
                latest_release_type,
                latest_release_image,
                latest_release_spotify_url
            `);

    // Apply filters
    if (filter === "recent") {
      // Artists with releases in last 6 months
      const sixMonthsAgo = new Date();
      sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
      query = query.gte(
        "latest_release_date",
        sixMonthsAgo.toISOString().split("T")[0]
      );
    } else if (filter === "active") {
      // Artists with releases in last year
      const oneYearAgo = new Date();
      oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
      query = query.gte(
        "latest_release_date",
        oneYearAgo.toISOString().split("T")[0]
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "recent":
        query = query.order("latest_release_date", {
          ascending: false,
          nullsLast: true,
        });
        break;
      case "name":
        query = query.order("artist_name", { ascending: true });
        break;
      default:
        query = query.order("artist_name", { ascending: true });
    }

    const { data, error } = await query;

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to fetch artists" },
        { status: 500 }
      );
    }

    // Calculate additional metadata
    const now = new Date();
    const enhancedData = (data || []).map((artist) => {
      let releaseRecency = null;
      if (artist.latest_release_date) {
        const releaseDate = new Date(artist.latest_release_date);
        const daysDiff = Math.floor(
          (now.getTime() - releaseDate.getTime()) / (1000 * 60 * 60 * 24)
        );

        if (daysDiff <= 30) {
          releaseRecency = "new"; // Within last month
        } else if (daysDiff <= 90) {
          releaseRecency = "recent"; // Within last 3 months
        } else if (daysDiff <= 365) {
          releaseRecency = "this_year"; // Within last year
        } else {
          releaseRecency = "older";
        }
      }

      return {
        ...artist,
        release_recency: releaseRecency,
        days_since_release: artist.latest_release_date
          ? Math.floor(
              (now.getTime() - new Date(artist.latest_release_date).getTime()) /
                (1000 * 60 * 60 * 24)
            )
          : null,
      };
    });

    console.log(
      `Fetched ${enhancedData.length} artists (sort: ${sortBy}, filter: ${filter})`
    );
    return NextResponse.json(enhancedData);
  } catch (error: unknown) {
    console.error("API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
