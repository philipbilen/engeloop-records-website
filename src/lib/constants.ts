// Application Constants

// Company Information
export const COMPANY_INFO = {
  name: "Engeloop Records",
  email: "info@engelooprecords.com",
  address: "Waterpoint Apartments, A6102, SLM 1020, Sliema, Malta",
  website: "https://engelooprecords.com",
  businessHours: "Monday - Friday, 9:00 AM - 6:00 PM CET",
  description:
    "Malta-based record label specializing in Afro House and Deep House music",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  spotify:
    "https://open.spotify.com/user/31go7xsoxtgw27jqnxwyp27ourfa?si=5c29af8c3ba147e6",
  instagram: "https://www.instagram.com/engeloop.wav/",
  youtube: "https://www.youtube.com/channel/UCwSe6q25WePc88V15aMZFbA",
} as const;

// Demo Submission Settings
export const DEMO_SETTINGS = {
  maxFileSizeMB: 10,
  allowedFileTypes: ["audio/mp3", "audio/wav", "audio/flac", "audio/aiff"],
  reviewTimeBusinessDays: "7-14",
  rateLimitPerHour: 3,
  rateLimitWindowMs: 3600000, // 1 hour
} as const;

// Spotify API Settings
export const SPOTIFY_SETTINGS = {
  rateLimitDelayMs: 150,
  searchLimit: 20,
  maxRetries: 3,
  confidenceThresholds: {
    high: 90,
    medium: 60,
    low: 30,
  },
} as const;

// Database Settings
export const DB_SETTINGS = {
  defaultPageSize: 20,
  maxPageSize: 100,
} as const;

// File Upload Settings (for future implementation)
export const FILE_UPLOAD = {
  maxSizeBytes: DEMO_SETTINGS.maxFileSizeMB * 1024 * 1024,
  allowedExtensions: [".mp3", ".wav", ".flac", ".aiff"],
  storageBucket: "demo-submissions",
} as const;

// Animation Durations
export const ANIMATIONS = {
  fast: 150,
  normal: 300,
  slow: 500,
} as const;

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  auth: {
    unauthorized: "Access denied. Admin privileges required.",
    sessionExpired: "Your session has expired. Please log in again.",
    invalidCredentials: "Invalid email or password.",
  },
  validation: {
    required: (field: string) => `${field} is required`,
    email: "Please provide a valid email address",
    fileSize: `File size must be less than ${DEMO_SETTINGS.maxFileSizeMB}MB`,
    fileType: "Invalid file type. Please upload an audio file.",
  },
  network: {
    connectionError: "Connection error. Please check your internet connection.",
    serverError: "Server error. Please try again later.",
    timeout: "Request timed out. Please try again.",
  },
  spotify: {
    apiError: "Spotify API error. Please try again later.",
    artistNotFound: "Artist not found on Spotify",
    rateLimitExceeded: "Too many requests. Please wait before trying again.",
  },
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  demo: {
    submitted: `Demo submitted successfully! We'll review it and get back to you within ${DEMO_SETTINGS.reviewTimeBusinessDays} business days.`,
  },
  admin: {
    syncCompleted: "Spotify sync completed successfully",
    dataRefreshed: "Artist data refreshed successfully",
  },
  auth: {
    loginSuccess: "Login successful",
    logoutSuccess: "Logged out successfully",
  },
} as const;

// Navigation Routes
export const ROUTES = {
  home: "/",
  artists: "/artists",
  playlists: "/playlists",
  releases: "/releases",
  about: "/about",
  submit: "/submit",
  admin: "/admin",
  login: "/login",
  unauthorized: "/unauthorized",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  artists: {
    base: "/api/artists",
    sync: "/api/artists/sync-spotify",
    refresh: "/api/artists/refresh-data",
    withReleases: "/api/artists/with-releases",
  },
  playlists: {
    all: "/api/playlists/all",
  },
  demo: {
    submit: "/api/submit-demo",
  },
} as const;
