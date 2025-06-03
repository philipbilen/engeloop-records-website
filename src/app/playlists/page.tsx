"use client";

import { useState, useEffect } from "react";

/* ---------- Types ---------- */
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

/* ---------- Component ---------- */
export default function PlaylistsPage() {
  const [data, setData] = useState<PlaylistData | null>(null);
  const [loading, setLoading] = useState(true);

  /* Fetch playlists on mount */
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await fetch("/api/playlists/all");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch playlists:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPlaylists();
  }, []);

  /* Helper – build Spotify embed URL */
  const getSpotifyEmbedUrl = (url: string) => {
    const id = url.split("/playlist/")[1]?.split("?")[0];
    return `https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`;
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="text-xl font-semibold">Loading playlists…</span>
      </div>
    );
  }

  if (!data?.success) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="text-xl font-semibold text-red-600">
          Failed to load playlists
        </span>
      </div>
    );
  }

  /* ---------- Page ---------- */
  return (
    <>
      <style jsx>{`
        /* Generic container used across sections */
        .page-container {
          max-width: 1024px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Hero */
        .hero-section {
          padding: 7rem 1rem 4rem 1rem; /* extra top space below logo/nav */
          background: linear-gradient(to bottom, #ffffff, #f9fafb);
          text-align: center;
        }
        .main-title {
          font: 800 3.5rem/1.1 "Poppins", sans-serif;
          color: #111827;
          letter-spacing: -0.01em;
          margin-bottom: 0.75rem;
        }
        .subtitle {
          font: 500 1.25rem/1.4 "Poppins", sans-serif;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 1rem;
        }
        .description {
          font: 400 1.25rem/1.6 "Poppins", sans-serif;
          color: #374151;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Flagship */
        .flagship-section {
          padding: 5rem 1rem 4rem;
          background: #f9fafb;
        }
        .section-title {
          font: 700 2.5rem/1.2 "Poppins", sans-serif;
          color: #111827;
          margin-bottom: 1rem;
        }
        .follower-count {
          font: 600 2rem/1.3 "Poppins", sans-serif;
          color: #374151;
        }
        .growth-text {
          font: 500 1.25rem/1.4 "Poppins", sans-serif;
          color: #059669;
          margin-bottom: 2rem;
        }
        .hero-playlist-embed {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          padding: 2.5rem;
          margin: 0 auto;
        }
        .hero-spotify-embed {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 12px;
        }

        /* Supporting grid */
        .supporting-section {
          padding: 3rem 1rem;
        }
        .supporting-intro {
          text-align: center;
          margin-bottom: 3rem;
        }
        .playlist-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        }
        .playlist-embed-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          transition: box-shadow 0.2s, border 0.2s;
        }
        .playlist-embed-card:hover {
          border-color: #c04e27;
          box-shadow: 0 16px 30px rgba(0, 0, 0, 0.08);
        }
        .playlist-header {
          padding: 1.5rem;
          text-align: center;
        }
        .playlist-name {
          font: 700 1.25rem/1.3 "Poppins", sans-serif;
          color: #111827;
          margin-bottom: 0.5rem;
        }
        .playlist-followers {
          font: 600 1.125rem/1.4 "Poppins", sans-serif;
          color: #374151;
          margin-bottom: 0.5rem;
        }
        .playlist-tracks {
          font: 400 0.875rem/1.4 "Poppins", sans-serif;
          color: #9ca3af;
        }
        .spotify-embed {
          width: 100%;
          height: 380px;
          border: none;
          border-radius: 0 0 12px 12px;
        }

        /* CTA */
        .cta-section {
          padding: 6rem 1rem;
          background: #111827;
          color: #fff;
          text-align: center;
        }
        .cta-title {
          font: 700 2.5rem/1.2 "Poppins", sans-serif;
          margin-bottom: 1rem;
        }
        .cta-description {
          font: 400 1.25rem/1.5 "Poppins", sans-serif;
          color: #d1d5db;
          margin-bottom: 2rem;
        }
        .cta-button {
          background: #fff;
          color: #111827;
          padding: 1rem 2rem;
          border-radius: 8px;
          font: 700 1.125rem/1 "Poppins", sans-serif;
          text-decoration: none;
          transition: background 0.2s;
        }
        .cta-button:hover {
          background: #f3f4f6;
        }

        /* Responsive tweaks */
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

      {/* ------------ Hero ------------ */}
      <section className="hero-section">
        <div className="page-container">
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
        </div>
      </section>

      {/* ------------ Flagship ------------ */}
      <section className="flagship-section">
        <div className="page-container">
          <h2 className="section-title">FLAGSHIP PLAYLIST</h2>
          <div className="follower-count">
            {data.hero.followers.toLocaleString()} Followers
          </div>
          <div className="growth-text">Growing +660 daily</div>

          <div className="hero-playlist-embed">
            <iframe
              className="hero-spotify-embed"
              src={getSpotifyEmbedUrl(data.hero.spotifyUrl)}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ------------ Supporting ------------ */}
      <section className="supporting-section">
        <div className="page-container">
          <div className="supporting-intro">
            <h2 className="section-title">SPECIALIZED PLAYLISTS</h2>
            <p className="subtitle" style={{ marginBottom: 0 }}>
              Diverse audiences across multiple genres and moods
            </p>
          </div>

          <div className="playlist-grid">
            {data.supporting.map((p, i) => (
              <div key={i} className="playlist-embed-card">
                <div className="playlist-header">
                  <h3 className="playlist-name">{p.name}</h3>
                  <div className="playlist-followers">
                    {p.followers.toLocaleString()} followers
                  </div>
                  <div className="playlist-tracks">{p.trackCount} tracks</div>
                </div>
                <iframe
                  className="spotify-embed"
                  src={getSpotifyEmbedUrl(p.spotifyUrl)}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ CTA ------------ */}
      <section className="cta-section">
        <div className="page-container">
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
    </>
  );
}
