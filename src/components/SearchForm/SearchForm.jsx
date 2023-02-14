import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit, initialValue }) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(initialValue);
  }, [initialValue]);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={search}
        onChange={handleChange}
        name="search"
        type="text"
        autoComplete="on"
        autoFocus
        placeholder="Search movies"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};

SearchForm.defaultProps = {
  initialValue: '',
};

SearchForm.propTypes = {
  initialValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
