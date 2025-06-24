const ShimmerMovieCard = () => {
  return (
    <div className="w-full bg-gray-900 rounded overflow-hidden shadow animate-pulse">
      {/* Simulated image */}
      <div className="h-[250px] bg-gray-800 w-full" />

      {/* Simulated text lines */}
      <div className="p-2 space-y-2">
        <div className="h-4 bg-gray-700 rounded w-3/4" />
        <div className="h-3 bg-gray-700 rounded w-1/2" />
      </div>
    </div>
  );
};

export default ShimmerMovieCard;
