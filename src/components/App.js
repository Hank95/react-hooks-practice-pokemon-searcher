import React from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const API = "http://localhost:3001/pokemon";
  return (
    <div className="App">
      <PokemonPage API={API} />
    </div>
  );
}

export default App;
