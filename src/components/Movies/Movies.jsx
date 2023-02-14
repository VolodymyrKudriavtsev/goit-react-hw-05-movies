import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

import { getFoundMovies } from 'services/movie-api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  // const [query, setQuery] = useState('');
  const [foundMovies, setFounMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFormSubmit = search => {
    if (search === query) return;
    setSearchParams({ query: search });
    // setQuery(search);
    setFounMovies([]);
    setError(null);
  };

  useEffect(() => {
    if (query) {
      const fetchFoundMovies = async () => {
        try {
          setLoading(true);
          const { results } = await getFoundMovies(query);
          setFounMovies([...results]);
        } catch (error) {
          setError(error);
        } finally {
          setLoading(false);
        }
      };
      fetchFoundMovies();
    }
  }, [query]);

  return (
    <>
      <SearchForm onSubmit={onFormSubmit} initialValue={query} />
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(foundMovies.length) && <MoviesList movies={foundMovies} />}
    </>
  );
};

export default Movies;
