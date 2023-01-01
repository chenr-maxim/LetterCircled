const express = require('express');
const axios = require('axios');
const router = express.Router();
const { tmdb_api_key } =  require('../../config/keys');
const Movie = require('../models/Movie');
const User = require('../models/User');
const mongoose = require('mongoose');

router.get('/trending', async(req, res) => {
  await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdb_api_key}`)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch((err) => {console.log(err)});
})

router.post('/user/watched', async(req, res) => {
  const movieMetaData = {
    title: req.body.movie.title,
    overview: req.body.movie.overview,
    poster_path: req.body.movie.poster_path,
    original_title: req.body.movie.original_title,
    original_language: req.body.movie.original_language,
    id: req.body.movie.id,
    release_date: req.body.movie.release_date,
    genre_ids: req.body.movie.genres
  }

  const watchedMovie = {
    'movie_meta_data': movieMetaData,
    'rating': req.body.rating
  }

  try {
    const user = await User.findOneAndUpdate(
      {_id: req.body.id},
      { $push: { watched_movies_list: watchedMovie }});
    res.status(200).json({
      success: 'true',
      user: user._id,
      movie: watchedMovie
    })
  } catch (err) {
    res.status(400).json(err);
    throw err;
  }
})

router.post('/user/liked', async(req, res) => {
  const likedMovie = {
    title: req.body.title,
    overview: req.body.overview,
    poster_path: req.body.poster_path,
    original_title: req.body.original_title,
    original_language: req.body.original_language,
    id: req.body.id,
    release_date: req.body.release_date,
    genre_ids: req.body.genres
  }

  await User.findOne({_id: req.body.id})
  .then((user) => {
    user.liked_movies.addToSet(likedMovie);
    user.save();
    return res.status(200).json({
      success: 'true',
      user: user
    })
  })
  .catch((err) => {
    console.log(err);
    res.status(400).json(err);
  })
})

router.get('/config', async(req, res) => {
  await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${tmdb_api_key}`)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch(err => console.log(err))
})

module.exports = router;