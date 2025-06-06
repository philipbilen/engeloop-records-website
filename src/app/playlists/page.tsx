// src/app/playlists/page.tsx

import StandardHero from "@/app/components/StandardHero";
import PlaylistCard from "@/app/components/PlaylistCard"; // MODIFIED: Import new component
import { playlistService } from "@/lib/services/playlistService"; // MODIFIED: Import service directly
import { logger } from "@/lib/logger";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/components/ui/Button";

// The page is now an async Server Component
export default async function PlaylistsPage() {
  let data;
  try {
    // Fetch data directly on the server
    data = await playlistService.getPlaylistData();
  } catch (error) {
    logger.error("Failed to fetch playlist data for page", error);
    // Render a user-friendly error state
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="text-center p-8">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-700">
            We couldn't load the playlists right now. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const { hero, supporting, totalFollowers, playlistCount } = data;

  /* ---------- Page ---------- */
  return (
    <div className="min-h-screen bg-white">
      {/* Standardized Hero */}
      <StandardHero
        title="OUR PLAYLISTS"
        subtitle={`${totalFollowers.toLocaleString()}+ followers across ${playlistCount} curated playlists`}
        description="Your music reaches engaged audiences through our carefully curated playlist network. Every release gets featured on our flagship playlist."
        backgroundColor="gradient"
      />

      {/* ------------ Flagship Playlist Section (NEW DESIGN) ------------ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-section-title font-work-sans font-bold text-gray-900 mb-2">
              FLAGSHIP PLAYLIST
            </h2>
            <p className="text-xl font-inter text-gray-600">
              The heart of our electronic music community.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side: Image */}
            <div className="w-full aspect-square relative rounded-xl overflow-hidden shadow-lg animate-fade-in">
              <Image
                src={hero.image}
                alt={`Cover for ${hero.name}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side: Details */}
            <div className="flex flex-col justify-center animate-fade-in [animation-delay:100ms]">
              <h3 className="text-4xl lg:text-5xl font-work-sans font-bold text-gray-900 mb-4">
                {hero.name}
              </h3>
              <div className="flex items-baseline gap-4 mb-6">
                <p className="text-4xl font-bold text-engeloop-orange">
                  {hero.followers.toLocaleString()}
                </p>
                <span className="text-lg text-gray-600 font-medium">
                  Followers
                </span>
              </div>
              <p className="text-green-600 font-semibold text-lg mb-6">
                Growing +660 daily
              </p>
              <p className="text-gray-500 leading-relaxed mb-8">
                {hero.description}
              </p>
              <Link
                href={hero.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg uppercase tracking-wider no-underline transition-all duration-300 hover:bg-green-600 hover:-translate-y-1 hover:shadow-lg"
              >
                <Play className="h-6 w-6" fill="currentColor" />
                Listen on Spotify
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------ Specialized Playlists Section (NEW DESIGN) ------------ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-work-sans font-bold text-gray-900 mb-4">
              SPECIALIZED PLAYLISTS
            </h2>
            <p className="text-xl font-inter text-gray-600 max-w-3xl mx-auto">
              Diverse audiences across multiple genres and moods. Find the
              perfect home for your sound.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-8 gap-y-16">
            {supporting.map((playlist) => (
              <PlaylistCard key={playlist.name} playlist={playlist} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------ CTA Section (IMPROVED STYLING) ------------ */}
      <section className="py-24 px-4 bg-engeloop-charcoal text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-work-sans font-bold mb-6">
            Ready to Reach These Audiences?
          </h2>
          <p className="text-xl font-inter text-gray-300 mb-10 max-w-2xl mx-auto">
            Submit your demo and get featured across our{" "}
            {totalFollowers.toLocaleString()}+ follower network.
          </p>
          <Button
            asChild
            size="lg"
            className="font-work-sans font-bold uppercase tracking-wider"
          >
            <Link href="/submit">Submit Your Demo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
