import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Reviews from 'components/Reviews';

import { getMovieReviews } from 'services/movie-api';

const ReviewsPage = () => {
  const { movieId } = useParams();

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

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(reviewsData.length) ? (
        <Reviews data={reviewsData} />
      ) : (
        `We don't have any reviews for this movie.`
      )}
    </>
  );
};

export default ReviewsPage;
