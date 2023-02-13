import { Link } from 'react-router-dom';

import EmptyPoster from 'components/EmptyPoster';

import css from './single-movie.module.css';

const SingleMovie = ({ data, from }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = data;

  const releaseYear = release_date?.slice(0, 4);
  const userScore = (vote_average * 10).toFixed();
  const genresNames = genres?.map(genre => genre.name).join(' ');

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
          {Boolean(genres?.length) && (
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
          <li>
            <Link to="cast" state={{ from }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" state={{ from }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleMovie;
