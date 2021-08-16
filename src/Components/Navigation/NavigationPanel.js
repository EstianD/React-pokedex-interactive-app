import React, { useEffect } from "react";
import useNavigation from "../../useNavigation";

import PokemonSelect from "./PokemonSelect";

const PER_PAGE = 20;

function calculateNumPage(arrayLength) {
  let numPages = 0;

  for (let p = arrayLength; p >= 20; p = p - 20) {
    numPages++;
  }
  // Check for any remainder after page loop
  if (arrayLength % 20 !== 0) {
    numPages++;
  }

  return numPages;
}

function NavigationPanel({
  filteredPokemon,
  handlePokemonSelect,
  page,
  setPage,
  searchInput,
  setSearchInput,
}) {
  console.log("filtered: ", filteredPokemon);
  console.log("page: ", page);

  return (
    <div className="navigation-panel">
      <div className="navigation-container">
        <div className="search-container">
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="pokemon-list">
          {filteredPokemon
            .slice((page - 1) * PER_PAGE, (page - 1) * PER_PAGE + 20)
            .map((pokemon) => {
              const id = pokemon.url.split("/")[6];
              const pokemonName =
                pokemon.name.substring(0, 1).toUpperCase() +
                pokemon.name.substring(1);

              return (
                <div
                  key={id}
                  className="pokemon-list-name"
                  onClick={() => handlePokemonSelect(id)}
                >{`${id} ${pokemonName}`}</div>
              );
            })}
        </div>
        {page > 1 && (
          <button onClick={() => setPage((prevPage) => prevPage - 1)}>
            {"<"}
          </button>
        )}
        {`${page}/${calculateNumPage(filteredPokemon.length)}`}
        {page < calculateNumPage(filteredPokemon.length) && (
          <button onClick={() => setPage((prevPage) => prevPage + 1)}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default NavigationPanel;
