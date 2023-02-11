import { useState, useEffect } from 'react';

import SearchForm from 'components/SearchForm';
import MoviesList from 'components/MoviesList';

import { getFoundMovies } from 'services/movie-api';

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [founMovies, setFounMovies] = useState([]); //!поменять на SearchParams??
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onFormSubmit = search => {
    if (search === query) return;
    setQuery(search);
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
      <SearchForm onSubmit={onFormSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>Sorry! {error.message}</p>}
      {Boolean(founMovies.length) && <MoviesList movies={founMovies} />}
      {}
    </>
  );
};

export default MoviesPage;
