import MovieCard from "./MovieCard";
import ShimmerMovieCard from "../shimmer/ShimmerMovieCard";
import { useMovieStore, type MovieCategory } from "../stores/movieStore";
import { useFetchMovies } from "../hooks/useFetchMovies";

interface Props {
  category: MovieCategory;
  title: string;
}

const MovieRow: React.FC<Props> = ({ category, title }) => {
  const { movies, loading } = useMovieStore((state) => state.categories[category]);
  console.log("Movies in category:", category, movies);
  useFetchMovies(category, 1);
  if (!movies || movies.length === 0) {
    return;
  }
  return (
    <section className="px-4 sm:px-6 md:px-10">
      <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
        {title}
      </h2>
      <div className="flex gap-4 overflow-x-auto pb-0 scrollbar-hide snap-x snap-mandatory">
        {loading
          ? Array(10)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="snap-start min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[240px] xl:min-w-[260px]">
                <ShimmerMovieCard />
              </div>
            ))
          : movies.map((movie) => (
            <div
              key={movie.id}
              className="snap-start min-w-[160px] sm:min-w-[180px] md:min-w-[200px] lg:min-w-[240px] xl:min-w-[260px]"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
      </div>


    </section>
  );
};

export default MovieRow;
