import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import pokeball from '../assets/pokeball.png'
import HomeCard from "../components/HomeCard";

export default function HomePage(props) {

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'white' }} >Poke-PrivateDex</Text>
            </View>
            <View style={{ flex: 3 }} >
            <Image source={pokeball} style={{width: 180, height: 180, marginTop: 5}} />
            </View>
            <View style={{flex: 5, width:"100%"}}>
                <FlatList 
                    style={{width: '100%'}}
                    data={fake}
                    renderItem={({item})=><HomeCard kata={item} />}
                    keyExtractor={(item, i) => i}
                />
                {/* {
                    fake.map((kata, i) => {
                        return <HomeCard key={i} kata={kata} />
                    })
                } */}
            </View>
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
        backgroundColor: '#0742e6',
        opacity: 0.7, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    }
});
const fake = [1,2,3,4,6,7,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,22,24]
