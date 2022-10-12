import React from 'react';
import { FaEye, FaHeart } from 'react-icons/fa';
import * as API from '../util/api';

import '../css/movie_card.scss';

const MovieCard = ({movie}) => {
  const {
    title,
    overview,
    poster_path,
    original_title,
    original_language,
    id,
    release_date,
    genre_ids
  } = movie;

  const setUserWatched = async () => {
    const movie = {
      title,
      overview,
      poster_path,
      original_title,
      original_language,
      id,
      release_date,
      genre_ids
    }
    await API.setUserWatchedMovie(movie)
    .then(() => {
      console.log('set user watched movie')
    })
    .catch((err) => console.log(err));
  }

  const setUserLiked = async () => {
    const movie = {
      title,
      overview,
      poster_path,
      original_title,
      original_language,
      id,
      release_date,
      genre_ids
    }
    await API.setUserLikedMovie(movie)
    .then(() => {
      console.log('set user watched movie')
    })
    .catch((err) => console.log(err));
  }

  const moviePoster = poster_path && `https://image.tmdb.org/t/p/w185/${poster_path}`
  return (
    <div className="movie_card_container">
      <img src={`${moviePoster}`} />
      <div className="movie_action_bar">
        <FaEye onClick={setUserWatched} className={"fa_icon fa_watched_icon"} />
        <FaHeart className={"fa_icon fa_favorited_icon"} />
      </div>
    </div>
  );
};

export default MovieCard;