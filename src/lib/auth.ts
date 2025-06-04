import { createServerSupabaseClient } from "./supabase";
import { redirect } from "next/navigation";

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

// Server-side function to get the current user
export async function getCurrentUser(): Promise<AdminUser | null> {
  try {
    const supabase = await createServerSupabaseClient();

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error || !user) {
      return null;
    }

    // Check if user has admin privileges
    const userRole = user.user_metadata?.role || UserRole.ARTIST;

    return {
      id: user.id,
      email: user.email!,
      role: userRole,
      name: user.user_metadata?.name || user.email?.split("@")[0],
    };
  } catch (error) {
    console.error("Error getting current user:", error);
    return null;
  }
}

// Server-side function to require admin authentication
export async function requireAdmin(): Promise<AdminUser> {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  if (user.role !== UserRole.ADMIN) {
    redirect("/unauthorized");
  }

  return user;
}

// Utility function to check if user is admin
export function isAdmin(user: AdminUser | null): boolean {
  return user?.role === UserRole.ADMIN;
}

// Client-side hook for auth state (you'll use this in components)
export function useAuthGuard() {
  // This will be implemented when we create the client-side components
  return {
    user: null,
    loading: true,
    signOut: async () => {},
  };
}
