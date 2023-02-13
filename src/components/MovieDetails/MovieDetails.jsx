import PropTypes from 'prop-types';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import SingleMovie from 'components/SingleMovie';

import { getMovieDetails } from 'services/movie-api';

const MovieDetails = ({ movieId }) => {
  const [movieData, setMovieData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from;

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
      <button type="button" onClick={() => navigate(from)}>
        &#9668; Go back
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      <SingleMovie data={movieData} from={from} />
      <Outlet />
    </>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
