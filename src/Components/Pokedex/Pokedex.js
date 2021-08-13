import React from "react";
import "../../pokedex.scss";

// Import Components
import PokemonViewer from "../Viewer/PokemonViewer";
import ConfigPanel from "../ConfigPanel/ConfigPanel";
import NavigationPanel from "../Navigation/NavigationPanel";

function Pokedex() {
  return (
    <div className="pokedex-container">
      <div className="left-panel">
        <div className="left-top-panel"></div>
        <PokemonViewer />
        <ConfigPanel />
      </div>
      <div className="middle-axel"></div>
      <div className="right-panel">
        <NavigationPanel />
      </div>
    </div>
  );
}

export default Pokedex;
