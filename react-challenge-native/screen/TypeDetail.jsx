import React, { useEffect, useState } from 'react'
import { StyleSheet, Image, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import TypeCard from "../components/TypeCard";
import PokeDetail from "../components/PokeDetail";
import spinOnLoad from "../assets/spinner.gif";


export default function TypeList(props) {
    const [pokemonTypeList, setPokemonTypeList] = useState([])
    const TypeStore = useSelector(state => state.TypeStore)
    const [onLoad, setOnLoad] = useState(false)

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
        setOnLoad(true)
        fetch(props.route.params.item.url)
            .then((response) => {
                return response.json();
            })
            .then((myJson) => {
                // setTypeList(myJson.results)
                setPokemonTypeList(myJson.pokemon);
            })
            .catch(err => console.log(err))
        setOnLoad(false)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.botDiv}>
                <FlatList
                    style={{ backgroundColor: 'green', flexGrow: 0 }}
                    contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={10}
                    getItemLayout={(data, index) => (
                        { length: 20, offset: 20 * index, index }
                    )}
                    data={TypeStore.TypeList}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
                            <TypeCard
                                setWhichType={props.setTitle}
                                item={item}
                                style={{
                                    backgroundColor: '#3500d3',
                                    elevation: 10, // Android
                                    borderWidth: 0.3,
                                }}
                            />
                        </View>
                    )
                    }
                    keyExtractor={(item, i) => i.toString()}
                />
                <View style={{ flex: 1 }}>
                    {
                        onLoad
                            ? <Image source={spinOnLoad} style={{ width: 'auto' }} />
                            : <FlatList
                                data={pokemonTypeList}
                                renderItem={({ item }) => <PokeDetail data={item.pokemon} />}
                                keyExtractor={(item, i) => i.toString()}
                            />
                    }
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
