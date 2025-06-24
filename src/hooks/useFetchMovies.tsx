import { useEffect } from "react";
import  { useMovieStore, type  MovieCategory } from "../stores/movieStore";
import { TMDB_API_OPTION } from "../utils/constants";

export const useFetchMovies = (category: MovieCategory, page: number) => {
  const setCategoryData = useMovieStore((s) => s.setCategoryData);
  const setLoading = useMovieStore((s) => s.setLoading);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(category, true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?page=${page}`,
          TMDB_API_OPTION
        );
        const data = await res.json();
        setCategoryData(category, data.results, data.page, data.total_pages);
      } catch (err) {
        console.error(`Error fetching ${category}:`, err);
      } finally {
        setLoading(category, false);
      }
    };

    fetchMovies();
  }, [category, page, setCategoryData, setLoading]);
};
