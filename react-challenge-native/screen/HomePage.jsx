import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, TextInput, Animated } from 'react-native';
import pokeball from '../assets/pokeball.png'
import HomeCard from "../components/HomeCard";
import { useSelector, useDispatch } from 'react-redux';
import { AddPokemon } from '../store/actions/PokemonAction';

import { PanGestureHandler, State } from 'react-native-gesture-handler'
import notfound from '../assets/notfound.png'

export default function HomePage(props) {
    const [left] = useState(new Animated.Value(0))
    // const [nextPage, setNextPage] = useState('')
    const pokemons = useSelector(store => store.fetched)
    const dispatch = useDispatch()
    const [totalPokemon, setTotalPokemon] = useState(0)
    const [gambarPokemon, setGambarPokemon] = useState(pokeball)
    const [namaPokemon, setNamaPokemon] = useState('')
    const [whichButton, setWhichButton] = useState('')
    const [value, setChangeValue] = React.useState('');

    const handlePan = (event) => {
        left.setValue(event.nativeEvent.translationX)
        if (event.nativeEvent.translationX > 150) {
            console.log('sampai', event.nativeEvent.translationX);
        }
    }

    useEffect(() => {
        dispatch(AddPokemon(pokemons.next))
    }, [])


    useEffect(() => {
        setTotalPokemon(pokemons.next.split('?')[1].split('&')[0].split('=')[1])
    }, [pokemons])

    const onChangeValue = text => {
        setChangeValue(text)
    }
    const onHandleSearch = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
            .then(res => res.json())
            .then((myJson) => {
                setGambarPokemon({ uri: myJson.sprites.front_default });
                setNamaPokemon(value.toLowerCase())
            })
            .catch(err => {
                setNamaPokemon('There are no "' + value.toLowerCase() + '"')
                setGambarPokemon(notfound)
            })
        setChangeValue('')
    }

    return (

        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'white' }} >Poke-PrivateDex</Text>
                <TextInput
                    style={{
                        width: '80%',
                        height: 40,
                        color: 'white',
                        borderColor: 'black',
                        borderWidth: 1,
                        paddingLeft: 10,
                        paddingRight: 10,
                        borderRadius: 50

                    }}
                    onChangeText={text => onChangeValue(text)}
                    value={value}
                    onEndEditing={() => {
                        onHandleSearch()
                    }}
                />
            </View>
            <View style={{ flex: 3, backgroundColor: '#fff', width: '100%', alignItems: 'center' }} >
                <PanGestureHandler
                    onPanResponderTerminate={(e) => console.log(e.nativeEvent.translationX)}
                    onGestureEvent={handlePan}
                    onHandlerStateChange={({ nativeEvent }) => {
                        if (nativeEvent.state === State.END) {
                            left.setValue(0)
                        }
                    }}
                >
                    <Animated.View
                        style={[
                            styles.container,
                            { left }
                        ]}>
                        <Text style={{ color: 'black', fontSize: 20, marginBottom: -20, marginTop: 10 }}>{namaPokemon}</Text>
                        <Image
                            fadeDuration={1000}
                            source={gambarPokemon}
                            style={{ width: 180, height: 180, alignSelf: 'center', marginBottom: 10, marginTop: 10 }}
                        />
                    </Animated.View>
                </PanGestureHandler>
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

        </View >
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
    },
});


// const colorPallate = ['#0c0032', '#190061', '#240090', '#3500d3', '#282828']