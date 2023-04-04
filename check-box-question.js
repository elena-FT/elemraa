import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, CheckBox, Icon } from '@rneui/themed';

export default function CheckBoxQuestion({isChecked, setIsChecked, handleNextQuestion}) {
    return (
        <View>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 90
      }}>
          <Icon
              name="heartbeat"
              type="font-awesome"
              size={40}
              reverse
              color='#6879D1'
          />
      </View>
      <Text style={styles.h1}>Elemraa</Text>
      <Text style={styles.h4}>Prend le pouvoir sur ta santé !</Text>
      <Text style={styles.text}></Text>
      <CheckBox
          center
          title="Cette application a pour objectif la prévention et la sensibilisation des femmes et ne remplace pas l'avis d'un professionel de santé."
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          style={styles.button}
      />
      <Button title="Débuter le questionnaire" onPress={() => handleNextQuestion([0,0])} disabled={isChecked === false}
      buttonStyle={{
          backgroundColor: '#6879D1',
          borderColor: 'transparent',
          borderWidth: 0,
          borderRadius: 30,
          marginTop: 40,
      }}/>
    </View>
    );
  }
  
    const styles = StyleSheet.create({
        h1: {
            fontWeight: '400',
            fontSize: 50,
            color: 'white',
            textAlign: 'center'
        },
        h4: {
            fontWeight: '500',
            fontSize: 27,
            color: 'black',
            textAlign: 'center',
            marginTop: 60
        },
        text: {
            fontWeight: '500',
            fontSize: 20,
            color: 'black',
            textAlign: 'justify',
            margin: 30
        },
        button: {
            backgroundColor: 'rgba(78, 116, 289, 1)',
            paddingHorizontal: 10,
            paddingVertical: 5,
            width: 150,
        },
    });