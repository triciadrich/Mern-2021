import React, { useEffect, useState } from "react";
import axios from 'axios';

const Poke =(props) =>{
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {setPokemon(response.data)})
  },[]
  );

  return (
    <div>
      
      {pokemon.length > 0 && pokemon.map((pokemon, index)=>{
        return (<div key={index}> {pokemon.name}</div>)
      }
      )}
      
      
    </div>
  )
}

export default Poke;