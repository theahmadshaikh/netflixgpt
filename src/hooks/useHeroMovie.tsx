// src/hooks/useHeroMovie.ts
import { useEffect, useState } from "react";
import { useMovieStore } from "../stores/movieStore";
import type { Movie } from "../types/movie";

export const useHeroMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const trending = useMovieStore((state) => state.categories.trending.movies);

  useEffect(() => {
    if (trending.length > 0) {
      const randomIndex = Math.floor(Math.random() * trending.length);
      setMovie(trending[randomIndex]);
    }
  }, [trending]);

  return { movie };
};
