import React, { useState } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = (props) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.onSearch(query);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search:
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default SearchForm;
