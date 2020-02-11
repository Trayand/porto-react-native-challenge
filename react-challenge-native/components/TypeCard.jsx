import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function TypeCard(props) {


    return (
        <View style={{ width: 3, marginVertical: 3, height: 100, marginRight: 60, marginLeft: 20 }}>
            <TouchableOpacity
                underlayColor="0.8"
                activeOpacity={0.3}
                style={{ backgroundColor: '#3500d3', height: 40, padding: 5, borderRadius: 30, width: 70, alignItems: 'center', justifyContent: 'center' }}
            >
                <Text style={{ color: 'whitesmoke' }}>{props.item.name}</Text>
            </TouchableOpacity>
        </View>
    )
}