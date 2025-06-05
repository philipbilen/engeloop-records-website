// src/app/api/claude/submissions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";
import {
  validateClaudeAuth,
  createUnauthorizedResponse,
} from "@/lib/claude-auth";

interface ClaudeSubmissionData {
  id: string;
  artistName: string;
  trackTitle: string;
  email: string;
  firstName: string;
  lastName: string;
  genres: string[];
  bpm?: number;
  instagramHandle?: string;
  spotifyProfileUrl?: string;
  additionalInfo?: string;
  status: "pending" | "reviewing" | "approved" | "rejected";
  submittedAt: string;
  daysSinceSubmission: number;
  priority: "urgent" | "normal" | "low";
}

export async function GET(request: NextRequest) {
  // Authenticate Claude access
  const authResult = validateClaudeAuth(request);
  if (!authResult.authorized) {
    return createUnauthorizedResponse(authResult.error!);
  }

  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status"); // Filter by status
    const priority = searchParams.get("priority"); // Filter by priority
    const artistName = searchParams.get("artist"); // Search by artist
    const limit = parseInt(searchParams.get("limit") || "50");
    const format = searchParams.get("format") || "detailed";

    const supabase = getServiceRoleSupabase();

    let query = supabase.from("demo_submissions").select(`
        id,
        first_name,
        last_name,
        email,
        artist_name,
        track_title,
        genres,
        bpm,
        instagram_handle,
        spotify_profile_url,
        additional_info,
        submission_status,
        submitted_at,
        created_at
      `);

    // Apply filters
    if (status) {
      query = query.eq("submission_status", status);
    }

    if (artistName) {
      query = query.ilike("artist_name", `%${artistName}%`);
    }

    // Order by submission date (newest first)
    query = query.order("submitted_at", { ascending: false });

    // Apply limit
    query = query.limit(limit);

    const { data: submissions, error } = await query;

    if (error) {
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "Claude API: fetch submissions"
      );
      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    // Calculate additional metadata and format for Claude
    const now = new Date();
    const formattedSubmissions: ClaudeSubmissionData[] = (
      submissions || []
    ).map((submission) => {
      const submittedDate = new Date(submission.submitted_at);
      const daysSince = Math.floor(
        (now.getTime() - submittedDate.getTime()) / (1000 * 60 * 60 * 24)
      );

      // Calculate priority based on age and status
      let priority: "urgent" | "normal" | "low" = "normal";
      if (submission.submission_status === "pending" && daysSince > 14) {
        priority = "urgent";
      } else if (daysSince > 30) {
        priority = "low";
      }

      const baseData: ClaudeSubmissionData = {
        id: submission.id,
        artistName: submission.artist_name,
        trackTitle: submission.track_title,
        email: submission.email,
        firstName: submission.first_name,
        lastName: submission.last_name,
        genres: submission.genres || [],
        bpm: submission.bpm || undefined,
        instagramHandle: submission.instagram_handle || undefined,
        spotifyProfileUrl: submission.spotify_profile_url || undefined,
        additionalInfo: submission.additional_info || undefined,
        status: submission.submission_status as any,
        submittedAt: submission.submitted_at,
        daysSinceSubmission: daysSince,
        priority,
      };

      // Return summary vs detailed format
      if (format === "summary") {
        return {
          id: baseData.id,
          artistName: baseData.artistName,
          trackTitle: baseData.trackTitle,
          status: baseData.status,
          daysSinceSubmission: baseData.daysSinceSubmission,
          priority: baseData.priority,
        } as ClaudeSubmissionData;
      }

      return baseData;
    });

    // Filter by priority if requested (after calculating priorities)
    const finalSubmissions = priority
      ? formattedSubmissions.filter((sub) => sub.priority === priority)
      : formattedSubmissions;

    // Generate summary stats
    const stats = {
      total: finalSubmissions.length,
      byStatus: {
        pending: finalSubmissions.filter((s) => s.status === "pending").length,
        reviewing: finalSubmissions.filter((s) => s.status === "reviewing")
          .length,
        approved: finalSubmissions.filter((s) => s.status === "approved")
          .length,
        rejected: finalSubmissions.filter((s) => s.status === "rejected")
          .length,
      },
      byPriority: {
        urgent: finalSubmissions.filter((s) => s.priority === "urgent").length,
        normal: finalSubmissions.filter((s) => s.priority === "normal").length,
        low: finalSubmissions.filter((s) => s.priority === "low").length,
      },
      oldestPending:
        finalSubmissions
          .filter((s) => s.status === "pending")
          .sort((a, b) => b.daysSinceSubmission - a.daysSinceSubmission)[0]
          ?.daysSinceSubmission || 0,
    };

    return NextResponse.json({
      success: true,
      data: finalSubmissions,
      stats,
      metadata: {
        lastUpdated: new Date().toISOString(),
        format,
        appliedFilters: { status, priority, artistName, limit },
      },
    });
  } catch (error: unknown) {
    console.error("Claude Submissions API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch submission data",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
