import React, { useState } from "react";

const FavList = ({ movie }) => {
  const [isInWatchlist, setIsInWatchlist] = useState(false);
  const [isInFavorites, setIsInFavorites] = useState(false);

  const addToWatchlist = () => {
    setIsInWatchlist(true);
    // Add movie to watchlist in state or database
  };

  const addToFavorites = () => {
    setIsInFavorites(true);
    // Add movie to favorites in state or database
  };

  const removeFromWatchlist = () => {
    setIsInWatchlist(false);
    // Remove movie from watchlist in state or database
  };

  const removeFromFavorites = () => {
    setIsInFavorites(false);
    // Remove movie from favorites in state or database
  };

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      {isInWatchlist ? (
        <button onClick={removeFromWatchlist}>Remove from Watchlist</button>
      ) : (
        <button onClick={addToWatchlist}>Add to Watchlist</button>
      )}
      {isInFavorites ? (
        <button onClick={removeFromFavorites}>Remove from Favorites</button>
      ) : (
        <button onClick={addToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default FavList;
