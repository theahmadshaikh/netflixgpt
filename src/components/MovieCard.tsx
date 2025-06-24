import type { Movie } from "../types/movie";


const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div
      className="w-full bg-gray-900 rounded overflow-hidden text-white shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-2">
        <h3 className="text-sm font-semibold truncate">{movie.title}</h3>
        <p className="text-xs text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
};


export default MovieCard;
