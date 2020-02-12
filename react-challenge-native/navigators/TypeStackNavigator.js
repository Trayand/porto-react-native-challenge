import React, { useState } from "react";

import { View, Text, FlatList } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()


import TypeList from "../screen/TypeList";
import TypeDetail from '../screen/TypeDetail'

export default function TypeStack(props) {
    return (
        <Stack.Navigator >
            <Stack.Screen name="PokeData" component={TypeList} options={{ headerShown: false }} />
            <Stack.Screen name="PokeDetail" component={TypeDetail} />
        </Stack.Navigator>
    )
}