import { useParams } from 'react-router-dom';

import Reviews from 'components/Reviews';

const ReviewsPage = () => {
  const { movieId } = useParams();

  return <Reviews movieId={movieId} />;
};

export default ReviewsPage;
