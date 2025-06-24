import { useMovieStore } from "../stores/movieStore";
import type { MovieCategory } from "../stores/movieStore";
import MovieCard from "./MovieCard";
import ShimmerMovieCard from "../shimmer/ShimmerMovieCard";
import type { Movie } from "../types/movie";

interface Props {
  movies: Movie[];
  category: MovieCategory;
}

const MovieGrid: React.FC<Props> = ({ movies, category }) => {
  const loading = useMovieStore((state) => state.categories[category].loading);

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {loading
        ? Array(12)
            .fill(0)
            .map((_, i) => <ShimmerMovieCard key={i} />)
        : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
};

export default MovieGrid;
