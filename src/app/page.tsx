"use client";

import Link from "next/link";
import { SiSpotify, SiInstagram, SiYoutube } from "react-icons/si";

export default function HomePage() {
  return (
    <div
      className="fixed inset-0 w-screen h-screen bg-cover bg-center bg-no-repeat z-[10000]"
      style={{ backgroundImage: "url(/media/hero-cover.jpg)" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30 z-[1]" />

      {/* Main Content - Centered Navigation */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <nav className="flex flex-col gap-6">
            <Link
              href="/artists"
              className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
            >
              ARTISTS
            </Link>
            <Link
              href="/playlists"
              className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
            >
              PLAYLISTS
            </Link>
            <Link
              href="/releases"
              className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
            >
              RELEASES
            </Link>
            <Link
              href="/about"
              className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
            >
              ABOUT
            </Link>
            <Link
              href="/submit"
              className="text-nav font-work-sans font-bold text-white no-underline uppercase tracking-wider block transition-all duration-100 ease-in-out hover:text-[#f8831e] hover:drop-shadow-lg"
            >
              SUBMIT
            </Link>
          </nav>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 z-20">
        <a
          href="https://open.spotify.com/user/31go7xsoxtgw27jqnxwyp27ourfa?si=5c29af8c3ba147e6"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center text-white no-underline transition-all duration-300 ease-in-out shadow-lg hover:text-[#f8831e] hover:bg-white/25 hover:scale-110 hover:shadow-xl"
        >
          <SiSpotify size={22} />
        </a>
        <a
          href="https://www.instagram.com/engeloop.wav/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center text-white no-underline transition-all duration-300 ease-in-out shadow-lg hover:text-[#f8831e] hover:bg-white/25 hover:scale-110 hover:shadow-xl"
        >
          <SiInstagram size={22} />
        </a>
        <a
          href="https://www.youtube.com/channel/UCwSe6q25WePc88V15aMZFbA"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-white/15 backdrop-blur-sm border border-white/25 rounded-xl flex items-center justify-center text-white no-underline transition-all duration-300 ease-in-out shadow-lg hover:text-[#f8831e] hover:bg-white/25 hover:scale-110 hover:shadow-xl"
        >
          <SiYoutube size={22} />
        </a>
      </div>

      {/* Copyright - Bottom Right */}
      <div className="absolute bottom-8 right-8 text-white/80 text-sm drop-shadow-sm z-20 font-inter font-light">
        ©2025 — Engeloop Records
      </div>
    </div>
  );
}
