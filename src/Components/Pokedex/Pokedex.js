import React from "react";
import "../../pokedex.scss";

// Import Components
import PokemonViewer from "../Viewer/PokemonViewer";
import ConfigPanel from "../ConfigPanel/ConfigPanel";
import NavigationPanel from "../Navigation/NavigationPanel";

// Import Hooks
import usePokedex from "../../usePokedex";

function Pokedex() {
  const {
    filteredPokemon,
    searchInput,
    setSearchInput,
    page,
    setPage,
    handlePokemonSelect,
    selectedPokemon,
    pokemonLoading,
  } = usePokedex();
  return (
    <div className="pokedex-container">
      <div className="left-panel">
        <div className="left-top-panel"></div>
        <PokemonViewer
          selectedPokemon={selectedPokemon}
          pokemonLoading={pokemonLoading}
        />
        <ConfigPanel />
      </div>
      <div className="middle-axel"></div>
      <div className="right-panel">
        {filteredPokemon.length > 0 && (
          <NavigationPanel
            filteredPokemon={filteredPokemon}
            handlePokemonSelect={handlePokemonSelect}
            page={page}
            setPage={setPage}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        )}
      </div>
    </div>
  );
}

export default Pokedex;
