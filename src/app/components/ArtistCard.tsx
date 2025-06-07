"use client";

import { useState } from "react";
import Image from "next/image";
import { SiSpotify, SiApplemusic, SiInstagram } from "react-icons/si";

interface Artist {
  id: string;
  artist_name: string;
  image_url: string | null;
  spotify_url: string | null;
  apple_music_url: string | null;
  instagram_url: string | null;
}

export default function ArtistCard({ artist }: { artist: Artist }) {
  const [imageError, setImageError] = useState(false);

  const socialLinks = [
    {
      icon: SiSpotify,
      color: "#1db954",
      url: artist.spotify_url,
      name: "Spotify",
    },
    {
      icon: SiApplemusic,
      color: "#fa233b",
      url: artist.apple_music_url,
      name: "Apple Music",
    },
    {
      icon: SiInstagram,
      color: "#e1306c",
      url: artist.instagram_url,
      name: "Instagram",
    },
  ].filter((link) => link.url);

  return (
    <div className="bg-white overflow-hidden w-80 h-96 relative group transition-all duration-300">
      {/* Main Image Container */}
      <div className="h-full relative bg-gray-100 overflow-hidden">
        {artist.image_url && !imageError ? (
          <Image
            src={artist.image_url}
            alt={artist.artist_name}
            fill
            sizes="320px"
            style={{ objectFit: "cover" }}
            className="transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <div className="text-center">
              <div className="text-6xl mb-2">🎵</div>
              <p className="text-white font-bold text-lg uppercase px-4">
                {artist.artist_name}
              </p>
            </div>
          </div>
        )}

        {/* Artist Name Overlay (Always Visible) */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="absolute top-6 left-0 right-0 text-center">
          <h3 className="text-2xl font-bold text-white uppercase px-4">
            {artist.artist_name}
          </h3>
        </div>

        {/* Social Icons Overlay (Hover Only) */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex justify-center gap-4">
            {socialLinks.length > 0 ? (
              socialLinks.map(({ icon: Icon, color, url, name }) => (
                <a
                  key={name}
                  href={url!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm text-white transition-all duration-300 hover:scale-110 hover:bg-white/30"
                  style={{ color: "white" }}
                >
                  <Icon size={20} />
                </a>
              ))
            ) : (
              <div className="flex items-center justify-center h-12 text-white/80 text-sm italic">
                Coming soon...
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
