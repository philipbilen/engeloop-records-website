// src/app/artists/page.tsx

"use client";

import { useEffect, useState } from "react";
import ArtistCard from "@/app/components/ArtistCard";
import StandardHero from "@/app/components/StandardHero";
import StandardFooter from "@/app/components/StandardFooter";
import ErrorDisplay, {
  LoadingState,
  EmptyState,
} from "@/app/components/ErrorDisplay";
import { withErrorHandling, AppError } from "@/lib/errorHandling";

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

  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      setError(null);

      const result = await withErrorHandling(
        async () => {
          const response = await fetch("/api/artists");

          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: Failed to fetch artists`);
          }

          const apiResponse = await response.json();

          if (apiResponse.success) {
            return apiResponse.data;
          } else {
            throw new Error(apiResponse.error || "API returned an error");
          }
        },
        { operation: "fetch_artists" }
      );

      if (result.error) {
        setError(result.error);
      } else {
        setArtists(result.data || []);
      }

      setLoading(false);
    };

    fetchArtists();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
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

  if (error) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
          textColor="light"
        />
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <ErrorDisplay
              error={error}
              onRetry={() => window.location.reload()}
              showRetry={true}
            />
          </div>
        </section>
      </div>
    );
  }

  if (artists.length === 0) {
    return (
      <div className="min-h-screen">
        <StandardHero
          title="OUR ARTISTS"
          subtitle="Discover the talented artists who shape the sound of Engeloop Records"
          textColor="light"
        />
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <EmptyState
              title="No Artists Found"
              description="We're currently building our roster. Check back soon for amazing artists!"
              icon="🎵"
              action={{ label: "Submit Your Music", href: "/submit" }}
            />
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <StandardHero
        title="OUR ARTISTS"
        subtitle="Discover the talented artists who shape the sound of Engeloop Records"
        backgroundImage="/media/BringMeLove.jpg"
        backgroundPosition="50% 25%"
        textColor="light"
      />

      {/* Pure Artist Mosaic - No Container */}
      <div
        className="overflow-x-auto scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex flex-col" style={{ width: "max-content" }}>
          <div className="flex">
            {artists
              .filter((_, index) => index % 2 === 0)
              .map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
          </div>
          <div className="flex">
            {artists
              .filter((_, index) => index % 2 === 1)
              .map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
          </div>
        </div>
      </div>

      <StandardFooter
        title="Join Our Roster"
        description="Got something special? We're always looking for the next standout sound in Afro House or Deep House."
        buttonText="Submit Your Music"
        buttonHref="/submit"
        backgroundColor="cream"
        theme="light"
      />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
