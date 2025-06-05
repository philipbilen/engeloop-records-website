// src/app/api/submit-demo/route.ts

import { NextResponse } from "next/server";
import { getServiceRoleSupabase } from "@/lib/supabase";
import { validateData, DemoSubmissionSchema } from "@/lib/validation";
import { checkDemoSubmissionLimit } from "@/lib/rateLimiting";
import { logger } from "@/lib/logger";
import { withErrorHandling, ErrorFactory } from "@/lib/errorHandling";
import { createErrorResponse, createSuccessResponse } from "@/lib/apiUtils";

export async function POST(request: Request) {
  logger.api("POST", "/api/submit-demo", 200, { started: true });

  return withErrorHandling(
    async () => {
      // Parse request body
      const body = await request.json().catch(() => {
        throw ErrorFactory.validation(
          "Invalid JSON in request body",
          "Invalid request format. Please try again."
        );
      });

      logger.submission("Demo submission received", {
        hasArtistName: !!body.artistName,
        hasTrackTitle: !!body.trackTitle,
        hasEmail: !!body.email,
      });

      // Validate input data using Zod
      const validation = validateData(DemoSubmissionSchema, body);
      if (!validation.success) {
        logger.submission("Validation failed", { errors: validation.errors });
        return createErrorResponse("Validation failed", 400, validation.errors);
      }

      const data = validation.data;
      logger.submission("Data validated successfully", {
        artistName: data.artistName,
        email: data.email,
        genreCount: data.genres.length,
      });

      // Check rate limiting
      const rateLimitResult = await checkDemoSubmissionLimit(data.email, {
        artistName: data.artistName,
        trackTitle: data.trackTitle,
      });

      if (!rateLimitResult.allowed) {
        logger.submission("Rate limit exceeded", {
          email: data.email,
          remainingAttempts: rateLimitResult.remainingAttempts,
          resetTime: rateLimitResult.resetTime,
        });

        return NextResponse.json(
          {
            success: false,
            error: rateLimitResult.message,
            retryAfter: Math.ceil(
              (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
            ),
          },
          {
            status: 429,
            headers: {
              "Retry-After": Math.ceil(
                (rateLimitResult.resetTime.getTime() - Date.now()) / 1000
              ).toString(),
            },
          }
        );
      }

      // Insert into database
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
        logger.error("Database insert failed", error, {
          artistName: data.artistName,
          email: data.email,
          errorCode: error.code,
        });

        // Handle duplicate submissions
        if (error.code === "23505") {
          return createErrorResponse(
            "A submission with this email and track title already exists",
            409
          );
        }

        throw ErrorFactory.database(
          `Database insert failed: ${error.message}`,
          "Failed to submit demo. Please try again.",
          error,
          { errorCode: error.code }
        );
      }

      // Log successful submission
      logger.submission("Demo submission successful", {
        submissionId: insertResult.id,
        artistName: data.artistName,
        email: data.email,
        trackTitle: data.trackTitle,
        genres: data.genres,
      });

      // Return success response
      return createSuccessResponse(
        { submissionId: insertResult.id },
        "Demo submitted successfully! We'll review it and get back to you within 7-14 business days."
      );
    },
    { operation: "demo_submission" }
  ).then((result) => {
    if (result.error) {
      logger.api("POST", "/api/submit-demo", result.error.statusCode || 500, {
        errorType: result.error.type,
        completed: true,
      });
      return createErrorResponse(
        result.error.userMessage,
        result.error.statusCode || 500,
        process.env.NODE_ENV === "development"
          ? result.error.message
          : undefined
      );
    }

    logger.api("POST", "/api/submit-demo", 200, { completed: true });
    return result.data!;
  });
}
