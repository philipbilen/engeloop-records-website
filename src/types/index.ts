// Authentication Types
export enum UserRole {
  ADMIN = "admin",
  STAFF = "staff",
  ARTIST = "artist",
}

export interface AdminUser {
  id: string;
  email: string;
  role: UserRole;
  name?: string;
}

// Artist Types
export interface Artist {
  id: string;
  artist_name: string;
  image_url: string | null;
  spotify_url: string | null;
  apple_music_url: string | null;
  instagram_url: string | null;
  spotify_id: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface ArtistWithReleases extends Artist {
  latest_release_date?: string | null;
  latest_release_name?: string | null;
  latest_release_type?: string | null;
  latest_release_image?: string | null;
  latest_release_spotify_url?: string | null;
  release_recency?: "new" | "recent" | "this_year" | "older" | null;
  days_since_release?: number | null;
}

// Spotify API Types
export interface SpotifyArtist {
  id: string;
  name: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  followers: {
    total: number;
  };
  popularity: number;
  external_urls: {
    spotify: string;
  };
  genres?: string[];
}

export interface SpotifyAlbum {
  id: string;
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  album_type: "album" | "single" | "compilation";
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  external_urls: {
    spotify: string;
  };
  total_tracks: number;
}

export interface SpotifySearchResult {
  artist: SpotifyArtist | null;
  confidence: "high" | "medium" | "low";
  score: number;
  reasons: string[];
  alternatives?: SpotifyArtist[];
}

// Demo Submission Types
export interface DemoSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  artist_name: string;
  track_title: string;
  genres: string[];
  instagram_handle?: string;
  spotify_profile_url?: string;
  additional_info?: string;
  bpm?: number;
  submission_status: "pending" | "reviewing" | "approved" | "rejected";
  submitted_at: string;
  created_at: string;
  updated_at: string;
}

export interface DemoSubmissionForm {
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

// Playlist Types
export interface Playlist {
  name: string;
  followers: number;
  description: string;
  trackCount: number;
  image: string;
  spotifyUrl: string;
}

export interface PlaylistData {
  hero: Playlist;
  supporting: Playlist[];
  totalFollowers: number;
  playlistCount: number;
  success: boolean;
  lastUpdated: string;
}

// Admin Dashboard Types
export interface SyncResult {
  artist: string;
  status: "updated" | "skipped" | "not_found" | "error";
  confidence?: string;
  spotifyData?: {
    id: string;
    name: string;
    followers: number;
    popularity: number;
    imageUrl?: string | null;
    spotifyUrl?: string;
  };
  newData?: {
    followers: number;
    popularity: number;
    imageUrl: string | null;
  };
  error?: unknown;
}

export interface SyncResponse {
  success: boolean;
  summary: {
    total: number;
    updated: number;
    skipped: number;
    failed: number;
  };
  results: SyncResult[];
  error?: string;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ValidationResult<T = unknown> {
  isValid: boolean;
  errors: string[];
  sanitized?: T;
}

// Genre Options
export interface GenreOption {
  value: string;
  label: string;
}

export const AVAILABLE_GENRES: GenreOption[] = [
  { value: "afro-house", label: "Afro House" },
  { value: "deep-house", label: "Deep House" },
  { value: "organic-house", label: "Organic House" },
  { value: "melodic-house", label: "Melodic House" },
  { value: "downtempo", label: "Downtempo" },
  { value: "electronica", label: "Electronica" },
  { value: "experimental", label: "Experimental" },
  { value: "other", label: "Other" },
];

// Constants
export const SUBMISSION_STATUS = {
  PENDING: "pending",
  REVIEWING: "reviewing",
  APPROVED: "approved",
  REJECTED: "rejected",
} as const;

export const CONFIDENCE_LEVELS = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
} as const;
