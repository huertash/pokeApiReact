import React, {useEffect, useState} from "react"
import "../styles/PokemonList.css"
import { fetchPokemons } from "../service/pokemonService"
import { Link } from "react-router-dom"

const PokemonList = () =>{
    const [pokemons, setPokemons] = useState([])


    
    useEffect (()=>{
        const getPokemons = async () =>{
            const data = await fetchPokemons()
            setPokemons(data)
        }
        getPokemons()
    },[])

    return (
        <>
        <h2>Lista de Pokemons</h2>
        <ul className="pokemon-list">
            {pokemons.map((pokemon,index)=>(
                <li key={index} className="pokemon-list-item">
                    <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                </li>
            ))}
        </ul>
        {console.log(pokemons)}
        </>
    )
}

export default PokemonList