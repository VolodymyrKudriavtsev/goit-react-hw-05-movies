import { useParams } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  return <MovieDetails movieId={movieId} />;
};

export default MovieDetailsPage;
