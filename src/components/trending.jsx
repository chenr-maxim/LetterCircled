import React, { useEffect, useState } from 'react';
import * as API from '../util/api';
import MovieCard from './movie_card';
import '../css/trending.scss';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
     const { data } = await API.getTrendingMovies();
     setTrendingMovies(data.results);
    }

    const fetchPosters = async () => {
      const { data } = await API.getMoviePoster();
    }
    
    fetchMovies();
  }, [])

  console.log(trendingMovies, 'trending movies');

  const trendingMoviesList = trendingMovies && trendingMovies.map((movie) => {
    return (
      <MovieCard key={movie.id} movie={movie}/>
    )
  })

  return (
    <div className="trending_container">
      <div> Trending Movies </div>
      <br />
      <div className="trending_movies_container">
        {trendingMoviesList}
      </div>
    </div>
  );
};

export default Trending;