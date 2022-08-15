import React from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import * as API from '../util/api';

import '../css/movie_card.scss';

const MovieCard = ({movie}) => {

  console.log(movie, 'movie');

  const moviePoster = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
  return (
    <div className="movie_card_container">
      <img src={`${moviePoster}`} />
      <div className="movie_action_bar">
        <FaEye className={"fa_icon fa_watched_icon"} />
        <FaHeart className={"fa_icon fa_favorited_icon"} />
      </div>
    </div>
  );
};

export default MovieCard;