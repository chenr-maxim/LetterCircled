const express = require('express');
const { default: axios } = require('axios');
const router = express.Router();
const { tmdb_api_key } =  require('../../config/keys');

router.get('/', async(req, res) => {
  console.log('hit route');
  await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${tmdb_api_key}`)
  .then(response => {
    return res.status(200).json(response.data);
  })
  .catch((err) => {console.log(err)});
})

module.exports = router;