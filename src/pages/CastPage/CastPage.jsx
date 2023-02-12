import { useParams } from 'react-router-dom';

import Cast from 'components/Cast';

const CastPage = () => {
  const { movieId } = useParams();

  return <Cast movieId={movieId} />;
};

export default CastPage;
