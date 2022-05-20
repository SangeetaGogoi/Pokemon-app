import React, { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/cards';
import Header from './components/header';
import Search from './components/search';
import axios from 'axios'

function App() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("")

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
      .then((response) => {
        setData(response.data.results);
      })
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search query={query} setQuery={setQuery} />
      <Cards data={data} query={query} />
    </div>
  );
}

export default App;
