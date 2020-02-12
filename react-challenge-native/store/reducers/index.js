import { combineReducers } from 'redux'

import PokemonTypeReducer from './PokemonTypeReducer'
import PokemonFetchReducer from './PokemonFetchReducer'

export default combineReducers({
  fetched: PokemonFetchReducer,
  TypeStore: PokemonTypeReducer
})