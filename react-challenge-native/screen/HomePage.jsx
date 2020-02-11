import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import pokeball from '../assets/pokeball.png'
import HomeCard from "../components/HomeCard";
import { useSelector, useDispatch } from 'react-redux';
import { AddPokemon } from '../store/actions/PokemonAction';

export default function HomePage(props) {

    // const [nextPage, setNextPage] = useState('')
    const pokemons = useSelector(store => store.fetched)
    const dispatch = useDispatch()
    const [totalPokemon, setTotalPokemon] = useState(0)
    const [gambarPokemon, setGambarPokemon] = useState(pokeball)
    const [namaPokemon, setNamaPokemon] = useState('')
    const [whichButton, setWhichButton] = useState('')


    // console.log(pokemons.loading, 'LOADING')

    useEffect(() => {
        dispatch(AddPokemon(pokemons.next))
    }, [])

    // console.log(pokemons.data.slice(-5).map(p => p.name), pokemons.data.length)

    useEffect(() => {
        setTotalPokemon(pokemons.next.split('?')[1].split('&')[0].split('=')[1])
    }, [pokemons])

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'white' }} >Poke-PrivateDex</Text>
            </View>
            <View style={{ flex: 3, backgroundColor: '#190061', width: '100%', alignItems: 'center' }} >
                <Text style={{ color: 'white', fontSize: 20, marginBottom: -10 }}>{namaPokemon}</Text>
                <Image
                    fadeDuration={1000}
                    source={gambarPokemon}
                    style={{ width: 180, height: 180, marginTop: 5 }}
                />
            </View>
            <View style={{ flex: 4, width: "100%" }}>
                <FlatList
                    horizontal={false}
                    // progressViewOffset={10}
                    numColumns={2}
                    style={{ width: '100%', backgroundColor: '#0c0032', paddingVertical: 10 }}
                    data={pokemons.data}
                    renderItem={({ item }) => <HomeCard
                        setNamaPokemon={setNamaPokemon}
                        setGambarPokemon={setGambarPokemon}
                        pokemon={{ item }}
                        whichButton={whichButton}
                        setWhichButton={setWhichButton}
                    />}
                    keyExtractor={(item, i) => i.toString()}
                    onEndReachedThreshold={0.8}
                    onEndReached={({ distanceFromEnd }) => {
                        // console.log('mentok');
                        if (!pokemons.loading && totalPokemon < 964) {
                            // console.log(totalPokemon, 'ini totalnya lae');
                            dispatch(AddPokemon(pokemons.next))
                        }
                    }}// 
                />
            </View>
            {
                !pokemons.loading
                    ? <View></View>
                    : <View style={{ width: "100%", backgroundColor: '#0c0032', zIndex: 2, position: 'absolute', bottom: 0 }}>
                        <Text style={{ color: 'white' }}>Load...</Text>
                    </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    topDiv: {
        flex: 1,
        width: '100%',
        height: '10%',
        backgroundColor: '#0742e6',
        opacity: 0.7, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    }
});


// const colorPallate = ['#0c0032', '#190061', '#240090', '#3500d3', '#282828']