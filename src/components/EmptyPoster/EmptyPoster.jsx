import PropTypes from 'prop-types';
const EmrtyPoster = ({ className }) => {
  return <div className={className}>Sorry, there is no poster</div>;
};

EmrtyPoster.propTypes = {
  className: PropTypes.string,
};

export default EmrtyPoster;
