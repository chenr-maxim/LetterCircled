import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api'
})

export const getTrendingMovies = () => api.get(`/movies/trending`);
// export const getMoviePoster = (posterPath) => api.get(`/movies/poster/${posterPath}`)
export const setUserWatchedMovie = (payload) => api.post(`/movies/user/watched`, payload);
export const setUserLikedMovie = (payload) => api.post(`/movies/user/liked`, payload);
export const getUserLikedMovies = () => api.get(`/movies/user/watched`);
export const getUserWatchedMovies = () => api.get(`/movies/user/liked`);