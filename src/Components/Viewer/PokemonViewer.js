import React from "react";
import { elementColors } from "../../element-colors";
import ElementType from "./ElementType";

function PokemonViewer({
  selectedPokemon,
  pokemonLoading,
  handlePokemonSelect,
}) {
  console.log("pokemon: ", selectedPokemon);
  console.log("colors: ", elementColors["fire"]);

  const renderPokemonName = () => {
    const pokemonName =
      selectedPokemon.name.substring(0, 1).toUpperCase() +
      selectedPokemon.name.substring(1);
    return `#${selectedPokemon.id} ${pokemonName}`;
  };

  const renderBackgroundColor = () => {
    if (Object.keys(selectedPokemon).length > 0) {
      return `#${elementColors[selectedPokemon.types[0].type.name]}`;
    }
    return "#fff";
  };

  return (
    <div
      className="pokemon-view-panel"
      style={{
        backgroundColor: renderBackgroundColor(),
      }}
    >
      {pokemonLoading && <span>Loading...</span>}
      {Object.keys(selectedPokemon).length > 0 && (
        <div>
          <div className="pokemon-model-container">
            <h4>{renderPokemonName()}</h4>
            <img
              src={selectedPokemon["sprites"]["front_default"]}
              className="pokemon-img"
              alt="pokemon"
            />
            <div className="pokemon-types-container">
              {selectedPokemon.types.map((type) => (
                <ElementType name={type["type"]["name"]} />
              ))}
            </div>
          </div>

          <div className="pokemon-stats-container">
            <h4>Stats</h4>
            <table className="pokemon-stats-table">
              <tbody>
                {selectedPokemon.stats.map((stat) => (
                  <tr>
                    <td>{stat.stat.name}</td>
                    <td>{stat.base_stat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pokemon-viewer-pagination-container">
              {selectedPokemon.id !== 1 && (
                <button
                  onClick={() => handlePokemonSelect(selectedPokemon.id - 1)}
                >
                  Previous
                </button>
              )}

              <button
                onClick={() => handlePokemonSelect(selectedPokemon.id + 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonViewer;
