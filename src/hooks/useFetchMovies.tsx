import { useEffect } from "react";
import { useMovieStore, type MovieCategory } from "../stores/movieStore";
import { TMDB_API_OPTION } from "../utils/constants";

export const useFetchMovies = (category: MovieCategory, page: number) => {
  const setCategoryData = useMovieStore((s) => s.setCategoryData);
  const setLoading = useMovieStore((s) => s.setLoading);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(category, true);

      try {
        const url =
          category === "trending"
            ? `https://api.themoviedb.org/3/trending/movie/day`
            : `https://api.themoviedb.org/3/movie/${category}?page=${page}`;

        const res = await fetch(url, TMDB_API_OPTION);
        const data = await res.json();

        setCategoryData(category, data.results, data.page ?? 1, data.total_pages ?? 1);
      } catch (err) {
        console.error(`Error fetching ${category}:`, err);
      } finally {
        setLoading(category, false);
      }
    };

    fetchMovies();
  }, [category, page, setCategoryData, setLoading]);
};
