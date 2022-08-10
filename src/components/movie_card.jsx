import React from 'react';
import '../css/movie_card.scss';

const MovieCard = ({movie}) => {
  const moviePoster = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
  return (
    <div className="movie_card_container">
      <img src={`${moviePoster}`} />
    </div>
  );
};

export default MovieCard;