import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button } from '@rneui/themed';

export default function Result({handleNextQuestion}) {
    return (
        <View>
                    <Text style={styles.text}>  Merci pour votre temps, continuez pour voir le résultat de votre questionnaire !</Text>
                    <Text style={styles.h1}></Text>
                    <Text style={styles.h1}></Text>
                    <Text style={styles.h3}></Text>
                    <Text style={styles.h3}></Text>
                    
                    <Button 
                        title="See the result"
                        icon={{
                            name: 'arrow-right',
                            type: 'font-awesome',
                            size: 15,
                            color: '#6879D1',
                        }}
                        iconContainerStyle={{ marginLeft: 10 }}
                        titleStyle={{ color: '#6879D1', fontWeight: '700' }}
                        buttonStyle={{
                            borderColor: '#6879D1',
                            backgroundColor: 'transparent',
                            borderWidth: 1,
                            borderRadius: 30,
                            height: 46,
                        }}
                        containerStyle={{
                            marginTop: 100,
                            width: 200,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        onPress={() => handleNextQuestion([0,0])}
                        />

                </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '500',
        fontSize: 20,
        color: 'black',
        textAlign: 'justify',
        margin: 30
    },
    h1: {
        fontWeight: '400',
        fontSize: 50,
        color: 'white',
        textAlign: 'center'
    },
    h3: {
        fontWeight: '500',
        fontSize: 34,
        color: 'white',
        textAlign: 'center',
        margin: 30,
    },
});
