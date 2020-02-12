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
        <View style={{ backgroundColor: 'red', marginVertical: 3, height: 100, paddingVertical: 3 }}>
            <TouchableOpacity
                underlayColor="0.8"
                activeOpacity={0.3}
                style={{
                    backgroundColor: '#3500d3',
                    height: 40,
                    padding: 5,
                    borderRadius: 30,
                    width: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginHorizontal: 5
                }}
                onPress={handleOnPress}
            >
                <Text style={{ color: 'whitesmoke' }}>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}