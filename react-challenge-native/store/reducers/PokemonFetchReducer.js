import { FETCH_MORE } from '../actionTypes'

const initialState = {
    next: 'https://pokeapi.co/api/v2/pokemon?limit=16&offset=0',
    data: [],
    loading: false
}

export default function PokemonReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return {
                ...state,
                loading: true
            }
        case FETCH_MORE:
            // console.log(['ayam', ...action.pokemons], 'ini actasdasdasdastt');
            return {
                ...state,
                next: action.nextPage,
                data: state.data.concat(action.pokemons),
                loading: false
            }
        default:
            return state
    }
}