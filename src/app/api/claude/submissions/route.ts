// src/app/api/claude/submissions/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getServiceRoleSupabase } from "@/lib/supabase";
import { withErrorHandling, ErrorFactory } from "@/lib/errorHandling";
import { createSuccessResponse, createErrorResponse } from "@/lib/apiUtils";
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
  const authResult = validateClaudeAuth(request);
  if (!authResult.authorized) {
    return createUnauthorizedResponse(authResult.error!);
  }

  return withErrorHandling(
    async () => {
      const { searchParams } = new URL(request.url);
      const status = searchParams.get("status");
      const artistName = searchParams.get("artist");
      const limit = parseInt(searchParams.get("limit") || "50");

      const supabase = getServiceRoleSupabase();
      let query = supabase.from("demo_submissions").select(`*`);

      if (status) query = query.eq("submission_status", status);
      if (artistName) query = query.ilike("artist_name", `%${artistName}%`);

      query = query.order("submitted_at", { ascending: false }).limit(limit);

      const { data: submissions, error } = await query;

      if (error) {
        throw ErrorFactory.database(
          `Claude API: fetch submissions failed: ${error.message}`,
          "Failed to retrieve submission data from the database.",
          error
        );
      }

      const now = new Date();
      const formattedSubmissions: ClaudeSubmissionData[] = (
        submissions || []
      ).map((submission) => {
        const daysSince = Math.floor(
          (now.getTime() - new Date(submission.submitted_at).getTime()) /
            (1000 * 60 * 60 * 24)
        );
        let priority: "urgent" | "normal" | "low" = "normal";
        if (submission.submission_status === "pending" && daysSince > 14)
          priority = "urgent";
        else if (daysSince > 30) priority = "low";

        return {
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
          status: submission.submission_status,
          submittedAt: submission.submitted_at,
          daysSinceSubmission: daysSince,
          priority,
        };
      });

      const stats = {
        total: formattedSubmissions.length,
        pending: formattedSubmissions.filter((s) => s.status === "pending")
          .length,
        urgent: formattedSubmissions.filter((s) => s.priority === "urgent")
          .length,
      };

      return createSuccessResponse({ data: formattedSubmissions, stats });
    },
    { operation: "claude_fetch_submissions" }
  ).then((result) => {
    if (result.error) {
      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500,
        result.error.message
      );
    }
    return result.data!;
  });
}
