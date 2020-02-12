import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList, ScreenRect } from 'react-native';
import { useSelector } from 'react-redux';
import TypeCard from "../components/TypeCard";
import PokeDetail from "../components/PokeDetail";


export default function TypeList(props) {
    const [pokemonTypeList, setPokemonTypeList] = useState([])
    const TypeStore = useSelector(state => state.TypeStore)

    useEffect(() => {
        props.navigation.setOptions({
            title: props.route.params.item.name.toUpperCase(),
            headerStyle: {
                height: 60,
                backgroundColor: '#190061',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                position: 'absolute',
                top: -15,
                left: 10
            },
        })
    }, [props.route.params.item])

    useEffect(() => {
        fetch(props.route.params.item.url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // setTypeList(myJson.results)
                setPokemonTypeList(myJson.pokemon);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.botDiv}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={10}
                        getItemLayout={(data, index) => (
                            { length: 20, offset: 20 * index, index }
                        )}
                        data={TypeStore.TypeList}
                        renderItem={({ item }) => <TypeCard setWhichType={props.setTitle} item={item} />}
                        keyExtractor={(item, i) => i.toString()}
                    />
                </View>
                <View style={{ flex: 9 }}>
                    <FlatList
                        data={pokemonTypeList}
                        renderItem={({ item }) => <PokeDetail data={item.pokemon} />}
                        keyExtractor={(item, i) => i.toString()}
                    />
                </View>
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
    botDiv: {
        flex: 1
    }
});
