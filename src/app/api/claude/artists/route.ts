// src/app/api/claude/artists/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";
import {
  validateClaudeAuth,
  createUnauthorizedResponse,
} from "@/lib/claude-auth";

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
  // Authenticate Claude access
  const authResult = validateClaudeAuth(request);
  if (!authResult.authorized) {
    return createUnauthorizedResponse(authResult.error!);
  }

  try {
    const { searchParams } = new URL(request.url);
    const artistId = searchParams.get("id");
    const includeInactive = searchParams.get("includeInactive") === "true";
    const format = searchParams.get("format") || "detailed"; // 'detailed' or 'summary'

    const supabase = getServiceRoleSupabase();

    let query = supabase.from("artists").select(`
        id,
        artist_name,
        image_url,
        spotify_url,
        apple_music_url,
        instagram_url,
        spotify_id,
        created_at,
        updated_at
      `);

    // Filter by specific artist if requested
    if (artistId) {
      query = query.eq("id", artistId);
    }

    // Order by name for consistent results
    query = query.order("artist_name", { ascending: true });

    const { data: artists, error } = await query;

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "Claude API: fetch artists"
      );
      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    // Format data for Claude consumption
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
          status: "active", // Default for now - you can add a status field to your DB later
          joinedDate: artist.created_at,
        };

        // Add summary vs detailed formatting
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

    // Response metadata
    const metadata = {
      totalArtists: formattedArtists.length,
      lastUpdated: new Date().toISOString(),
      format,
      includeInactive,
    };

    return NextResponse.json({
      success: true,
      data: artistId ? formattedArtists[0] || null : formattedArtists,
      metadata,
    });
  } catch (error: unknown) {
    console.error("Claude Artists API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch artist data",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
