import { createBrowserClient, createServerClient } from "@supabase/ssr";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

// Client-side Supabase client (for frontend components)
export function createClient() {
  return createBrowserClient(supabaseUrl, supabaseAnonKey);
}

// Server-side Supabase client (for API routes and server components)
export async function createServerSupabaseClient(
  cookieStore?: ReadonlyRequestCookies
) {
  // If cookieStore is provided (from API routes), use it
  // Otherwise, import cookies from next/headers (for server components)
  let cookiesStore = cookieStore;

  if (!cookiesStore) {
    const { cookies } = await import("next/headers");
    cookiesStore = await cookies();
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return cookiesStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookiesStore.set(name, value, options);
          });
        } catch {
          // The `setAll` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
}

// Service role client for admin operations (use sparingly)
export function getServiceRoleSupabase() {
  return createServerClient(supabaseUrl, supabaseServiceKey, {
    cookies: {
      getAll: () => [],
      setAll: () => {},
    },
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}

// Legacy client for backwards compatibility (deprecated - remove gradually)
export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey);

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
