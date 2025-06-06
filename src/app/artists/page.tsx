// src/app/artists/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ArtistCard from "@/app/components/ArtistCard";
import StandardHero from "@/app/components/StandardHero";
import ErrorDisplay, {
  LoadingState,
  EmptyState,
} from "@/app/components/ErrorDisplay";
import {
  withErrorHandling,
  normalizeError,
  AppError,
} from "@/lib/errorHandling";

interface Artist {
  id: string;
  artist_name: string;
  image_url: string | null;
  spotify_url: string | null;
  apple_music_url: string | null;
  instagram_url: string | null;
}

export default function ArtistsPage() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AppError | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchArtists = async (showLoading = true) => {
    if (showLoading) {
      setLoading(true);
    }
    setError(null);

    const result = await withErrorHandling(
      async () => {
        const response = await fetch("/api/artists");

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Artists endpoint not found");
          }
          if (response.status >= 500) {
            throw new Error("Server error while fetching artists");
          }
          throw new Error(`HTTP ${response.status}: Failed to fetch artists`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("Invalid response format from artists API");
        }

        return data;
      },
      {
        operation: "fetch_artists",
        retryAttempt: retryCount,
      }
    );

    if (result.error) {
      setError(result.error);
    } else {
      setArtists(result.data || []);
    }

    setLoading(false);
  };

  const handleRetry = () => {
    setRetryCount((prev) => prev + 1);
    fetchArtists();
  };

  useEffect(() => {
    fetchArtists();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
          // backgroundImage="/media/Iniye_Cover.jpg"
          textColor="light"
        />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <LoadingState
              message="Loading artists..."
              size="large"
              className="py-16"
            />
          </div>
        </section>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
          // backgroundImage="/media/Iniye_Cover.jpg"
          textColor="light"
        />
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <ErrorDisplay
              error={error}
              onRetry={handleRetry}
              showRetry={true}
              showDetails={process.env.NODE_ENV === "development"}
            />
          </div>
        </section>
      </div>
    );
  }

  // Empty state
  if (artists.length === 0) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
          // backgroundImage="/media/Iniye_Cover.jpg"
          textColor="light"
        />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <EmptyState
              title="No Artists Found"
              description="We're currently building our roster. Check back soon for amazing artists!"
              icon="🎵"
              action={{
                label: "Submit Your Music",
                href: "/submit",
              }}
            />
          </div>
        </section>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen">
      {/* Standardized Hero Section */}
      <StandardHero
        title="OUR ARTISTS"
        subtitle="Discover the talented artists who shape the sound of Engeloop Records"
        backgroundImage="/media/atabaque.jpg"
        backgroundPosition="50% 25%"
        textColor="light"
      />

      {/* Artists Grid */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Refresh Button for Development */}
          {process.env.NODE_ENV === "development" && (
            <div className="mb-6 text-center">
              {/* <button
                onClick={() => fetchArtists(false)}
                className="text-sm text-gray-600 hover:text-gray-800 underline"
              >
                🔄 Refresh Artists
              </button> */}
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12 justify-items-center px-4 sm:px-6">
            {artists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>

          {/* Artists count */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-sm">
              Showing {artists.length} artist{artists.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Roster CTA */}
      <section className="py-24 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 uppercase tracking-wider mb-6">
            Join Our Roster
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
            Got something special? We&apos;re always looking for the next
            standout sound in Afro House or Deep House.
          </p>
          <Link
            href="/submit"
            className="inline-block bg-engeloop-orange text-white px-10 py-4 rounded-xl font-semibold text-lg uppercase tracking-wider no-underline transition-all duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg"
          >
            Submit Your Music
          </Link>
        </div>
      </section>
    </div>
  );
}
