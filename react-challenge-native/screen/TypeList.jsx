import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import TypeCard from "../components/TypeCard";
import { useSelector, useDispatch } from 'react-redux';
import { FetchType } from '../store/actions/PokemonAction';

export default function TypeList(props) {

    const TypeStore = useSelector(state => state.TypeStore)
    const dispatch = useDispatch()
    const [listOfPokemon, setListOfPokemon] = useState([])

    useEffect(() => {
        dispatch(FetchType())
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topDiv} >
                <Text style={{ color: 'black' }} >{}</Text>
            </View>
            <View style={styles.botDiv}>
                <View style={{ flex: 1, width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        TypeStore.TypeList.map((item, i) => {
                            return <TypeCard key={i} setWhichType={props.setTitle} item={item} />
                        })
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
        width: '100%'
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
        flex: 9,
        width: '100%'
    }
});
