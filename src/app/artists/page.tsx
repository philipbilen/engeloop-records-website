"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ArtistCard from "@/app/components/ArtistCard";

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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchArtists() {
      try {
        const response = await fetch("/api/artists");
        if (!response.ok) {
          throw new Error("Failed to fetch artists");
        }
        const data = await response.json();
        setArtists(data || []);
      } catch {
        setError("Failed to load artists");
      } finally {
        setLoading(false);
      }
    }
    fetchArtists();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading artists...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4 text-lg">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative pt-32 pb-20 bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/media/Iniye_Cover.jpg)",
          minHeight: "50vh",
        }}
      >
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16">
          <h1 className="text-6xl font-bold text-white uppercase tracking-wider mb-8 leading-none">
            Our Artists
          </h1>
          <p className="text-xl text-white/95 leading-relaxed max-w-2xl mx-auto">
            Discover the talented artists who shape the sound of Engeloop
            Records
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {artists.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No artists found.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center">
              {artists.map((artist) => (
                <ArtistCard key={artist.id} artist={artist} />
              ))}
            </div>
          )}
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
            className="inline-block bg-orange-600 text-white px-10 py-4 rounded-xl font-semibold text-lg uppercase tracking-wider no-underline transition-all duration-300 hover:bg-orange-700 hover:-translate-y-1 hover:shadow-lg"
          >
            Submit Your Music
          </Link>
        </div>
      </section>
    </div>
  );
}
