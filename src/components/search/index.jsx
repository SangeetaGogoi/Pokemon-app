import React from 'react';

function Search({ query, setQuery }) {

  const handleButton = (e) => {
    setQuery(e.target.value);
  }

  return (
    <section className='search-page'>
      <input
        className='search-bar'
        placeholder='Search pokemon'
        value={query}
        onChange={handleButton}
      />
    </section>
  )
}

export default Search