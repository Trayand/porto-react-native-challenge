import {
    FETCH_MORE,
    FETCH_TYPE
} from '../actionTypes'

export const AddPokemon = pokemons_added => {
    return {
        type: FETCH_MORE,
        pokemons: pokemons_added
    }
}

export const FetchType = poke_type => {
    return {
        type: FETCH_TYPE,
        pokemons: poke_type
    }
}