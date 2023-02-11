import PropTypes from 'prop-types';
import EmptyPoster from 'components/EmptyPoster';
import css from './cast.module.css';

const Cast = ({ data }) => {
  const elements = data.map(({ id, profile_path, name, character }) => (
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

  return <ul>{elements}</ul>;
};

Cast.defaultProps = {
  data: [],
};

Cast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
