import { useEffect, useState } from 'react';

import MoviesList from 'components/MoviesList';

import { getTrendMovies } from 'services/movie-api';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getTrendMovies();
        setTrendMovies([...results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(trendMovies.length) && <MoviesList movies={trendMovies} />}
    </>
  );
};

export default Home;
