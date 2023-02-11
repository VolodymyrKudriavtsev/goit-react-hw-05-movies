import EmptyPoster from 'components/EmptyPoster';

import css from './movie-info.module.css';

const MovieInfo = ({ movieData }) => {
  const {
    poster_path,
    original_title,
    release_date = '',
    vote_average,
    overview,
    genres = [],
  } = movieData;

  const releaseYear = release_date.slice(0, 4);
  const userScore = (vote_average * 10).toFixed();
  const genresNames = genres.map(genre => genre.name).join(' ');

  return (
    <div>
      {poster_path ? (
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
          alt="Poster"
        />
      ) : (
        <EmptyPoster />
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
  );
};

export default MovieInfo;
