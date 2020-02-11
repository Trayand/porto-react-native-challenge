import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import pokeball from '../assets/pokeball.png'

export default function HomePage(props) {

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'white' }} >Poke-PrivateDex</Text>
            </View>
            <View style={{ flex: 9 }} >
                <Text>Test Home Page</Text>
                <Text>Test Home Page</Text>
            </View>
            <Image source={pokeball} style={{width: 30, height: '50%'}} />
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
        backgroundColor: 'blue',
        backgroundColor: '#0742e6',
        opacity: 0.7, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    }
});
