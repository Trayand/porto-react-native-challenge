import {
    FETCH_MORE,
    FETCH_TYPE
} from '../actionTypes'

export const AddPokemon = page => (dispatch, getState) => {
    dispatch({
        type: 'FETCH_REQUEST'
    })
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

export const FetchType = () => (dispatch, getState) => {
    // console.log('jalan');
    fetch(`https://pokeapi.co/api/v2/type`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            // setTypeList(myJson.results)
            console.log(myJson.results.length);
            dispatch({
                type: FETCH_TYPE,
                TypeList: myJson.results,
            })
        })
        .catch(err => console.log(err))
}