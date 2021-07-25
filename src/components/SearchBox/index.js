import React from 'react';

export const SearchBox = ({handleChange}) => (
       <input type="text" placeholder="Busque um pokémon..." onChange={handleChange}/>
);