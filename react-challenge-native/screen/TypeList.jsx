import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import TypeCard from "../components/TypeCard";
import { useSelector, useDispatch } from 'react-redux';
import { FetchType } from '../store/actions/PokemonAction';

export default function TypeList(props) {

    const TypeStore = useSelector(state => state.TypeStore)
    const dispatch = useDispatch()
    // const [listOfPokemon, setListOfPokemon] = useState([])

    useEffect(() => {
        dispatch(FetchType())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'whitesmoke', fontSize: 18 }} >Poke-Dex Types</Text>
            </View>
            <View style={styles.botDiv}>
                <View style={{ width: '100%', flex: 1 }}>
                    <FlatList
                        columnWrapperStyle={{
                            justifyContent: 'space-around',
                        }}
                        contentContainerStyle={{ justifyContent: 'space-around', flex: 1, backgroundColor: '#2c00b0' }}
                        numColumns={4}
                        data={TypeStore.TypeList}
                        renderItem={({ item }) =>
                            <TypeCard
                                setWhichType={props.setTitle}
                                item={item}
                                style={{
                                    height: 40,
                                    backgroundColor: '#3500d3',
                                    elevation: 10, // Android
                                    borderWidth: 0.5,
                                }}
                            />
                        }
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
        width: '100%'
    },
    topDiv: {
        flex: 1,
        width: '100%',
        height: '10%',
        backgroundColor: '#0742e6',
        opacity: 0.9, /* Add a pointer on hover */
        justifyContent: 'center',
        alignItems: 'center'
    },
    botDiv: {
        flex: 9,
        width: '100%'
    }
});
