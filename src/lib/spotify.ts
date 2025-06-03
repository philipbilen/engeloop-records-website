// src/lib/spotify.ts

interface SpotifyAlbum {
  id: string;
  name: string;
  release_date: string;
  release_date_precision: "year" | "month" | "day";
  album_type: "album" | "single" | "compilation";
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  external_urls: {
    spotify: string;
  };
  total_tracks: number;
}

interface SpotifyToken {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface SpotifyArtist {
  id: string;
  name: string;
  images: Array<{
    url: string;
    height: number;
    width: number;
  }>;
  followers: {
    total: number;
  };
  popularity: number;
  external_urls: {
    spotify: string;
  };
  genres?: string[];
}

interface SpotifySearchResponse {
  artists: {
    items: SpotifyArtist[];
  };
}

interface MatchScore {
  artist: SpotifyArtist;
  score: number;
  reasons: string[];
}

class SpotifyAPI {
  private clientId: string;
  private clientSecret: string;
  private accessToken: string | null = null;
  private tokenExpiry: number | null = null;

  constructor() {
    this.clientId = process.env.SPOTIFY_CLIENT_ID!;
    this.clientSecret = process.env.SPOTIFY_CLIENT_SECRET!;
  }

  private async getAccessToken(): Promise<string> {
    // Check if we have a valid token
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${this.clientId}:${this.clientSecret}`
        ).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    });

    if (!response.ok) {
      throw new Error("Failed to get Spotify access token");
    }

    const data: SpotifyToken = await response.json();
    this.accessToken = data.access_token;
    this.tokenExpiry = Date.now() + data.expires_in * 1000 - 60000; // Expire 1 minute early

    return this.accessToken;
  }

  private calculateMatchScore(
    spotifyArtist: SpotifyArtist,
    searchName: string
  ): MatchScore {
    const reasons: string[] = [];
    let score = 0;

    const cleanSearchName = searchName.toLowerCase().trim();
    const cleanSpotifyName = spotifyArtist.name.toLowerCase().trim();

    // Exact match (highest score)
    if (cleanSpotifyName === cleanSearchName) {
      score += 100;
      reasons.push("Exact name match");
    }

    // Very close match (remove spaces, hyphens, etc.)
    const normalizeText = (text: string) =>
      text.replace(/[-\s_\.]/g, "").toLowerCase();
    if (normalizeText(cleanSpotifyName) === normalizeText(cleanSearchName)) {
      score += 90;
      reasons.push("Normalized name match");
    }

    // Partial matches
    if (
      cleanSpotifyName.includes(cleanSearchName) ||
      cleanSearchName.includes(cleanSpotifyName)
    ) {
      score += 60;
      reasons.push("Partial name match");
    }

    // Genre relevance (electronic music bonus)
    const relevantGenres = [
      "house",
      "deep house",
      "afro house",
      "electronic",
      "dance",
      "techno",
    ];
    const hasRelevantGenre = spotifyArtist.genres?.some((genre) =>
      relevantGenres.some((relevant) => genre.toLowerCase().includes(relevant))
    );
    if (hasRelevantGenre) {
      score += 20;
      reasons.push("Relevant genre");
    }

    // Popularity factor (but not dominant)
    if (spotifyArtist.popularity > 50) {
      score += 10;
      reasons.push("High popularity");
    } else if (spotifyArtist.popularity > 20) {
      score += 5;
      reasons.push("Medium popularity");
    }

    // Has profile image
    if (spotifyArtist.images && spotifyArtist.images.length > 0) {
      score += 5;
      reasons.push("Has profile image");
    }

    return { artist: spotifyArtist, score, reasons };
  }

  async getArtistAlbums(
    spotifyId: string,
    limit: number = 20
  ): Promise<SpotifyAlbum[] | null> {
    try {
      const token = await this.getAccessToken();

      const response = await fetch(
        `https://api.spotify.com/v1/artists/${spotifyId}/albums?include_groups=album,single&market=US&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          `Spotify albums API error for ID ${spotifyId}:`,
          response.status
        );
        return null;
      }

