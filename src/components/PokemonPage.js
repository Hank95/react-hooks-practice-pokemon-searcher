import React, { useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({ API }) {
  const [pokemon, setPokemon] = useState([]);

  const [searchContent, setSearchContent] = useState("");

  const handleChange = (e) => {
    setSearchContent(e.target.value);
  };

  let itemsToDisplay = pokemon.filter((item) => {
    if (searchContent.length > 0) {
      return item.name.toLowerCase().includes(searchContent.toLowerCase());
    } else return true;
  });
  console.log(searchContent);

  useState(() => {
    fetch(API)
      .then((res) => res.json())
      .then((json) => setPokemon(json));
  });

  const handleSubmit = (formData) => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        hp: parseInt(formData.hp),
        sprites: {
          front: formData.frontUrl,
          back: formData.backUrl,
        },
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setPokemon([...pokemon, json]);
      });
  };
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit} />
      <br />
      <Search searchContent={searchContent} handleChange={handleChange} />
      <br />
      <PokemonCollection pokemon={itemsToDisplay} />
    </Container>
  );
}

export default PokemonPage;
