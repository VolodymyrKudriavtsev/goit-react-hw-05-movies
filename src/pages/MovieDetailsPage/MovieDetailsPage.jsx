import { useParams, useNavigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  // ! const navigate = useNavigate();  ???

  return <MovieDetails movieId={movieId} />;
};

export default MovieDetailsPage;
