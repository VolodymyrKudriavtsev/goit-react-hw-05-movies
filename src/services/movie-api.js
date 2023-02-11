import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '3093f90428db537aee0c54ac8ab57737',
  },
});

export const getTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day?');
  return data;
};

export const getFoundMovies = async query => {
  const { data } = await instance.get('/search/movie?', { params: { query } });
  return data;
};

export const getMovieDetails = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}?`);
  return data;
};

export const getMovieCast = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/credits?`);
  return data;
};

export const getMovieReviews = async movieId => {
  const { data } = await instance.get(`/movie/${movieId}/reviews?`);
  return data;
};
