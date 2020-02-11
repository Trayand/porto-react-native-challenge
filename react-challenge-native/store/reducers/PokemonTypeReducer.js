import { FETCH_TYPE } from '../actionTypes'

const initialState = []

export default function PokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TYPE:
            return action.pokemons
        default:
            return state
    }
}