import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import TypeCard from "../components/TypeCard";


export default function TypeList(props) {
    const [whichType, setWhichType] = useState('Poke-PrivateDex')
    const [typeList, setTypeList] = useState([])
    const [listOfPokemon, setListOfPokemon] = useState([])


    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/type')
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                setTypeList(myJson.results)
                console.log(myJson.results.length);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'black' }} >{whichType}</Text>
            </View>
            <View style={styles.botDiv}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={10}
                        getItemLayout={(data, index) => (
                            { length: 20, offset: 20 * index, index }
                        )}
                        data={typeList}
                        renderItem={({ item }) => <TypeCard setWhichType={setWhichType} item={item} />}
                        keyExtractor={(item, i) => i.toString()}
                    />
                </View>
                <View style={{ flex: 9 }}></View>
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
    },
    botDiv: {
        flex: 9
    }
});
