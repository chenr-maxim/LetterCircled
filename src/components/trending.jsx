import React, { useEffect, useState, useRef } from 'react';
import * as API from '../util/api';
import Slider from 'react-slick';
import MovieCard from './movie_card';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

import "slick-carousel/slick/slick.css";
import '../css/trending.scss';
import '../css/movie_card.scss';

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const sliderRef = useRef(); 

  const PrevArrow = (props) => {
    const { classname } = props;
    return (
      <div
        className={classname}
        onClick={() => sliderRef.current.slickPrev()}
      >
        <GrFormPrevious color={"white"} size={35}/>
      </div>
    )
  }
  
  const NextArrow = (props) => {
    const { classname } = props;
    return (
      <div
        className={classname}
        onClick={() => sliderRef.current.slickNext()}
      >
        <GrFormNext size={35} color={'white'} />
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <NextArrow classname={'arrow next_arrow'}/>,
    prevArrow: <PrevArrow classname={'arrow prev_arrow'}/>
  }

  useEffect(() => {
    const fetchMovies = async () => {
     const { data } = await API.getTrendingMovies();
     setTrendingMovies(data.results);
    }
    fetchMovies();
  }, [])

  const trendingMoviesList = trendingMovies && trendingMovies.map((movie) => {
    // const moviePoster = `https://image.tmdb.org/t/p/w185/${movie.poster_path}`
    return (
      // <div className="movie_card_container">
      //   <img src={`${moviePoster}`} />
      // </div>
      <MovieCard movie={movie}/>
    );
  })

  return (
    <div className="trending_container">
      <div className="trending_text">
        What's Trending
      </div>
      <div className="slider_container">
        <Slider 
          {...settings}
          ref={sliderRef}
        >
          {trendingMoviesList}
        </Slider>
      </div>
    </div>
  );
};

export default Trending;