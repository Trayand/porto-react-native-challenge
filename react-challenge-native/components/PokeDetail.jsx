import React from 'react';
import { Text, View } from 'react-native';

export default function PokeDetail(props) {


    return (
        <View>
            <Text>{JSON.stringify(props.data)}</Text>
        </View>
    )
}