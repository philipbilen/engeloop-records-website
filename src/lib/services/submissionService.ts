// src/lib/services/submissionService.ts

import { getServiceRoleSupabase } from "@/lib/supabase";
import {
  validateData,
  DemoSubmissionSchema,
  DemoSubmissionData,
} from "@/lib/validation";
import { checkDemoSubmissionLimit } from "@/lib/rateLimiting";
import { logger } from "@/lib/logger";
import { ErrorFactory } from "@/lib/errorHandling";
import { NextResponse } from "next/server";

/**
 * Handles the creation of a new demo submission.
 * This includes validation, rate limiting, and database insertion.
 * @param {any} submissionData - The raw data from the request body.
 * @returns {Promise<{ submissionId: string }>} A promise that resolves with the new submission ID.
 * @throws {AppError} Throws a structured error for validation, rate limiting, or database failures.
 */
async function createSubmission(
  submissionData: any
): Promise<{ submissionId: string }> {
  logger.submission("New demo submission process started.", {
    hasArtistName: !!submissionData.artistName,
    hasTrackTitle: !!submissionData.trackTitle,
  });

  // 1. Validate input data
  const validation = validateData(DemoSubmissionSchema, submissionData);
  if (!validation.success) {
    logger.submission("Validation failed", { errors: validation.errors });
    throw ErrorFactory.validation(
      "Invalid submission data.",
      "Please check the form for errors.",
      {
        validationErrors: validation.errors,
      }
    );
  }

  const data = validation.data;
  logger.submission("Data validated successfully", {
    artistName: data.artistName,
    email: data.email,
  });

  // 2. Check rate limiting
  const rateLimitResult = await checkDemoSubmissionLimit(data.email, {
    artistName: data.artistName,
    trackTitle: data.trackTitle,
  });

  if (!rateLimitResult.allowed) {
    logger.submission("Rate limit exceeded", { email: data.email });
    // For rate limit errors, we need to include extra details for the client.
    const error = ErrorFactory.rateLimit(
      "Demo submission rate limit exceeded.",
      rateLimitResult.message
    );
    // Attach retry-after headers information to the error context
    error.context = {
      retryAfter: Math.ceil(
        (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
      ),
    };
    throw error;
  }

  // 3. Insert into database
  logger.submission("Attempting database insert", { email: data.email });
  const supabase = getServiceRoleSupabase();
  const { data: insertResult, error } = await supabase
    .from("demo_submissions")
    .insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        artist_name: data.artistName,
        track_title: data.trackTitle,
        genres: data.genres,
        instagram_handle: data.instagramHandle,
        spotify_profile_url: data.spotifyProfileUrl,
        additional_info: data.additionalInfo,
        bpm: data.bpm,
        submission_status: "pending",
        submitted_at: new Date().toISOString(),
      },
    ])
    .select("id")
    .single();

  if (error) {
    logger.error("Database insert failed for submission", error, {
      artistName: data.artistName,
      email: data.email,
      errorCode: error.code,
    });
    // Handle specific DB errors
    if (error.code === "23505") {
      throw ErrorFactory.database(
        `Duplicate submission: ${error.message}`,
        "A submission with this email and track title already exists.",
        error,
        { statusCode: 409 } // Conflict
      );
    }
    throw ErrorFactory.database(
      `Database insert failed: ${error.message}`,
      "Failed to submit demo due to a database error. Please try again.",
      error
    );
  }

  logger.submission("Demo submission successful", {
    submissionId: insertResult.id,
    artistName: data.artistName,
  });

  return { submissionId: insertResult.id };
}

export const submissionService = {
  createSubmission,
};
