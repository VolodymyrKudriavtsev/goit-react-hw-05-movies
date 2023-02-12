import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
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

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
