import React, {useState , useEffect} from "react"
import { useParams } from "react-router-dom"
import { fetchPokemonDetail } from "../service/pokemonService"
import PokemonCard from "../components/PokemonCard";

const PokemonDetailPage = ()=>{
    const {name} = useParams()
    const [pokemon,setPokemon] = useState(null)

    useEffect (()=>{
        const getPokemonDetail = async ()=>{
            try {
                const data = await fetchPokemonDetail(name)
                setPokemon(data)
            } catch (error) {
                console.error("error en getPokemonDetail", error)
            }
        }
        getPokemonDetail()
    },[name])
    if (!pokemon){
        return <div>Cargando</div>
    }
    return(
    <PokemonCard
     pokemon={pokemon}
    //   onToggleTeam={handleToggleTeam}
    //   isInTeam={isInTeam}
    />
    );
}

export default PokemonDetailPage