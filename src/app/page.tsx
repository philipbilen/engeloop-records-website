"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SiSpotify, SiInstagram, SiYoutube } from "react-icons/si";
import { ArrowDown } from "lucide-react";

// Import the components we'll need for the "revealed" section
import Navigation from "./components/Navigation";
import StandardHero from "./components/StandardHero";
import StandardFooter from "./components/StandardFooter";
import ArtistCard from "./components/ArtistCard";
import { LoadingState } from "./components/ErrorDisplay";

// Define Artist type locally for this component
interface Artist {
  id: string;
  artist_name: string;
  image_url: string | null;
  spotify_url: string | null;
  apple_music_url: string | null;
  instagram_url: string | null;
}

export default function HomePage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch artists once on component mount
  useEffect(() => {
    const fetchArtists = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/artists");
        if (!response.ok) throw new Error("Failed to fetch artists");
        const apiResponse = await response.json();
        if (apiResponse.success) {
          setArtists(apiResponse.data || []);
        } else {
          throw new Error(apiResponse.error || "API returned an error");
        }
      } catch (error) {
        console.error("Error fetching artists for homepage:", error);
        setArtists([]); // Set to empty array on error
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  // Effect to manage scroll and click listeners for revealing the site
  useEffect(() => {
    // Handler to reveal the site
    const revealSite = () => {
      if (!isRevealed) {
        setIsRevealed(true);
      }
    };

    // Listen to the WINDOW for scroll events
    const handleScroll = () => {
      if (window.scrollY > 10) {
        revealSite();
      }
    };

    if (!isRevealed) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Add click listener to the hint for explicit action
      const hint = document.getElementById("enter-hint");
      if (hint) hint.addEventListener("click", revealSite);
    }

    // Cleanup function to remove listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      const hint = document.getElementById("enter-hint");
      if (hint) hint.removeEventListener("click", revealSite);
    };
  }, [isRevealed]); // Rerun effect if isRevealed changes

  return (
    <>
      {/* ===== Initial Hero View (The part that scrolls away) ===== */}
      <div
        className={`fixed inset-0 w-screen h-screen transition-all duration-1000 ease-in-out z-50 ${
          isRevealed
            ? "opacity-0 -translate-y-full pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div
          className="relative w-full h-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
          style={{ backgroundImage: "url(/media/hero-cover.jpg)" }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

          {/* Main Content - Centered Navigation */}
          <div className="relative z-10 text-center">
            <nav className="flex flex-col gap-6">
              {["Artists", "Playlists", "Releases", "About", "Submit"].map(
                (item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Scroll/Click hint */}
          <div
            id="enter-hint"
            className="absolute bottom-24 z-10 text-white/80 flex flex-col items-center gap-2 animate-pulse cursor-pointer"
          >
            <span className="text-sm uppercase tracking-widest">
              Click or Scroll to Enter
            </span>
            <ArrowDown size={20} />
          </div>

          {/* Social Media & Copyright */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
            <a
              href="https://open.spotify.com/user/31go7xsoxtgw27jqnxwyp27ourfa?si=5c29af8c3ba147e6"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiSpotify size={22} />
            </a>
            <a
              href="https://www.instagram.com/engeloop.wav/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiInstagram size={22} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCwSe6q25WePc88V15aMZFbA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <SiYoutube size={22} />
            </a>
          </div>
          <div className="absolute bottom-8 right-8 text-white/80 text-sm drop-shadow-sm z-20 font-inter font-light">
            ©2025 — Engeloop Records
          </div>
        </div>
      </div>

      {/* ===== Revealed Site View (The main content) ===== */}
      <div className="bg-gray-50">
        <Navigation /> {/* The pill navigation will appear here */}
        <main>
          <StandardHero
            title="INDEPENDENT. AFRO HOUSE. BUILT ON RELATIONSHIPS."
            subtitle="Curating electronic music that moves both body and soul"
            backgroundColor="gray"
            textColor="dark"
            showCTA={true}
            ctaText="See All Artists"
            ctaHref="/artists"
          />

          {/* ===== Section for the Title (Centered) ===== */}
          <section className="pt-20 pb-16 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <h2 className="text-section-refined text-gray-900 mb-4">
                Meet The Family
              </h2>
              <p className="text-body-refined text-gray-600 max-w-2xl mx-auto">
                The talented individuals shaping the sound of Engeloop.
              </p>
            </div>
          </section>

          {/* ===== Full-bleed Mosaic block (Not in a container) ===== */}
          {/* ===== Full-bleed Mosaic block (Not in a container) ===== */}
          <div className="bg-white">
            {" "}
            {/* REMOVED pb-20 from this line */}
            {loading ? (
              <div className="max-w-7xl mx-auto px-6">
                <LoadingState
                  message="Loading artists..."
                  size="large"
                  className="py-16"
                />
              </div>
            ) : (
              <div
                className="overflow-x-auto scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex flex-col" style={{ width: "max-content" }}>
                  {/* Row 1 */}
                  <div className="flex">
                    {artists
                      .filter((_, index) => index % 2 === 0)
                      .map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                      ))}
                  </div>
                  {/* Row 2 */}
                  <div className="flex">
                    {artists
                      .filter((_, index) => index % 2 === 1)
                      .map((artist) => (
                        <ArtistCard key={artist.id} artist={artist} />
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <StandardFooter
            title="Ready to Work With Us?"
            description="Get in touch to discuss your project, learn about our services, or explore collaboration opportunities with Engeloop Records."
            buttonText="Submit Your Music"
            buttonHref="/submit"
            backgroundColor="cream"
            theme="light"
          />
        </main>
      </div>
      <style jsx>{`
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 3.5rem;
          height: 3.5rem;
          background-color: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 0.75rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .social-icon:hover {
          color: #f8831e;
          background-color: rgba(255, 255, 255, 0.25);
          transform: scale(1.1);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}
