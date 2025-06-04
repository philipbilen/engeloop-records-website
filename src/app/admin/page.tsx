"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase";
import { LogOut, User, TrendingUp, Users, Calendar, Music } from "lucide-react";
import { useRouter } from "next/navigation";

import StandardHero from "@/app/components/StandardHero";

interface SyncResult {
  artist: string;
  status: "updated" | "skipped" | "not_found" | "error";
  confidence?: string;
  spotifyData?: {
    id: string;
    name: string;
    followers: number;
    popularity: number;
  };
  newData?: {
    followers: number;
    popularity: number;
    imageUrl: string | null;
  };
}

interface SyncResponse {
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

interface AdminUser {
  id: string;
  email: string;
  name?: string;
}

interface DashboardStats {
  pendingSubmissions: number;
  activeContracts: number;
  upcomingReleases: number;
  totalArtists: number;
  recentSubmissions: number;
  submissionsThisMonth: number;
}

export default function AdminPage() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState<SyncResponse | null>(null);
  const [showResults, setShowResults] = useState(false);
  
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        setStatsLoading(true);
        const response = await makeAuthenticatedRequest("/api/admin/dashboard-stats");
        const result = await response.json();

        if (result.success) {
          setStats(result.data);
        } else {
          console.error("Failed to fetch dashboard stats:", result.error);
        }
      } catch (error) {
        console.error("Error fetching dashboard stats:", error);
      } finally {
        setStatsLoading(false);
      }
    };

    const checkUser = async () => {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();
        
        if (error || !user) {
          router.push('/login');
          return;
        }

        // Check if user has admin role
        if (user.user_metadata?.role !== 'admin') {
          router.push('/unauthorized');
          return;
        }

        setUser({
          id: user.id,
          email: user.email!,
          name: user.user_metadata?.name || user.email?.split('@')[0],
        });

        // Fetch dashboard stats after user is authenticated
        await fetchDashboardStats();
      } catch (error) {
        console.error('Error checking user:', error);
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };

    checkUser();
  }, [router, supabase.auth]);

  // Separate function for manual refresh
  const refreshDashboardStats = async () => {
    try {
      setStatsLoading(true);
      const response = await makeAuthenticatedRequest("/api/admin/dashboard-stats");
      const result = await response.json();

      if (result.success) {
        setStats(result.data);
      } else {
        console.error("Failed to fetch dashboard stats:", result.error);
      }
    } catch (error) {
      console.error("Error fetching dashboard stats:", error);
    } finally {
      setStatsLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  const makeAuthenticatedRequest = async (url: string, options: RequestInit = {}) => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      throw new Error('No active session');
    }

    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Authorization': `Bearer ${session.access_token}`,
        'Content-Type': 'application/json',
      },
    });
  };

  const handleSpotifyDataRefresh = async () => {
    setIsRefreshing(true);
    setShowResults(false);

    try {
      const response = await makeAuthenticatedRequest("/api/artists/refresh-data", {
        method: "POST",
      });

      const result: SyncResponse = await response.json();

      if (result.success) {
        setLastSync(result);
        setShowResults(true);
        alert(
          `✅ Refresh completed! Updated: ${result.summary.updated}, Failed: ${result.summary.failed}`
        );
      } else {
        throw new Error(result.error || "Refresh failed");
      }
    } catch (error) {
      console.error("Spotify refresh error:", error);
      alert("❌ Refresh failed. Please check console for details.");
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleSpotifyRefresh = async () => {
    setIsSyncing(true);
    setShowResults(false);

    try {
      const response = await makeAuthenticatedRequest("/api/artists/sync-spotify", {
        method: "POST",
      });

      const result: SyncResponse = await response.json();

      if (result.success) {
        setLastSync(result);
        setShowResults(true);
        alert(
          `✅ Sync completed! Updated: ${result.summary.updated}, Failed: ${result.summary.failed}`
        );
      } else {
        throw new Error(result.error || "Sync failed");
      }
    } catch (error) {
      console.error("Spotify sync error:", error);
      alert("❌ Sync failed. Please check console for details.");
    } finally {
      setIsSyncing(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "updated":
        return "text-green-600";
      case "skipped":
        return "text-gray-600";
      case "not_found":
        return "text-yellow-600";
      case "error":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "updated":
        return "Updated";
      case "skipped":
        return "Already synced";
      case "not_found":
        return "Not found";
      case "error":
        return "Error";
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-engeloop-orange mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  // Helper function to render stat cards
  const renderStatCard = (
    title: string,
    value: number | string,
    description: string,
    icon: React.ReactNode,
    colorClass: string,
    isLoading: boolean = false
  ) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {title}
          </h3>
          {isLoading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-16 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-24"></div>
            </div>
          ) : (
            <>
              <p className={`text-3xl font-bold mb-2 ${colorClass}`}>
                {typeof value === 'number' ? value.toLocaleString() : value}
              </p>
              <p className="text-sm text-gray-600">{description}</p>
            </>
          )}
        </div>
        <div className={`p-3 ${colorClass.replace('text-', 'bg-').replace('-600', '-100')} rounded-lg`}>
          {icon}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Standardized Header */}
      <StandardHero
        title="ADMIN DASHBOARD"
        subtitle={`Welcome back, ${user?.name || 'Admin'}`}
        backgroundColor="white"
      >
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <User className="w-4 h-4" />
            <span>{user?.email}</span>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </StandardHero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {renderStatCard(
            "Pending Submissions",
            stats?.pendingSubmissions ?? 0,
            "Tracks awaiting review",
            <Music className="w-6 h-6 text-blue-600" />,
            "text-blue-600",
            statsLoading
          )}

          {renderStatCard(
            "Active Contracts",
            stats?.activeContracts ?? 0,
            "Signed agreements",
            <TrendingUp className="w-6 h-6 text-green-600" />,
            "text-green-600",
            statsLoading
          )}

          {renderStatCard(
            "Upcoming Releases",
            stats?.upcomingReleases ?? 0,
            "Scheduled this month",
            <Calendar className="w-6 h-6 text-purple-600" />,
            "text-purple-600",
            statsLoading
          )}

          {renderStatCard(
            "Total Artists",
            stats?.totalArtists ?? 0,
            "In our roster",
            <Users className="w-6 h-6 text-amber-600" />,
            "text-amber-600",
            statsLoading
          )}
        </div>

        {/* Additional Stats Row */}
        {stats && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {stats.recentSubmissions}
                  </div>
                  <div className="text-sm text-gray-600">Last 7 days</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {stats.submissionsThisMonth}
                  </div>
                  <div className="text-sm text-gray-600">This month</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Approval Rate</span>
                  <span className="font-medium">Coming Soon</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Avg. Response Time</span>
                  <span className="font-medium">7-14 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-medium text-sm">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
              </div>
              <button
                onClick={refreshDashboardStats}
                disabled={statsLoading}
                className="mt-4 w-full text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400 transition-colors"
              >
                {statsLoading ? 'Refreshing...' : 'Refresh Stats'}
              </button>
            </div>
          </div>
        )}

        {/* Quick Actions & Spotify Management */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-work-sans font-semibold text-gray-900 mb-6">
              Quick Actions
            </h3>
            <div className="space-y-4">
              <button className="w-full bg-gray-900 text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <Music className="w-4 h-4" />
                Review New Submissions
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Generate Contract
              </button>
              <button className="w-full border border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Release
              </button>
            </div>
          </div>

          {/* Spotify Data Management */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-work-sans font-semibold text-gray-900 mb-4">
              Spotify Data Management
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Sync new artists or refresh existing artist data from Spotify
              including images, follower counts, and profile information.
            </p>
            
            <div className="space-y-4">
              <button
                onClick={handleSpotifyDataRefresh}
                disabled={isSyncing || isRefreshing}
                className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isSyncing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Syncing new artists...
                  </>
                ) : (
                  <>
                    <span className="text-lg">🆕</span>
                    Sync New Artists
                  </>
                )}
              </button>

              <button
                onClick={handleSpotifyDataRefresh}
                disabled={isSyncing || isRefreshing}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isRefreshing ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Refreshing existing data...
                  </>
                ) : (
                  <>
                    <span className="text-lg">🔄</span>
                    Refresh Existing Data
                  </>
                )}
              </button>
            </div>

            {lastSync && (
              <div className="mt-4 text-xs text-gray-500 text-center p-3 bg-gray-50 rounded-lg">
                Last sync: {lastSync.summary.total} artists processed,{" "}
                {lastSync.summary.updated} updated
              </div>
            )}
          </div>
        </div>

        {/* Sync Results Display */}
        {showResults && lastSync && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-work-sans font-semibold text-gray-900">
                Last Sync Results
              </h3>
              <button
                onClick={() => setShowResults(false)}
                className="text-gray-400 hover:text-gray-600 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
              >
                ×
              </button>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">
                  {lastSync.summary.total}
                </div>
                <div className="text-sm text-gray-600">Total</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {lastSync.summary.updated}
                </div>
                <div className="text-sm text-gray-600">Updated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">
                  {lastSync.summary.skipped || 0}
                </div>
                <div className="text-sm text-gray-600">Skipped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {lastSync.summary.failed}
                </div>
                <div className="text-sm text-gray-600">Failed</div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="max-h-80 overflow-y-auto border border-gray-200 rounded-lg">
              {lastSync.results.map((result: SyncResult, index: number) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {result.artist}
                    </div>
                    {(result.spotifyData || result.newData) && (
                      <div className="text-xs text-gray-500 mt-1">
                        {result.spotifyData?.followers?.toLocaleString() ||
                          result.newData?.followers?.toLocaleString() ||
                          "N/A"}{" "}
                        followers
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {result.confidence && (
                      <span
                        className={`text-xs px-2 py-1 rounded-full font-medium ${
                          result.confidence === "high"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {result.confidence}
                      </span>
                    )}
                    <span
                      className={`text-xs font-medium ${getStatusColor(result.status)}`}
                    >
                      {getStatusText(result.status)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Development Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg">
              <span className="text-yellow-600 text-lg">🚧</span>
            </div>
            <div>
              <h4 className="font-semibold text-yellow-800 mb-2">Development Mode</h4>
              <p className="text-sm text-yellow-700">
                This admin dashboard is currently in development. Full functionality including
                contract management, submission workflow, and database integration will be
                added in upcoming phases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}