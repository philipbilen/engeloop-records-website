import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client-side Supabase client (for frontend)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client with service role (for API routes)
export function getServiceRoleSupabase() {
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Type-safe error handling helper
export function handleSupabaseError(error: unknown, context: string) {
  console.error(`Supabase error in ${context}:`, error);

  // Type guard to check if error has expected properties
  if (error && typeof error === "object" && "code" in error) {
    const typedError = error as { code: string; message?: string };

    if (typedError.code === "PGRST116") {
      return { error: "No data found", status: 404 };
    }

    if (typedError.code === "23505") {
      return { error: "Data already exists", status: 409 };
    }

    return {
      error: typedError.message || "Database operation failed",
      status: 500,
    };
  }

  // Fallback for unknown error types
  return {
    error: error instanceof Error ? error.message : "Database operation failed",
    status: 500,
  };
}
