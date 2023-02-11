import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Cast from 'components/Cast';

import { getMovieCast } from 'services/movie-api';

const CastPage = () => {
  const { movieId } = useParams();

  const [castData, setCastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const fetchMoviCast = async () => {
        try {
          setLoading(true);
          const { cast } = await getMovieCast(movieId);
          setCastData(cast);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchMoviCast();
    }
  }, [movieId]);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(castData.length) ? (
        <Cast data={castData} />
      ) : (
        `We don't have cast for this movie.`
      )}
    </>
  );
};

export default CastPage;
