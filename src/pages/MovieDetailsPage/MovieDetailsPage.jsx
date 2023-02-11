import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MovieInfo from 'components/MovieInfo';

import { getMovieDetails } from 'services/movie-api';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const fetchMovies = async () => {
        try {
          setLoading(true);
          const data = await getMovieDetails(movieId);
          console.log('data:', data);
          setMovieData(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchMovies();
    }
  }, [movieId]);

  return (
    <>
      <button type="button">&#9668; Go back</button>
      {loading && <p>Loading...</p>}
      {error ? (
        <p>Sorry! {error.message}</p>
      ) : (
        <MovieInfo movieData={movieData} />
      )}
    </>
  );
};

export default MovieDetailsPage;
