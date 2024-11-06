//components/SearchBar.jsx//

//Provides an input field for city search. Utilizes React.memo for performance optimization.//
//Includes a form that triggers the onSearch function on submit, allowing the user to search for a city.//

import React, { useState } from 'react'

const SearchBar = React.memo(({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button type="submit">Search</button>
    </form>
  );
});

export default SearchBar;
