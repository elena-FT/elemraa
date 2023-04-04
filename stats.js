import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PieChart from 'react-native-expo-pie-chart';
import { Button, Badge, Dialog } from '@rneui/themed';
import { useState } from 'react';

function generateStats(responses) {
    let stats = []
    let index = 0
    let color = ['#100348', '#752AB5', 'orange', '#4160DA', 'blue', 'red', 'yellow']
    responses.map((response) => {
        let lst = ["<25", "25-40", "40-60", "60<"];
        if (response != null && !lst.includes(response[1]) && response[0] != 0)
        {
            stats.push({
                key: index,
                count: response[0],
                color: color[index],
                string: response[2]
            })
            index++;
        }
    })
    return stats
}

export default function Stats({responses, visibleDiag, setVisibleDiag, toggleDialog}) {
    return (
        <View>
                    {console.log(generateStats(responses))}
                    <PieChart
                        data={generateStats(responses)}
                        length={240}
                    />
                    <View style={styles.legend_round}>
                        {generateStats(responses).map(stat => (
                            <Badge badgeStyle={{backgroundColor: stat.color}} />
                        ))}
                    </View>
                  
                    <View style={styles.legen} >
                        {generateStats(responses).map(stat => (
                            <Text style={{ color: stat.color, paddingBottom: 30, paddingVertical: 40 }}>{stat.string}</Text>
                        ))}

                    </View>
                    <View>
                        <Button 
                        title="Informations" 
                        onPress={toggleDialog} 
                        buttonStyle={{
                            backgroundColor: '#6879D1',
                            borderColor: 'transparent',
                            borderWidth: 0,
                            borderRadius: 30,
                            marginBottom: 30,
                        }}/>
                        <Dialog
                            isVisible={visibleDiag}
                            onBackdropPress={toggleDialog}
                            >
                            <Dialog.Title title="Informations"/>
                            <View>
                                <Text>Tabac : l’objectif de l’arrêt du tabac c’est surtout d’y gagner en qualité de vie! Nous vous invitons à visiter la plateforme tabac-info-service pour vous accompagner dans votre démarche</Text>
                                <Text>Grossesse : Le nombre de grossesse sont sources de modifications hormonales qui sont responsables d'un risque cardiovasculaire spécifiques et sont à prendre en compte pour une prévention optimale</Text>
                                <Text>Antécédent : Vous présentez un facteur de risque cardiovasculaire important</Text>
                            </View>
                        </Dialog>
                    </View>
                </View>
    );
}

const styles = StyleSheet.create({
    legend_round: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    legen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: 90
    }
});