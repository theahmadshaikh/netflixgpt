import { useMovieStore } from "../stores/movieStore";
import { useFetchMovies } from "../hooks/useFetchMovies";
import MovieGrid from "../components/MovieGrid";
import type { MovieCategory } from "../stores/movieStore";
import ShimmerMovieCard from "../shimmer/ShimmerMovieCard";
const Browse = () => {
  const category:MovieCategory = "now_playing";

  const { movies, loading, page, totalPages } = useMovieStore(
    (state) => state.categories[category]
  );

  const setPage = useMovieStore((state) => state.setPage);

  useFetchMovies(category, page);

  const handleNext = () => {
    if (page < totalPages) setPage(category, page + 1);
  };

  const handlePrevious = () => {
    if (page > 1) setPage(category, page - 1);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 pt-24">
      <h1 className="text-4xl font-bold py-4">Now Playing</h1>

      {loading ? (
        <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <ShimmerMovieCard key={i} />
            ))}
        </div>
      ) : (
        <MovieGrid movies={movies} category={category}/>
      )}

      <div className="flex justify-center gap-4 p-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Browse;
