import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const elements = movies.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  ));

  return <ul>{elements}</ul>;
};

MoviesList.defaultProps = {
  movies: [],
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default MoviesList;
