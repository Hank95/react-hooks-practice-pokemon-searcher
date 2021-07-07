import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, handleChange }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemon.map((poke) => {
        return <PokemonCard key={poke.id} pokemon={poke} />;
      })}
    </Card.Group>
  );
}

export default PokemonCollection;
