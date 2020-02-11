import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import load from '../assets/load.gif';

export default function HomeCard(props) {
    const [bgcolor, setbgColor] = useState('#3500d3')

    useEffect(() => {
        if (props.whichButton === props.pokemon.item.name) {
            setbgColor('#190061')
        } else {
            setbgColor('#3500d3')
        }
    }, [props.whichButton])

    const handlePress = (e) => {
        props.setGambarPokemon(load)
        props.setNamaPokemon('loading...')
        props.setWhichButton(props.pokemon.item.name)

        fetch(props.pokemon.item.url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                props.setGambarPokemon({ uri: myJson.sprites.front_default })
                props.setNamaPokemon(myJson.species.name)
            })
            .catch(err => console.log(err))
    }

    return (
        <View style={[{ width: "50%" }, props.style]}>
            <TouchableOpacity
                underlayColor="0.8"
                activeOpacity={0.3}
                style={[styles.toucher, { backgroundColor: bgcolor }]}
                onPress={handlePress}
            >
                <Text style={{ color: 'whitesmoke' }}>{props.pokemon.item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toucher: {
        flex: 1,
        height: 50,
        width: '80%',
        marginTop: 5,
        marginHorizontal: '10%',
        backgroundColor: '#7395ae',
        opacity: 0.7, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    }
});