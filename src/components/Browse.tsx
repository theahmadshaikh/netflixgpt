// src/pages/Browse.tsx
import { useFetchMovies } from "../hooks/useFetchMovies";
import HeroBanner from "../components/HeroBanner";
import MovieRow from "./MovieRow";
import type { MovieCategory } from "../stores/movieStore";

const categories: { category: MovieCategory; title: string }[] = [
  { category: "trending", title: "Trending Now" },
  { category: "now_playing", title: "Now Playing" },
  { category: "top_rated", title: "Top Rated" },
  { category: "upcoming", title: "Upcoming" },
];

const Browse = () => {
  // Preload trending movies for HeroBanner
  useFetchMovies("trending", 1);

  return (
    <div className="space-y-10 bg-black">
      <HeroBanner />
      <div className="-mt-20 sm:-mt-52 relative z-50">
      {categories.map(({ category, title }) => (
        <MovieRow key={category} category={category} title={title}  />
      ))}
    </div>
    </div>
  );
};

export default Browse;
