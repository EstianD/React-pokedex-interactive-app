import React from "react";

function PokemonViewer({ selectedPokemon, pokemonLoading }) {
  console.log("pokemon: ", selectedPokemon);

  return (
    <div className="pokemon-view-panel">
      {pokemonLoading && <span>Loading...</span>}
      {Object.keys(selectedPokemon).length > 0 && <div></div>}
    </div>
  );
}

export default PokemonViewer;
