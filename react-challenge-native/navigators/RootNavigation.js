import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

import HomePage from '../screen/HomePage';
import TypeStack from './TypeStackNavigator';

const Tab = createBottomTabNavigator()

function Tes3() {
    return <Text>DIAAA</Text>
}

export default function RootNavigation() {
    return (
        <Tab.Navigator initialRouteName="Pokehome" tabBarOptions={{
            showLabel: false,
            inactiveBackgroundColor: '#f5f5f5',
            inactiveTintColor: 'white',
            style: {
                borderTopColor: 'black',
                borderTopWidth: 1,
            }
        }}>
            <Tab.Screen name="Type" component={TypeStack} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="view-list" color="#363cff" size={32} />
            }} />
            <Tab.Screen name="Pokehome" component={HomePage} options={{
                tabBarIcon: () => <MaterialCommunityIcons name="pokeball" color="#363cff" size={32} />
            }}
            />
            <Tab.Screen name="dia" component={Tes3} options={{
                tabBarIcon: () => <Ionicons name="ios-bookmark" color="#363cff" size={32} />
            }} />
        </Tab.Navigator>
    )
}
