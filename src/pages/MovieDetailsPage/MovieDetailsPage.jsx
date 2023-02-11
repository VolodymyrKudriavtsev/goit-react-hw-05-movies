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
      const fetchMovieDetails = async () => {
        try {
          setLoading(true);
          const data = await getMovieDetails(movieId);
          setMovieData(data);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchMovieDetails();
    }
  }, [movieId]);

  return (
    <>
      <button type="button">&#9668; Go back</button>
      {loading && <p>Loading...</p>}
      {error ? <p>Sorry! {error.message}</p> : <MovieInfo data={movieData} />}
    </>
  );
};

export default MovieDetailsPage;
