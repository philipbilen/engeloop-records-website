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
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden max-w-80 w-full transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl">
      <div className="h-80 relative bg-gray-100">
        {artist.image_url && !imageError ? (
          <Image
            src={artist.image_url}
            alt={artist.artist_name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-orange-200 to-orange-500 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">🎵</div>
              <p className="text-white font-bold text-lg uppercase px-4">
                {artist.artist_name}
              </p>
            </div>
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="absolute top-6 left-0 right-0 text-center">
          <h3 className="text-2xl font-bold text-white uppercase px-4">
            {artist.artist_name}
          </h3>
        </div>
      </div>
      <div className="p-8 flex justify-center gap-5 min-h-20">
        {socialLinks.length > 0 ? (
          socialLinks.map(({ icon: Icon, color, url, name }) => (
            <a
              key={name}
              href={url!}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-50 text-gray-400 transition-all duration-300 hover:scale-110"
              style={{ color }}
            >
              <Icon size={24} />
            </a>
          ))
        ) : (
          <div className="text-gray-400 text-sm italic flex items-center h-14">
            Coming soon...
          </div>
        )}
      </div>
    </div>
  );
}
