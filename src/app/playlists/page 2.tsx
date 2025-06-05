"use client";

import { useState, useEffect } from "react";

interface Playlist {
  name: string;
  followers: number;
  description: string;
  trackCount: number;
  image: string;
  spotifyUrl: string;
}

interface PlaylistData {
  hero: Playlist;
  supporting: Playlist[];
  totalFollowers: number;
  playlistCount: number;
  success: boolean;
  lastUpdated: string;
}

export default function PlaylistsPage() {
  const [data, setData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch("/api/playlists/all");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Failed to fetch playlists:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  // Extract playlist ID from Spotify URL for embedding
  const getSpotifyEmbedUrl = (spotifyUrl: string) => {
    const playlistId = spotifyUrl.split("/playlist/")[1]?.split("?")[0];
    return `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0`;
  };

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          Loading playlists...
        </div>
      </div>
    );
  }

  if (!data?.success) {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#DC2626" }}
        >
          Failed to load playlists
        </div>
      </div>
    );
  }

  return (
    <>
      <style jsx>{`
        .container {
          min-height: 100vh;
          background-color: white;
          font-family: "Poppins", system-ui, sans-serif;
        }

        .hero-section {
          padding: 4rem 1rem 2rem 1rem;
          text-align: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .main-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #111827;
          font-family: "Poppins", sans-serif;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #6b7280;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .description {
          font-size: 1.25rem;
          color: #374151;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .flagship-section {
          padding: 3rem 1rem;
          background-color: #f9fafb;
        }

        .flagship-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          text-align: center;
          color: #111827;
        }

        .follower-count {
          font-size: 2rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .growth-text {
          font-size: 1.25rem;
          color: #059669;
          font-weight: 500;
          margin-bottom: 2rem;
          text-align: center;
        }

        .hero-playlist-embed {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          margin: 0 auto;
        }

        .supporting-section {
          padding: 3rem 1rem;
        }

        .supporting-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .supporting-intro {
          text-align: center;
          margin-bottom: 3rem;
        }

        .playlist-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .playlist-embed-card {
          background-color: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: box-shadow 0.2s;
        }

        .playlist-embed-card:hover {
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .playlist-header {
          padding: 1.5rem 1.5rem 1rem 1.5rem;
          text-align: center;
        }

        .playlist-name {
          font-size: 1.25rem;
          font-weight: bold;
          color: #111827;
          margin-bottom: 0.5rem;
        }

        .playlist-followers {
          font-size: 1.125rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.5rem;
        }

        .playlist-tracks {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        .spotify-embed {
          width: 100%;
          height: 380px;
          border: none;
          border-radius: 0 0 12px 12px;
        }

        .hero-spotify-embed {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 12px;
        }

        .cta-section {
          padding: 4rem 1rem;
          background-color: #111827;
          color: white;
          text-align: center;
        }

        .cta-container {
          max-width: 1024px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: #d1d5db;
        }

        .cta-button {
          background-color: white;
          color: #111827;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: bold;
          font-size: 1.125rem;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s;
        }

        .cta-button:hover {
          background-color: #f3f4f6;
        }

        @media (max-width: 768px) {
          .main-title {
            font-size: 2.5rem;
          }

          .playlist-grid {
            grid-template-columns: 1fr;
          }

          .hero-spotify-embed {
            height: 400px;
          }

          .spotify-embed {
            height: 320px;
          }
        }
      `}</style>

      <div className="container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="main-title">OUR PLAYLISTS</h1>
          <p className="subtitle">
            {data.totalFollowers.toLocaleString()}+ followers across{" "}
            {data.playlistCount} curated playlists
          </p>
          <p className="description">
            Your music reaches engaged audiences through our carefully curated
            playlist network. Every release gets featured on our flagship
            playlist with 113K+ active followers.
          </p>
        </section>
        {/* 
        <button
          onClick={() =>
            fetch("/api/artists/sync-spotify", { method: "POST" })
              .then((r) => r.json())
              .then(console.log)
          }
        >
          Test Spotify Sync
        </button> */}

        {/* Hero Playlist */}
        <section className="flagship-section">
          <div className="flagship-container">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <h2 className="section-title">FLAGSHIP PLAYLIST</h2>
              <div className="follower-count">
                {data.hero.followers.toLocaleString()} Followers
              </div>
              <div className="growth-text">Growing +660 daily</div>
            </div>

            <div className="hero-playlist-embed">
              <iframe
                className="hero-spotify-embed"
                src={getSpotifyEmbedUrl(data.hero.spotifyUrl)}
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Supporting Playlists */}
        <section className="supporting-section">
          <div className="supporting-container">
            <div className="supporting-intro">
              <h2 className="section-title">SPECIALIZED PLAYLISTS</h2>
              <p className="subtitle" style={{ marginBottom: 0 }}>
                Diverse audiences across multiple genres and moods
              </p>
            </div>

            <div className="playlist-grid">
              {data.supporting.map((playlist, index) => (
                <div key={index} className="playlist-embed-card">
                  <div className="playlist-header">
                    <h3 className="playlist-name">{playlist.name}</h3>
                    <div className="playlist-followers">
                      {playlist.followers.toLocaleString()} followers
                    </div>
                    <div className="playlist-tracks">
                      {playlist.trackCount} tracks
                    </div>
                  </div>
                  <iframe
                    className="spotify-embed"
                    src={getSpotifyEmbedUrl(playlist.spotifyUrl)}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <div className="cta-container">
            <h2 className="cta-title">Ready to Reach These Audiences?</h2>
            <p className="cta-description">
              Submit your demo and get featured across our{" "}
              {data.totalFollowers.toLocaleString()}+ follower network
            </p>
            <a href="/submit" className="cta-button">
              Submit Demo
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
