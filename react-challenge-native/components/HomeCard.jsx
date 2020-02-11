import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeCard(props) {
    

    return (
    <View>
        <TouchableOpacity 
            underlayColor="0.1"
            style={styles.toucher}>
            <Text>{props.pokemon.item.name}</Text>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    toucher: {
        flex: 1,
        width: '100%',
        height: 50,
        marginBottom: 1,
        backgroundColor: '#0742e6',
        opacity: 0.7, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    }
});