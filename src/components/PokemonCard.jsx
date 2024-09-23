import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../service/pokemonService";
import { useSelector, useDispatch } from "react-redux";
// import { addToTeam, removeFromTeam } from "../features/team/teamSlice";



const PokemonCard = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const dispatch = useDispatch();
  const team = useSelector(state => state.team.value);

  useEffect(() => {
    const getPokemonDetail = async () => {
      try {

        const data = await fetchPokemonDetail(name);
        console.log(data)
        setPokemon(data);
      } catch (error) {
        console.error("Error en getPokemonDetail", error);
      }
    };
    getPokemonDetail();
  }, [name]);

  const isInTeam = team.some(p => p === name);

  // const handleToggleTeam = () => {
  //   if (isInTeam) {
  //     dispatch(removeFromTeam(name));
  //   } else {
  //     dispatch(addToTeam(name));
  //   }
  // };

  


  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    
    <>
    <h1>{pokemon.name}</h1>
     <img src={pokemon.sprites.front_default} alt={`imagen de ${pokemon.name}`} />
    <p>Altura: {pokemon.height}</p>
    <p>Peso: {pokemon.weight}</p>
    {console.log(pokemon)}
    </>
  );
};

export default PokemonCard;