      const data = await response.json();
      return data.items || [];
    } catch (error: unknown) {
      console.error(`Error fetching albums for artist ID ${spotifyId}:`, error);
      return null;
    }
  }

  async searchArtist(artistName: string): Promise<SpotifyArtist | null> {
    try {
      const token = await this.getAccessToken();

      // Clean artist name for better search results
      const cleanName = artistName.trim().toLowerCase();
      const searchQuery = encodeURIComponent(cleanName);

      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          `Spotify API error for "${artistName}":`,
          response.status
        );
        return null;
      }

      const data: SpotifySearchResponse = await response.json();

      if (data.artists.items.length === 0) {
        console.log(`No Spotify results for: ${artistName}`);
        return null;
      }

      // Find best match
      const exactMatch = data.artists.items.find(
        (artist) => artist.name.toLowerCase() === cleanName
      );

      if (exactMatch) {
        return exactMatch;
      }

      // Return most popular artist if no exact match
      const popularArtist = data.artists.items.reduce((prev, current) =>
        current.popularity > prev.popularity ? current : prev
      );

      return popularArtist;
    } catch (error: unknown) {
      console.error(`Error searching for artist "${artistName}":`, error);
      return null;
    }
  }

  async searchArtistWithConfidence(artistName: string): Promise<{
    artist: SpotifyArtist | null;
    confidence: "high" | "medium" | "low";
    score: number;
    reasons: string[];
    alternatives?: SpotifyArtist[];
  }> {
    try {
      const token = await this.getAccessToken();

      // Try multiple search strategies
      const searchQueries = [
        artistName.trim(),
        `"${artistName.trim()}"`, // Exact phrase
        artistName.replace(/[^\w\s]/g, ""), // Remove special chars
      ];

      let allResults: SpotifyArtist[] = [];

      for (const query of searchQueries) {
        const response = await fetch(
          `https://api.spotify.com/v1/search?q=${encodeURIComponent(
            query
          )}&type=artist&limit=20`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (response.ok) {
          const data: SpotifySearchResponse = await response.json();
          allResults = [...allResults, ...data.artists.items];
        }
      }

      // Remove duplicates
      const uniqueResults = allResults.filter(
        (artist, index, self) =>
          index === self.findIndex((a) => a.id === artist.id)
      );

      if (uniqueResults.length === 0) {
        return {
          artist: null,
          confidence: "low",
          score: 0,
          reasons: ["No results found"],
        };
      }

      // Score all results
      const scoredResults = uniqueResults
        .map((artist) => this.calculateMatchScore(artist, artistName))
        .sort((a, b) => b.score - a.score);

      const bestMatch = scoredResults[0];
      const alternatives = scoredResults.slice(1, 4).map((r) => r.artist);

      // Determine confidence
      let confidence: "high" | "medium" | "low";
      if (bestMatch.score >= 90) {
        confidence = "high";
      } else if (bestMatch.score >= 60) {
        confidence = "medium";
      } else {
        confidence = "low";
      }

      return {
        artist: bestMatch.artist,
        confidence,
        score: bestMatch.score,
        reasons: bestMatch.reasons,
        alternatives,
      };
    } catch (error: unknown) {
      console.error(`Error searching for artist "${artistName}":`, error);
      return {
        artist: null,
        confidence: "low",
        score: 0,
        reasons: ["Search error"],
      };
    }
  }

  async getArtistByID(spotifyId: string): Promise<SpotifyArtist | null> {
    try {
      const token = await this.getAccessToken();

      const response = await fetch(
        `https://api.spotify.com/v1/artists/${spotifyId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        console.error(
          `Spotify API error for ID ${spotifyId}:`,
          response.status
        );
        return null;
      }

      return await response.json();
    } catch (error: unknown) {
      console.error(`Error fetching artist by ID ${spotifyId}:`, error);
      return null;
    }
  }

  async getArtistImageUrl(artistName: string): Promise<string | null> {
    const artist = await this.searchArtist(artistName);

    if (!artist || !artist.images || artist.images.length === 0) {
      return null;
    }

    // Return the highest quality image (usually the first one)
    return artist.images[0].url;
  }

  async getArtistData(artistName: string): Promise<{
    name: string;
    imageUrl: string | null;
    spotifyUrl: string;
    followers: number;
    popularity: number;
    spotifyId: string;
  } | null> {
    const artist = await this.searchArtist(artistName);

    if (!artist) {
      return null;
    }

    return {
      name: artist.name,
      imageUrl: artist.images?.[0]?.url || null,
      spotifyUrl: artist.external_urls.spotify,
      followers: artist.followers.total,
      popularity: artist.popularity,
      spotifyId: artist.id,
    };
  }

  async getArtistDataSafe(
    artistName: string,
    minConfidence: "high" | "medium" | "low" = "medium"
  ) {
    const result = await this.searchArtistWithConfidence(artistName);

    // Only return data if confidence meets threshold
    const confidenceOrder = { high: 3, medium: 2, low: 1 };
    if (confidenceOrder[result.confidence] < confidenceOrder[minConfidence]) {
      console.log(
        `❌ Low confidence match for "${artistName}" (${result.confidence}, score: ${result.score})`
      );
      return null;
    }

    if (!result.artist) {
      return null;
    }

    console.log(
      `✅ ${result.confidence.toUpperCase()} confidence match for "${artistName}" → "${
        result.artist.name
      }" (score: ${result.score})`
    );
    console.log(`   Reasons: ${result.reasons.join(", ")}`);

    return {
      name: result.artist.name,
      imageUrl: result.artist.images?.[0]?.url || null,
      spotifyUrl: result.artist.external_urls.spotify,
      followers: result.artist.followers.total,
      popularity: result.artist.popularity,
      spotifyId: result.artist.id,
      confidence: result.confidence,
      matchScore: result.score,
      matchReasons: result.reasons,
      alternatives: result.alternatives?.map((alt) => ({
        name: alt.name,
        popularity: alt.popularity,
        spotifyUrl: alt.external_urls.spotify,
      })),
    };
  }
}

export const spotifyAPI = new SpotifyAPI();
