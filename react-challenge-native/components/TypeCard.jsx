import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'


export default function TypeCard(props) {
    const [test, setTest] = useState('hai carl')
    const navigation = useNavigation()


    const handleOnPress = () => {
        navigation.push('PokeDetail', { item: props.item })
    }

    return (
        <TouchableOpacity
            underlayColor="0.8"
            activeOpacity={0.3}
            style={[{
                backgroundColor: '#3500d3',
                padding: 5,
                borderRadius: 30,
                width: 80,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
                height: 30
            }, props.style]}
            onPress={handleOnPress}
        >
            <Text style={{ color: 'whitesmoke' }}>{props.item.name.toUpperCase()}</Text>
        </TouchableOpacity>
    )
}