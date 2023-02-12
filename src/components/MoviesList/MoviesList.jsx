import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies, state }) => {
  // console.log(state);
  // const location = useLocation();
  // console.log(location.state);

  const elements = movies.map(({ id, title }) => (
    <Link key={id} to={`/movies/${id}`} state={state}>
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
