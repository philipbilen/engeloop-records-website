// src/lib/validation.ts

import { z } from "zod";

// Available genres enum
export const GenreEnum = z.enum([
  "afro-house",
  "deep-house",
  "organic-house",
  "melodic-house",
  "downtempo",
  "electronica",
  "experimental",
  "other",
]);

// Demo submission validation schema
export const DemoSubmissionSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .trim(),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .trim(),

  email: z
    .string()
    .email("Please provide a valid email address")
    .toLowerCase()
    .max(255, "Email must be less than 255 characters"),

  artistName: z
    .string()
    .min(1, "Artist name is required")
    .max(100, "Artist name must be less than 100 characters")
    .trim(),

  trackTitle: z
    .string()
    .min(1, "Track title is required")
    .max(200, "Track title must be less than 200 characters")
    .trim(),

  genres: z
    .array(GenreEnum)
    .min(1, "At least one genre must be selected")
    .max(5, "Maximum 5 genres allowed"),

  instagramHandle: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined;
      // Remove @ symbol if present and validate format
      const cleaned = val.replace(/^@/, "").trim();
      if (cleaned.length === 0) return undefined;
      return cleaned;
    })
    .pipe(
      z.union([
        z.undefined(),
        z
          .string()
          .regex(
            /^[a-zA-Z0-9._]+$/,
            "Instagram handle contains invalid characters"
          )
          .min(1)
          .max(30),
      ])
    ),

  spotifyProfileUrl: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined;
      return val.trim();
    })
    .pipe(
      z.union([
        z.undefined(),
        z
          .string()
          .url("Please provide a valid URL")
          .refine(
            (url) => url.includes("spotify.com"),
            "Please provide a valid Spotify URL"
          ),
      ])
    ),

  additionalInfo: z
    .string()
    .optional()
    .transform((val) => {
      if (!val || val.trim() === "") return undefined;
      return val.trim();
    })
    .pipe(
      z.union([
        z.undefined(),
        z
          .string()
          .max(1000, "Additional info must be less than 1000 characters"),
      ])
    ),

  bpm: z
    .number()
    .optional()
    .refine(
      (val) => val === undefined || (val >= 60 && val <= 200),
      "BPM must be between 60 and 200"
    ),
});

// Type inference from schema
export type DemoSubmissionData = z.infer<typeof DemoSubmissionSchema>;

// Artist creation/update schema
export const ArtistSchema = z.object({
  artist_name: z
    .string()
    .min(1, "Artist name is required")
    .max(100, "Artist name must be less than 100 characters")
    .trim(),

  image_url: z.string().url("Image URL must be valid").optional().nullable(),

  spotify_url: z
    .string()
    .url("Spotify URL must be valid")
    .refine((url) => url.includes("spotify.com"), "Must be a valid Spotify URL")
    .optional()
    .nullable(),

  apple_music_url: z
    .string()
    .url("Apple Music URL must be valid")
    .refine(
      (url) => url.includes("music.apple.com"),
      "Must be a valid Apple Music URL"
    )
    .optional()
    .nullable(),

  instagram_url: z
    .string()
    .url("Instagram URL must be valid")
    .refine(
      (url) => url.includes("instagram.com"),
      "Must be a valid Instagram URL"
    )
    .optional()
    .nullable(),

  spotify_id: z.string().min(1).optional().nullable(),
});

export type ArtistData = z.infer<typeof ArtistSchema>;

// Spotify search confidence schema
export const SpotifySearchResultSchema = z.object({
  artist: z
    .object({
      id: z.string(),
      name: z.string(),
      images: z.array(
        z.object({
          url: z.string().url(),
          height: z.number(),
          width: z.number(),
        })
      ),
      followers: z.object({
        total: z.number(),
      }),
      popularity: z.number().min(0).max(100),
      external_urls: z.object({
        spotify: z.string().url(),
      }),
      genres: z.array(z.string()).optional(),
    })
    .nullable(),
  confidence: z.enum(["high", "medium", "low"]),
  score: z.number().min(0),
  reasons: z.array(z.string()),
  alternatives: z
    .array(
      z.object({
        name: z.string(),
        popularity: z.number(),
        spotifyUrl: z.string().url(),
      })
    )
    .optional(),
});

// API query parameters schema
export const ArtistQuerySchema = z.object({
  sort: z.enum(["name", "recent", "popularity"]).default("name"),
  filter: z.enum(["all", "recent", "active"]).default("all"),
  page: z.coerce.number().min(1).default(1),
  limit: z.coerce.number().min(1).max(100).default(20),
});

export type ArtistQueryParams = z.infer<typeof ArtistQuerySchema>;

// Admin operation logs schema
export const AdminLogSchema = z.object({
  operation: z.string().min(1),
  user_email: z.string().email(),
  details: z.record(z.unknown()).optional(),
  ip_address: z.string().ip().optional(),
  user_agent: z.string().optional(),
});

// Rate limiting entry schema
export const RateLimitSchema = z.object({
  identifier: z.string().min(1),
  operation: z.string().min(1),
  metadata: z.record(z.unknown()).optional(),
});

// Utility function to validate and transform data
export function validateData<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: string[] } {
  try {
    const validatedData = schema.parse(data);
    return { success: true, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => {
        const path = err.path.length > 0 ? `${err.path.join(".")}: ` : "";
        return `${path}${err.message}`;
      });
      return { success: false, errors };
    }
    return { success: false, errors: ["Validation failed"] };
  }
}

// Utility function for safe parsing with defaults
export function safeParseWithDefaults<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  fallback: T
): T {
  const result = schema.safeParse(data);
  return result.success ? result.data : fallback;
}

// Common validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: "This field is required",
  EMAIL_INVALID: "Please provide a valid email address",
  URL_INVALID: "Please provide a valid URL",
  STRING_TOO_LONG: (max: number) => `Must be less than ${max} characters`,
  STRING_TOO_SHORT: (min: number) => `Must be at least ${min} characters`,
  NUMBER_OUT_OF_RANGE: (min: number, max: number) =>
    `Must be between ${min} and ${max}`,
  ARRAY_TOO_FEW: (min: number) => `At least ${min} items required`,
  ARRAY_TOO_MANY: (max: number) => `Maximum ${max} items allowed`,
} as const;

// Custom error formatter for better UX
export function formatValidationErrors(
  errors: z.ZodError
): Record<string, string> {
  const formatted: Record<string, string> = {};

  errors.errors.forEach((error) => {
    const path = error.path.join(".");
    formatted[path] = error.message;
  });

  return formatted;
}
