const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();
const { tmdb_api_key } =  require('../../config/keys');

router.get('/trending', async(req, res) => {
  await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdb_api_key}`)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch((err) => {console.log(err)});
})

// router.get('/poster/:posterPath', async(req, res) => {
//   const poster_path = req.params['posterPath'];
//   console.log(poster_path, 'poster path');
//   await axios.get(`https://image.tmdb.org/t/p/w500/${poster_path}`)
//   .then(response => {
//     return res.status(200).json(response.data);
//   })
//   .catch(err => console.log(err));
// })

router.get('/config', async(req, res) => {
  await axios.get(`https://api.themoviedb.org/3/configuration?api_key=${tmdb_api_key}`)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch(err => console.log(err))
})

module.exports = router;