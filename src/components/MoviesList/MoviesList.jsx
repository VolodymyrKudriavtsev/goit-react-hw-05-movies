import PropTypes from 'prop-types';
const MoviesList = ({ movies }) => {
  const elements = movies.map(({ id, title }) => <li key={id}>{title}</li>);

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
