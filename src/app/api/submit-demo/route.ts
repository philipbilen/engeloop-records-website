import { NextResponse } from "next/server";
import { getServiceRoleSupabase, handleSupabaseError } from "@/lib/supabase";

// Validation schema for demo submission
interface DemoSubmissionData {
  firstName: string;
  lastName: string;
  email: string;
  artistName: string;
  trackTitle: string;
  genres: string[];
  instagramHandle?: string;
  spotifyProfileUrl?: string;
  additionalInfo?: string;
  bpm?: number;
}

// Input validation function
function validateDemoSubmission(data: unknown): {
  isValid: boolean;
  errors: string[];
  sanitized?: DemoSubmissionData;
} {
  const errors: string[] = [];

  // Type guard to ensure data is an object
  if (!data || typeof data !== "object") {
    return { isValid: false, errors: ["Invalid request data"] };
  }

  const input = data as Record<string, unknown>;

  // Required fields validation
  if (
    !input.firstName ||
    typeof input.firstName !== "string" ||
    input.firstName.trim().length < 1
  ) {
    errors.push("First name is required");
  }

  if (
    !input.lastName ||
    typeof input.lastName !== "string" ||
    input.lastName.trim().length < 1
  ) {
    errors.push("Last name is required");
  }

  if (!input.email || typeof input.email !== "string") {
    errors.push("Email is required");
  } else {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.email)) {
      errors.push("Please provide a valid email address");
    }
  }

  if (
    !input.artistName ||
    typeof input.artistName !== "string" ||
    input.artistName.trim().length < 1
  ) {
    errors.push("Artist name is required");
  }

  if (
    !input.trackTitle ||
    typeof input.trackTitle !== "string" ||
    input.trackTitle.trim().length < 1
  ) {
    errors.push("Track title is required");
  }

  if (
    !input.genres ||
    !Array.isArray(input.genres) ||
    input.genres.length === 0
  ) {
    errors.push("At least one genre must be selected");
  }

  // Optional fields validation
  if (input.instagramHandle && typeof input.instagramHandle === "string") {
    // Remove @ symbol if present and validate
    const handle = input.instagramHandle.replace(/^@/, "").trim();
    if (handle.length > 0 && !/^[a-zA-Z0-9._]+$/.test(handle)) {
      errors.push("Instagram handle contains invalid characters");
    }
  }

  if (input.spotifyProfileUrl && typeof input.spotifyProfileUrl === "string") {
    if (!input.spotifyProfileUrl.includes("spotify.com")) {
      errors.push("Please provide a valid Spotify URL");
    }
  }

  if (
    input.bpm &&
    (typeof input.bpm !== "number" || input.bpm < 60 || input.bpm > 200)
  ) {
    errors.push("BPM must be a number between 60 and 200");
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Return sanitized data
  const sanitized: DemoSubmissionData = {
    firstName: input.firstName as string,
    lastName: input.lastName as string,
    email: (input.email as string).toLowerCase().trim(),
    artistName: (input.artistName as string).trim(),
    trackTitle: (input.trackTitle as string).trim(),
    genres: (input.genres as string[]).filter(
      (g: unknown) => typeof g === "string" && g.length > 0
    ),
    instagramHandle: input.instagramHandle
      ? (input.instagramHandle as string).replace(/^@/, "").trim() || undefined
      : undefined,
    spotifyProfileUrl: input.spotifyProfileUrl
      ? (input.spotifyProfileUrl as string).trim() || undefined
      : undefined,
    additionalInfo: input.additionalInfo
      ? (input.additionalInfo as string).trim() || undefined
      : undefined,
    bpm: (input.bpm as number) || undefined,
  };

  return { isValid: true, errors: [], sanitized };
}

// Rate limiting check (simple in-memory store - in production, use Redis)
const submissionAttempts = new Map<
  string,
  { count: number; lastAttempt: number }
>();

function checkRateLimit(email: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const key = email.toLowerCase();
  const attempt = submissionAttempts.get(key);

  // Reset counter if more than 1 hour has passed
  if (!attempt || now - attempt.lastAttempt > 3600000) {
    submissionAttempts.set(key, { count: 1, lastAttempt: now });
    return { allowed: true };
  }

  // Allow up to 3 submissions per hour
  if (attempt.count >= 3) {
    return {
      allowed: false,
      message:
        "Too many submissions. Please wait an hour before submitting again.",
    };
  }

  // Update attempt count
  submissionAttempts.set(key, { count: attempt.count + 1, lastAttempt: now });
  return { allowed: true };
}

export async function POST(request: Request) {
  console.log("🔥 Demo submission API called");

  try {
    // Parse request body
    const body = await request.json();
    console.log("📝 Request body:", body);

    // Validate input data
    const validation = validateDemoSubmission(body);
    if (!validation.isValid) {
      console.log("❌ Validation failed:", validation.errors);
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 }
      );
    }

    const data = validation.sanitized!;
    console.log("✅ Data validated:", data);

    // Check rate limiting
    const rateLimitCheck = checkRateLimit(data.email);
    if (!rateLimitCheck.allowed) {
      console.log("🚫 Rate limit exceeded for:", data.email);
      return NextResponse.json(
        {
          success: false,
          error: rateLimitCheck.message,
        },
        { status: 429 }
      );
    }

    // Insert into database using service role
    console.log("💾 Attempting database insert...");
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
      console.error("💥 Database error:", error);
      const { error: errorMsg, status } = handleSupabaseError(
        error,
        "demo submission insert"
      );

      // Handle duplicate submissions
      if (error.code === "23505") {
        return NextResponse.json(
          {
            success: false,
            error:
              "A submission with this email and track title already exists",
          },
          { status: 409 }
        );
      }

      return NextResponse.json({ success: false, error: errorMsg }, { status });
    }

    // Log successful submission (for admin monitoring)
    console.log(
      `✅ New demo submission: ${data.artistName} - "${data.trackTitle}" (ID: ${insertResult.id})`
    );

    // Return success response
    return NextResponse.json({
      success: true,
      message:
        "Demo submitted successfully! We'll review it and get back to you within 7-14 business days.",
      submissionId: insertResult.id,
    });
  } catch (error: unknown) {
    console.error("💥 Demo submission API error:", error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, error: "Invalid request format" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to submit demo" },
      { status: 500 }
    );
  }
}
