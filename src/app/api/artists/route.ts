import { NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getServiceRoleSupabase();

    const { data, error } = await supabase
      .from("artists")
      .select(
        "id, artist_name, image_url, spotify_url, apple_music_url, instagram_url"
      )
      .order("artist_name", { ascending: true });

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "GET /api/artists"
      );
      return NextResponse.json({ error: errorMsg }, { status });
    }

    console.log(`Fetched ${data?.length || 0} artists from database`);
    return NextResponse.json(data || []);
  } catch (error: unknown) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
