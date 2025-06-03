import { NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";

export async function GET() {
  try {
    const supabase = getServiceRoleSupabase();

    const { data, error } = await supabase
      .from("playlist_data")
      .select("data")
      .eq("id", 1)
      .single();

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "GET /api/playlists/all"
      );
      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    return NextResponse.json(data.data);
  } catch (error: unknown) {
    console.error("Playlists API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch playlists",
      },
      { status: 500 }
    );
  }
}
