import { NextResponse } from "next/server";
import {
  createServerSupabaseClient,
  getServiceRoleSupabase,
} from "@/lib/supabase";

// Security: Check for authenticated admin user
async function checkAdminAuth(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        authorized: false,
        error: "Missing or invalid authorization header",
      };
    }

    const token = authHeader.split(" ")[1];

    // Create server client and verify the JWT token
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return { authorized: false, error: "Invalid or expired token" };
    }

    // Check if user has admin role
    const userRole = user.user_metadata?.role;
    if (userRole !== "admin") {
      return { authorized: false, error: "Insufficient privileges" };
    }

    return { authorized: true, user };
  } catch (error) {
    console.error("Auth check error:", error);
    return { authorized: false, error: "Authentication failed" };
  }
}

interface DashboardStats {
  pendingSubmissions: number;
  activeContracts: number;
  upcomingReleases: number;
  totalArtists: number;
  recentSubmissions: number;
  submissionsThisMonth: number;
}

export async function GET(request: Request) {
  // Check authentication
  const authResult = await checkAdminAuth(request);
  if (!authResult.authorized) {
    return NextResponse.json(
      { success: false, error: authResult.error },
      { status: 401 }
    );
  }

  try {
    const supabase = getServiceRoleSupabase();

    console.log(
      `[Admin: ${authResult.user?.email}] Fetching dashboard stats...`
    );

    // Calculate date ranges
    const now = new Date();
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

    // Fetch all stats in parallel for better performance
    const [
      { count: pendingSubmissions, error: pendingError },
      { count: totalArtists, error: artistsError },
      { count: recentSubmissions, error: recentError },
      { count: submissionsThisMonth, error: monthlyError },
    ] = await Promise.all([
      // Pending demo submissions
      supabase
        .from("demo_submissions")
        .select("*", { count: "exact", head: true })
        .eq("submission_status", "pending"),

      // Total artists
      supabase.from("artists").select("*", { count: "exact", head: true }),

      // Recent submissions (last 7 days)
      supabase
        .from("demo_submissions")
        .select("*", { count: "exact", head: true })
        .gte("submitted_at", last7Days.toISOString()),

      // Submissions this month
      supabase
        .from("demo_submissions")
        .select("*", { count: "exact", head: true })
        .gte("submitted_at", startOfMonth.toISOString()),
    ]);

    // Check for any errors
    if (pendingError) {
      console.error("Error fetching pending submissions:", pendingError);
    }
    if (artistsError) {
      console.error("Error fetching artists count:", artistsError);
    }
    if (recentError) {
      console.error("Error fetching recent submissions:", recentError);
    }
    if (monthlyError) {
      console.error("Error fetching monthly submissions:", monthlyError);
    }

    // For now, we'll use placeholder values for features not yet implemented
    // These can be updated when you add contracts and releases functionality
    const stats: DashboardStats = {
      pendingSubmissions: pendingSubmissions || 0,
      activeContracts: 8, // Placeholder - update when contracts table is added
      upcomingReleases: 3, // Placeholder - update when releases table is added
      totalArtists: totalArtists || 0,
      recentSubmissions: recentSubmissions || 0,
      submissionsThisMonth: submissionsThisMonth || 0,
    };

    console.log(`✅ Dashboard stats fetched:`, stats);

    return NextResponse.json({
      success: true,
      data: stats,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error: unknown) {
    console.error("Dashboard stats API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch dashboard statistics",
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}

// Optional: Add a POST method for refreshing stats cache if needed
export async function POST(request: Request) {
  // Check authentication
  const authResult = await checkAdminAuth(request);
  if (!authResult.authorized) {
    return NextResponse.json(
      { success: false, error: authResult.error },
      { status: 401 }
    );
  }

  // For now, just call the GET method to refresh stats
  return GET(request);
}
