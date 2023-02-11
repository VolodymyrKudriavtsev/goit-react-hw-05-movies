import PropTypes from 'prop-types';
import { Link, Outlet } from 'react-router-dom';

import EmptyPoster from 'components/EmptyPoster';

import css from './movie-info.module.css';

const MovieInfo = ({ data }) => {
  const {
    poster_path,
    original_title,
    release_date = '',
    vote_average,
    overview,
    genres = [],
  } = data;

  const releaseYear = release_date.slice(0, 4);
  const userScore = (vote_average * 10).toFixed();
  const genresNames = genres.map(genre => genre.name).join(' ');

  return (
    <>
      <div className={css.info}>
        {poster_path ? (
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
            alt="Poster"
          />
        ) : (
          <EmptyPoster className={css.empty} />
        )}

        <div>
          <h1>
            {original_title} {release_date && `(${releaseYear})`}
          </h1>
          <p>User Score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          {Boolean(genres.length) && (
            <>
              <h3>Genres</h3>
              <p>{genresNames}</p>
            </>
          )}
        </div>
      </div>
      <div className={css.more_info}>
        <h4>Additional informaiton</h4>
        <ul>
          <Link to="cast">
            <li>Cast</li>
          </Link>
          <Link to="reviews">
            <li>Reviews</li>
          </Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

MovieInfo.propTypes = {
  data: PropTypes.shape({
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
    original_title: PropTypes.string,
    overview: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
  }),
};

export default MovieInfo;
