import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import EmptyPoster from 'components/EmptyPoster';
import css from './cast.module.css';

import { getMovieCast } from 'services/movie-api';

const Cast = ({ movieId }) => {
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

  const elements = castData.map(({ id, profile_path, name, character }) => (
    <li key={id} className={css.item}>
      {profile_path ? (
        <img
          className={css.poster}
          src={`https://www.themoviedb.org/t/p/w276_and_h350_face${profile_path}`}
          alt="An actor"
        />
      ) : (
        <EmptyPoster className={css.empty} />
      )}
      <div>
        <p>{name}</p>
        <p>Character: {character}</p>
      </div>
    </li>
  ));

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(castData.length) ? (
        <ul>{elements}</ul>
      ) : (
        `We don't have cast for this movie.`
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
