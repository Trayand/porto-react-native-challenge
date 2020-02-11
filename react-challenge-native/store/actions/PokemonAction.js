import {
    FETCH_MORE,
    FETCH_TYPE
} from '../actionTypes'

export const AddPokemon = page => (dispatch, getState) => {

    fetch(page)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            // console.log(myJson.results, 'ini data');
            // console.log(pokemons, 'ini user');
            dispatch({
                type: FETCH_MORE,
                pokemons: myJson.results,
                nextPage: myJson.next
            })
        })
        .catch(err => console.log(err))

}

export const FetchType = poke_type => (dispatch, getState) => {
    dispatch({
        type: FETCH_TYPE,
        pokemons: poke_type
    })
}