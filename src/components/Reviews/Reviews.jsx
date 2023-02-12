import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'services/movie-api';

const Reviews = ({ movieId }) => {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (movieId) {
      const fetchMoviReviews = async () => {
        try {
          setLoading(true);
          const { results } = await getMovieReviews(movieId);
          setReviewsData(results);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchMoviReviews();
    }
  }, [movieId]);

  const elements = reviewsData.map(({ id, author, content }) => (
    <li key={id}>
      <b>{author}</b>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(reviewsData.length) ? (
        <ul>{elements}</ul>
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
