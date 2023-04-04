import React from 'react';
import { View } from 'react-native';
import { Button } from '@rneui/themed';
import { Icon, Text } from '@rneui/themed';
import { StyleSheet } from 'react-native';

export default function Tips({question, handleNextQuestion}) {
    return (
        <View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20
                    }}>
                        <Icon
                            name="light"
                            type="font-awesome"
                            size={30}
                            reverse
                            color='#6879D1'
                        />
                    </View>

                    <Text style={styles.text}>{question.answer.response}</Text>
                    <Button 
                        title="Continue"
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
});