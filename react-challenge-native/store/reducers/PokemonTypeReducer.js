import { FETCH_TYPE } from '../actionTypes'

const initialState = {
    TypeList: []
}

export default function PokemonReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TYPE:
            return {
                ...state,
                TypeList: action.TypeList
            }
        default:
            return state
    }
}