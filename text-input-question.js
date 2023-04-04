
import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Button } from '@rneui/themed';

export default function TextInputQuestion({userResponse, setUserResponse, handleNextQuestion}) {
    return (
        <View>
        <TextInput
            style={styles.input}
            onChangeText={setUserResponse}
            value={userResponse}
            placeholder='Type your answer here...'
        />
        <Button 
            title="Ok"
            disabledStyle={{ backgroundColor: 'transparent' }}
            buttonStyle={{ 
                backgroundColor: '#6879D1',
                borderWidth: 0,
                borderRadius: 30,
                borderColor: '#6879D1', 
                borderWidth: 1, 
                backgroundColor: 'transparent',
            }}
            titleStyle={{ color: '#6879D1' }} 
            onPress={() => handleNextQuestion([0, userResponse])} 
            disabled={userResponse.length == 0} 
            />

    </View>
    );
  }

    const styles = StyleSheet.create({
        input: {
            borderWidth: 1,
            borderColor: '#EBE8EF',
            backgroundColor: '#EBE8EF',
            borderRadius: 5,
            padding: 10,
            marginBottom: 20,
            width: '100%',
            width: 250,
            height: 50,
            fontSize: 22
        },
    });

  