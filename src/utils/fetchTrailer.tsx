// utils/fetchTrailer.ts
import { TMDB_API_OPTION } from "./constants";

export const fetchTrailerKey = async (movieId: number): Promise<string | null> => {
  try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, TMDB_API_OPTION);
    const data = await res.json();
    const trailer = data.results.find(
      (video: any) => video.type === "Trailer" && video.site === "YouTube"
    );
    return trailer?.key ?? null;
  } catch (err) {
    console.error("Failed to fetch trailer:", err);
    return null;
  }
};
