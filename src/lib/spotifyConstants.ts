// src/lib/spotifyConstants.ts

// Spotify API Configuration
export const SPOTIFY_CONFIG = {
  // Rate limiting
  RATE_LIMIT_DELAY_MS: 150,
  MAX_RETRIES: 3,
  REQUEST_TIMEOUT_MS: 10000,

  // Search limits
  SEARCH_LIMIT: 20,
  EXTENDED_SEARCH_LIMIT: 50,

  // Cache TTL (in milliseconds)
  TOKEN_CACHE_TTL: 3540000, // 59 minutes (tokens expire in 1 hour)
  ARTIST_CACHE_TTL: 86400000, // 24 hours
} as const;

// Confidence thresholds for artist matching
export const CONFIDENCE_THRESHOLDS = {
  HIGH: 90,
  MEDIUM: 60,
  LOW: 30,
} as const;

// Scoring weights for artist matching
export const MATCH_SCORING = {
  EXACT_NAME_MATCH: 100,
  NORMALIZED_NAME_MATCH: 90,
  PARTIAL_NAME_MATCH: 60,
  RELEVANT_GENRE_BONUS: 20,
  HIGH_POPULARITY_BONUS: 10,
  MEDIUM_POPULARITY_BONUS: 5,
  HAS_IMAGE_BONUS: 5,
} as const;

// Relevant genres for Engeloop Records
export const RELEVANT_GENRES = [
  "house",
  "deep house",
  "afro house",
  "organic house",
  "melodic house",
  "electronic",
  "dance",
  "techno",
  "progressive house",
  "tech house",
  "minimal techno",
  "downtempo",
  "ambient house",
] as const;

// Genre categories for enhanced matching
export const GENRE_CATEGORIES = {
  PRIMARY: ["house", "deep house", "afro house"],
  SECONDARY: ["organic house", "melodic house", "tech house"],
  ELECTRONIC: ["electronic", "dance", "techno"],
  AMBIENT: ["downtempo", "ambient house", "chillout"],
} as const;

// Popularity thresholds
export const POPULARITY_LEVELS = {
  HIGH: 50,
  MEDIUM: 20,
  LOW: 0,
} as const;

// Search query variations for better matching
export const SEARCH_STRATEGIES = {
  EXACT_QUOTE: (name: string) => `"${name}"`,
  CLEAN_SPECIAL_CHARS: (name: string) => name.replace(/[^\w\s]/g, ""),
  REMOVE_COMMON_WORDS: (name: string) =>
    name.replace(/\b(feat|ft|featuring|vs|versus|the|and|&)\b/gi, ""),
  ADD_GENRE_HINT: (name: string, genre = "house") => `${name} ${genre}`,
} as const;

// Error types for better error handling
export const SPOTIFY_ERROR_TYPES = {
  RATE_LIMITED: "rate_limited",
  NOT_FOUND: "not_found",
  UNAUTHORIZED: "unauthorized",
  NETWORK_ERROR: "network_error",
  INVALID_RESPONSE: "invalid_response",
  TIMEOUT: "timeout",
} as const;

// Status messages for logging
export const STATUS_MESSAGES = {
  SEARCHING: "Searching for artist",
  FOUND_EXACT: "Found exact match",
  FOUND_PARTIAL: "Found partial match",
  MULTIPLE_CANDIDATES: "Multiple candidates found",
  NO_RESULTS: "No results found",
  LOW_CONFIDENCE: "Low confidence match",
  RATE_LIMITED: "Rate limited, waiting",
  ERROR_OCCURRED: "Error during search",
} as const;

// Album types for filtering
export const ALBUM_TYPES = {
  ALBUM: "album",
  SINGLE: "single",
  COMPILATION: "compilation",
  EP: "ep",
} as const;

// Release date precision levels
export const DATE_PRECISION = {
  DAY: "day",
  MONTH: "month",
  YEAR: "year",
} as const;

// Market codes for regional searches
export const MARKETS = {
  GLOBAL: "US", // US market generally has the most complete catalog
  EUROPE: "DE",
  UK: "GB",
} as const;

// Image size preferences (Spotify returns multiple sizes)
export const IMAGE_PREFERENCES = {
  PREFERRED_MIN_WIDTH: 300,
  PREFERRED_MAX_WIDTH: 640,
  FALLBACK_SIZE_INDEX: 0, // Use first (usually largest) if no preference match
} as const;

// Text normalization rules
export const TEXT_NORMALIZATION = {
  REMOVE_CHARS: /[-\s_\.]/g,
  CLEAN_WHITESPACE: /\s+/g,
  REMOVE_PARENTHESES: /\([^)]*\)/g,
  REMOVE_BRACKETS: /\[[^\]]*\]/g,
} as const;

// Utility type for confidence levels
export type ConfidenceLevel = "high" | "medium" | "low";

// Utility function to determine confidence level
export function getConfidenceLevel(score: number): ConfidenceLevel {
  if (score >= CONFIDENCE_THRESHOLDS.HIGH) return "high";
  if (score >= CONFIDENCE_THRESHOLDS.MEDIUM) return "medium";
  return "low";
}

// Utility function to check if genre is relevant
export function isRelevantGenre(genre: string): boolean {
  const normalizedGenre = genre.toLowerCase();
  return RELEVANT_GENRES.some(
    (relevant) =>
      normalizedGenre.includes(relevant) || relevant.includes(normalizedGenre)
  );
}

// Utility function to normalize artist name for comparison
export function normalizeArtistName(name: string): string {
  return name
    .toLowerCase()
    .replace(TEXT_NORMALIZATION.REMOVE_CHARS, "")
    .replace(TEXT_NORMALIZATION.CLEAN_WHITESPACE, " ")
    .trim();
}

// Utility function to calculate genre bonus score
export function getGenreBonus(genres: string[] = []): number {
  if (!genres.length) return 0;

  const hasRelevantGenre = genres.some(isRelevantGenre);
  return hasRelevantGenre ? MATCH_SCORING.RELEVANT_GENRE_BONUS : 0;
}

// Utility function to calculate popularity bonus
export function getPopularityBonus(popularity: number): number {
  if (popularity >= POPULARITY_LEVELS.HIGH) {
    return MATCH_SCORING.HIGH_POPULARITY_BONUS;
  }
  if (popularity >= POPULARITY_LEVELS.MEDIUM) {
    return MATCH_SCORING.MEDIUM_POPULARITY_BONUS;
  }
  return 0;
}
