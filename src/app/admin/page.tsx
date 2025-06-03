"use client";

import { useState } from "react";

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

export default function AdminPage() {
  const [isSyncing, setIsSyncing] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastSync, setLastSync] = useState<SyncResponse | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSpotifyDataRefresh = async () => {
    setIsRefreshing(true);
    setShowResults(false);

    try {
      const response = await fetch("/api/artists/refresh-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer engeloop_records_api_secret_2025_xyz789abc123def456",
        },
      });

      const result: SyncResponse = await response.json();

      if (result.success) {
        setLastSync(result);
        setShowResults(true);

        // Show success notification
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
      const response = await fetch("/api/artists/sync-spotify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer engeloop_records_api_secret_2025_xyz789abc123def456",
        },
      });

      const result: SyncResponse = await response.json();

      if (result.success) {
        setLastSync(result);
        setShowResults(true);

        // Show success notification
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
        return "#10b981"; // green
      case "skipped":
        return "#6b7280"; // gray
      case "not_found":
        return "#f59e0b"; // yellow
      case "error":
        return "#ef4444"; // red
      default:
        return "#6b7280";
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

  return (
    <div>
      {/* Header Section */}
      <section style={{ padding: "60px 16px", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
                fontWeight: "700",
                color: "#111827",
                margin: 0,
                fontFamily: "'Work Sans', system-ui, sans-serif",
              }}
            >
              Admin Dashboard
            </h1>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#6b7280",
              }}
            >
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section style={{ padding: "80px 16px", backgroundColor: "white" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "24px",
              marginBottom: "64px",
            }}
          >
            {[
              {
                title: "Pending Submissions",
                number: "12",
                description: "Tracks awaiting review",
                color: "#3b82f6",
              },
              {
                title: "Active Contracts",
                number: "8",
                description: "Signed agreements",
                color: "#10b981",
              },
              {
                title: "Upcoming Releases",
                number: "3",
                description: "Scheduled this month",
                color: "#8b5cf6",
              },
              {
                title: "Total Artists",
                number: "15",
                description: "In our roster",
                color: "#f59e0b",
              },
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  borderRadius: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                  padding: "24px",
                  border: "1px solid #f3f4f6",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-2px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h3
                  style={{
                    fontSize: "1.125rem",
                    fontWeight: "600",
                    marginBottom: "16px",
                    color: "#111827",
                  }}
                >
                  {stat.title}
                </h3>
                <p
                  style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: stat.color,
                    marginBottom: "8px",
                  }}
                >
                  {stat.number}
                </p>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                  }}
                >
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Actions & Spotify Management */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "32px",
              marginBottom: "64px",
            }}
          >
            {/* Quick Actions */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                border: "1px solid #f3f4f6",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#111827",
                  fontFamily: "'Work Sans', system-ui, sans-serif",
                }}
              >
                Quick Actions
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <button
                  style={{
                    width: "100%",
                    backgroundColor: "#000",
                    color: "white",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    border: "none",
                    cursor: "pointer",
                    transition: "background-color 0.2s ease",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "#374151")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "#000")
                  }
                >
                  Review New Submissions
                </button>
                <button
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    color: "#374151",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    backgroundColor: "white",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#9ca3af";
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  Generate Contract
                </button>
                <button
                  style={{
                    width: "100%",
                    border: "1px solid #d1d5db",
                    color: "#374151",
                    padding: "12px 16px",
                    borderRadius: "6px",
                    fontWeight: "500",
                    backgroundColor: "white",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#9ca3af";
                    e.currentTarget.style.backgroundColor = "#f9fafb";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db";
                    e.currentTarget.style.backgroundColor = "white";
                  }}
                >
                  Schedule Release
                </button>
              </div>
            </div>

            {/* Spotify Data Management */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                border: "1px solid #f3f4f6",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "16px",
                  color: "#111827",
                  fontFamily: "'Work Sans', system-ui, sans-serif",
                }}
              >
                Spotify Data Management
              </h3>

              <div style={{ marginBottom: "16px" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#6b7280",
                    lineHeight: "1.5",
                    marginBottom: "16px",
                  }}
                >
                  Sync new artists or refresh existing artist data from Spotify
                  including images, follower counts, and profile information.
                </p>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <button
                    onClick={handleSpotifyRefresh}
                    disabled={isSyncing || isRefreshing}
                    style={{
                      width: "100%",
                      backgroundColor: isSyncing ? "#9ca3af" : "#1db954",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      fontWeight: "500",
                      border: "none",
                      cursor:
                        isSyncing || isRefreshing ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSyncing && !isRefreshing) {
                        e.currentTarget.style.backgroundColor = "#1ed760";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSyncing && !isRefreshing) {
                        e.currentTarget.style.backgroundColor = "#1db954";
                      }
                    }}
                  >
                    {isSyncing ? (
                      <>
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        />
                        Syncing new artists...
                      </>
                    ) : (
                      <>🆕 Sync New Artists</>
                    )}
                  </button>

                  <button
                    onClick={handleSpotifyDataRefresh}
                    disabled={isSyncing || isRefreshing}
                    style={{
                      width: "100%",
                      backgroundColor: isRefreshing ? "#9ca3af" : "#3b82f6",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "6px",
                      fontWeight: "500",
                      border: "none",
                      cursor:
                        isSyncing || isRefreshing ? "not-allowed" : "pointer",
                      transition: "all 0.2s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                    }}
                    onMouseEnter={(e) => {
                      if (!isSyncing && !isRefreshing) {
                        e.currentTarget.style.backgroundColor = "#2563eb";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSyncing && !isRefreshing) {
                        e.currentTarget.style.backgroundColor = "#3b82f6";
                      }
                    }}
                  >
                    {isRefreshing ? (
                      <>
                        <div
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid #ffffff",
                            borderTop: "2px solid transparent",
                            borderRadius: "50%",
                            animation: "spin 1s linear infinite",
                          }}
                        />
                        Refreshing existing data...
                      </>
                    ) : (
                      <>🔄 Refresh Existing Data</>
                    )}
                  </button>
                </div>
              </div>

              {lastSync && (
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "#6b7280",
                    textAlign: "center",
                    padding: "8px",
                    backgroundColor: "#f3f4f6",
                    borderRadius: "4px",
                  }}
                >
                  Last sync: {lastSync.summary.total} artists processed,{" "}
                  {lastSync.summary.updated} updated
                </div>
              )}
            </div>
          </div>

          {/* Sync Results Display */}
          {showResults && lastSync && (
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                padding: "24px",
                border: "1px solid #f3f4f6",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "16px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "#111827",
                    fontFamily: "'Work Sans', system-ui, sans-serif",
                  }}
                >
                  Last Sync Results
                </h3>
                <button
                  onClick={() => setShowResults(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "#6b7280",
                    cursor: "pointer",
                    fontSize: "1.25rem",
                  }}
                >
                  ×
                </button>
              </div>

              {/* Summary */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  gap: "16px",
                  marginBottom: "24px",
                  padding: "16px",
                  backgroundColor: "#f9fafb",
                  borderRadius: "8px",
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#111827",
                    }}
                  >
                    {lastSync.summary.total}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    Total
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#10b981",
                    }}
                  >
                    {lastSync.summary.updated}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    Updated
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#6b7280",
                    }}
                  >
                    {lastSync.summary.skipped || 0}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    Skipped
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "700",
                      color: "#ef4444",
                    }}
                  >
                    {lastSync.summary.failed}
                  </div>
                  <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                    Failed
                  </div>
                </div>
              </div>

              {/* Detailed Results */}
              <div
                style={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  border: "1px solid #f3f4f6",
                  borderRadius: "6px",
                }}
              >
                {lastSync.results.map((result: SyncResult, index: number) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 16px",
                      borderBottom:
                        index < lastSync.results.length - 1
                          ? "1px solid #f3f4f6"
                          : "none",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: "500",
                          color: "#111827",
                          fontSize: "0.875rem",
                        }}
                      >
                        {result.artist}
                      </div>
                      {(result.spotifyData || result.newData) && (
                        <div
                          style={{
                            fontSize: "0.75rem",
                            color: "#6b7280",
                          }}
                        >
                          {result.spotifyData?.followers?.toLocaleString() ||
                            result.newData?.followers?.toLocaleString() ||
                            "N/A"}{" "}
                          followers
                        </div>
                      )}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      {result.confidence && (
                        <span
                          style={{
                            fontSize: "0.75rem",
                            padding: "2px 6px",
                            borderRadius: "4px",
                            backgroundColor:
                              result.confidence === "high"
                                ? "#dcfce7"
                                : "#fef3c7",
                            color:
                              result.confidence === "high"
                                ? "#166534"
                                : "#92400e",
                          }}
                        >
                          {result.confidence}
                        </span>
                      )}
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          color: getStatusColor(result.status),
                        }}
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
          <div
            style={{
              backgroundColor: "#fef3c7",
              border: "1px solid #fbbf24",
              borderRadius: "8px",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ marginLeft: "12px" }}>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#92400e",
                    margin: 0,
                  }}
                >
                  🚧 <strong>Development Mode:</strong> This admin dashboard is
                  currently in development. Full functionality including
                  contract management, submission workflow, and database
                  integration will be added in upcoming phases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for loading animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
