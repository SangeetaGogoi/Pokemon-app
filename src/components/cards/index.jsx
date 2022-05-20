import React from 'react';

function Cards({ data, query }) {

  const getPokemonIdFromUrl = (pokemonURL) => {
    let tempArr = pokemonURL.split("/")
    let pokemonId = tempArr[tempArr.length - 2]
    return pokemonId
  }

  return (
    <main className="card-page">
      {
        data.filter(pokemon => {
          if (query === '') {
            return pokemon;
          } else if (pokemon.name.toLowerCase().includes(query.toLowerCase())) {
            return pokemon;
          }
        }).map((pokemon, index) => (
          <div className="card rounded overflow-hidden shadow-lg" key={index}>
            <img className="pokemon-images" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonIdFromUrl(pokemon.url)}.png`} alt="" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{pokemon.name}</div>
            </div>
          </div>
        ))
      }

    </main>
  )
}

export default Cards