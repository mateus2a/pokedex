import React from 'react';

export const Card = (props) => (
<div>
  <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`}>
    <img alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${props.pokemon.name}.jpg`}/>
    <h2>{props.pokemon.name[0].toUpperCase() + props.pokemon.name.slice(1)}</h2>
  </a>
</div>
);
