import { useEffect, useState } from "react";
import { useHeroMovie } from "../hooks/useHeroMovie";
import { fetchTrailerKey } from "../utils/fetchTrailer";
import { FaPlay, FaInfoCircle } from "react-icons/fa";
const HeroBanner = () => {
  const { movie } = useHeroMovie();
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    if (movie) {
      fetchTrailerKey(movie.id).then(setTrailerKey);
    }
  }, [movie]);

  if (!movie) return null;

  return (
    <section className="relative w-full h-[70vh] min-h-[300px] max-h-[720px] overflow-hidden">
  {trailerKey ? (
    <iframe
  className="absolute top-0 left-0 w-[200%] h-[200%] -translate-x-1/4 -translate-y-1/4 object-cover pointer-events-none"
  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerKey}&modestbranding=1&showinfo=0&rel=0`}
  title="Movie Trailer"
  frameBorder="0"
  allow="autoplay; fullscreen"
  allowFullScreen
/>

  ) : (
    <img
      className="absolute top-0 left-0 w-full h-full object-cover"
      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      alt={movie.title}
    />
  )}

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />

  {/* Content */}
  <div className="absolute z-20 bottom-12 sm:bottom-20 left-4 sm:left-16 right-4 text-white">
    <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-xl">
      {movie.title}
    </h1>
    <p className="hidden sm:block text-sm sm:text-base max-w-xl mb-4 line-clamp-3 drop-shadow-md">
      {movie.overview}
    </p>
    <div className="flex gap-3">
      <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-opacity-90">
          <FaPlay />
      </button>
      <button className="bg-gray-700 bg-opacity-70 text-white px-6 py-2 rounded hover:bg-opacity-80">
        <FaInfoCircle/>
      </button>
    </div>
  </div>
</section>

  );
};

export default HeroBanner;
