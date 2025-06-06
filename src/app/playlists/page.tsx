// src/app/playlists/page.tsx

"use client";

import { useState, useEffect } from "react";
import StandardHero from "@/app/components/StandardHero";

/* ---------- Types ---------- */
// The data shape the COMPONENT uses
interface PlaylistDisplayData {
  hero: Playlist;
  supporting: Playlist[];
  totalFollowers: number;
  playlistCount: number;
  success: boolean;
  lastUpdated: string;
}

interface Playlist {
  name: string;
  followers: number;
  description: string;
  trackCount: number;
  image: string;
  spotifyUrl: string;
}

/* ---------- Component ---------- */
export default function PlaylistsPage() {
  // The state holds the data shape the component needs
  const [data, setData] = useState<PlaylistDisplayData | null>(null);
  const [loading, setLoading] = useState(true);

  /* Fetch playlists on mount */
  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const res = await fetch("/api/playlists");

        // This is the response from our API: { success: boolean, data: { ... } }
        const apiResponse = await res.json();

        // --- CHANGE HERE: Correctly handle the nested data structure ---
        if (apiResponse.success) {
          // Pass the nested `data` object to the state setter
          setData(apiResponse.data);
        } else {
          // If the API call failed, set a failure state
          console.error("API returned an error:", apiResponse.error);
          setData(null); // Or a specific error state object
        }
      } catch (err) {
        console.error("Failed to fetch or parse playlists:", err);
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
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-engeloop-orange mx-auto mb-4"></div>
          <span className="text-xl font-semibold text-gray-900">
            Loading playlists…
          </span>
        </div>
      </div>
    );
  }

  // Now this check works correctly on the state object
  if (!data?.success) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <span className="text-xl font-semibold text-red-600">
            Failed to load playlists. Please try again later.
          </span>
        </div>
      </div>
    );
  }

  /* ---------- Page ---------- */
  // The rest of the JSX can remain unchanged because `data` in the state now has the correct shape
  return (
    <div className="min-h-screen bg-white">
      {/* Standardized Hero */}
      <StandardHero
        title="OUR PLAYLISTS"
        subtitle={`${data.totalFollowers.toLocaleString()}+ followers across ${
          data.playlistCount
        } curated playlists`}
        description="Your music reaches engaged audiences through our carefully curated playlist network. Every release gets featured on our flagship playlist with 113K+ active followers."
        backgroundColor="gradient"
      />

      {/* ------------ Flagship ------------ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section-title font-work-sans font-bold text-gray-900 mb-4">
              FLAGSHIP PLAYLIST
            </h2>
            <div className="text-4xl font-work-sans font-bold text-gray-900 mb-2">
              {data.hero.followers.toLocaleString()} Followers
            </div>
            <div className="text-xl font-inter font-semibold text-green-600 mb-8">
              Growing +660 daily
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 max-w-4xl mx-auto">
            <iframe
              className="w-full h-96 md:h-[500px] rounded-xl"
              src={getSpotifyEmbedUrl(data.hero.spotifyUrl)}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ------------ Supporting ------------ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-work-sans font-bold text-gray-900 mb-4">
              SPECIALIZED PLAYLISTS
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-2xl mx-auto">
              Diverse audiences across multiple genres and moods
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {data.supporting.map((playlist, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg hover:border-engeloop-orange transition-all duration-300"
              >
                <div className="p-6 text-center border-b border-gray-100">
                  <h3 className="text-xl font-work-sans font-bold text-gray-900 mb-2">
                    {playlist.name}
                  </h3>
                  <div className="text-lg font-inter font-semibold text-gray-700 mb-1">
                    {playlist.followers.toLocaleString()} followers
                  </div>
                  <div className="text-sm font-inter text-gray-500">
                    {playlist.trackCount} tracks
                  </div>
                </div>
                <div className="p-0">
                  <iframe
                    className="w-full h-80 rounded-b-xl"
                    src={getSpotifyEmbedUrl(playlist.spotifyUrl)}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------ CTA ------------ */}
      <section className="py-24 px-4 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-work-sans font-bold mb-6">
            Ready to Reach These Audiences?
          </h2>
          <p className="text-xl font-inter text-gray-300 mb-8 max-w-2xl mx-auto">
            Submit your demo and get featured across our{" "}
            {data.totalFollowers.toLocaleString()}+ follower network
          </p>
          <a
            href="/submit"
            className="inline-block bg-engeloop-orange hover:bg-engeloop-orange/90 text-white font-work-sans font-bold text-lg px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg no-underline"
          >
            Submit Demo
          </a>
        </div>
      </section>
    </div>
  );
}
