import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [click, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!click);
  };
  return (
    <Card>
      <div>
        <div className="image" onClick={handleClick}>
          <img
            src={click ? pokemon.sprites.back : pokemon.sprites.front}
            alt="oh no!"
          />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
