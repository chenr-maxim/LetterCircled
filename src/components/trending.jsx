import React, { useEffect, useState } from 'react';
import * as API from '../util/api';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
     const { data } = await API.getTrending();
     setTrendingMovies(data.results);
    }
    
    fetchMovies();
  }, [])

  console.log(trendingMovies, 'trending movies');

  const trendingMoviesList = trendingMovies && trendingMovies.map((movie) => {
    return (
      <div className="trending_movie_card">
        {movie.title}
      </div>
    )
  })

  return (
    <div className="trending_movies_container">
      <h3> Trending Movies </h3>
      {trendingMoviesList}
    </div>
  );
};

export default Trending;