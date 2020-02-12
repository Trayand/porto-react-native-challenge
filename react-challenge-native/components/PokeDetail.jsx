import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

export default function PokeDetail(props) {
    const [onShow, setOnShow] = useState(false)
    const [bgcolor, setbgColor] = useState('#190061')
    const [pokeData, setPokeData] = useState(null)

    return (
        <View>
            <TouchableOpacity
                underlayColor="0.8"
                activeOpacity={0.3}
                style={{
                    backgroundColor: bgcolor,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 25,
                    marginBottom: 5
                }}
                onPress={() => {
                    if (bgcolor === '#190061') setbgColor('#268efc')
                    else setbgColor('#190061')

                    if (onShow) setOnShow(false)
                    else setOnShow(true)

                    if (pokeData === null) {
                        fetch(props.data.url)
                            .then((response) => {
                                return response.json();
                            })
                            .then((myJson) => {
                                // console.log('myJson', myJson);
                                setPokeData(myJson);
                            })
                            .catch(err => console.log(err))
                    }
                }}
            >
                <Text style={{ fontSize: 17, color: 'whitesmoke' }}>{props.data.name}</Text>
            </TouchableOpacity>
            {
                !onShow
                    ? <View></View>
                    : <View style={{ marginBottom: 10 }} >
                        {/* <Text>{JSON.stringify(props.data)}</Text> */}

                        {
                            pokeData === null
                                ? <View></View>
                                : <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                                    <View>
                                        <Text>Abilities:</Text>
                                        {pokeData.abilities.map(({ ability }, i) => {
                                            return <Text key={i}>- {ability.name}</Text>
                                        })}
                                    </View>
                                    <Image source={{ uri: pokeData.sprites.front_default }} style={{ width: 90, height: 90 }} />
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>Spd:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[0].base_stat}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>Sdef:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[1].base_stat}</Text></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>Satk:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[2].base_stat}</Text></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>Def:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[3].base_stat}</Text></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>Atk:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[4].base_stat}</Text></View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 60 }} >
                                            <Text style={{ textAlign: 'left' }}>HP:</Text>
                                            <Text style={{ textAlign: 'right' }} >{pokeData.stats[5].base_stat}</Text></View>
                                    </View>
                                </View>
                        }

                    </View>
            }
        </View>
    )
}