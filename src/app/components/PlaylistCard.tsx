// src/app/components/PlaylistCard.tsx

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { Playlist } from "@/types"; // Assuming Playlist type is in your types file

interface PlaylistCardProps {
  playlist: Playlist;
}

export default function PlaylistCard({ playlist }: PlaylistCardProps) {
  return (
    <Link
      href={playlist.spotifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block animate-fade-in"
      aria-label={`Listen to ${playlist.name} on Spotify`}
    >
      <div className="relative overflow-hidden rounded-xl shadow-card transition-all duration-300 group-hover:shadow-card-hover group-hover:-translate-y-2">
        {/* Image with Hover Effect */}
        <Image
          src={playlist.image}
          alt={`Cover art for ${playlist.name}`}
          width={400}
          height={400}
          className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Gradient Overlay and Play Icon on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 p-4 backdrop-blur-xs">
            <Play
              className="h-8 w-8 text-white"
              fill="white"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </div>

      {/* Text Content Below Image */}
      <div className="mt-4 px-2">
        <h3 className="text-lg font-bold text-engeloop-charcoal truncate group-hover:text-engeloop-orange transition-colors">
          {playlist.name}
        </h3>
        <p className="text-sm font-medium text-gray-500">
          {playlist.followers.toLocaleString()} followers
        </p>
      </div>
    </Link>
  );
}
