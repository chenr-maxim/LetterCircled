import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const getTrendingMovies = () => api.get(`/movies/trending`);
export const getMoviePoster = (posterPath) => api.get(`/movies/poster/${posterPath}`)