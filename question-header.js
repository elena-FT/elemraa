import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from '@rneui/themed';

export default function QuestionHeader({question}) {
    return (
      <View style={styles.container}>
        <Icon
          name="heartbeat"
          type="font-awesome"
          size={20}
          reverse
          color='#6879D1'
        />
        <Text style={styles.h2}>Elemraa</Text>
        <Text style={styles.h3}>{question.text}</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  },
  h2: {
      fontWeight: '400',
      fontSize: 20,
      color: 'black'
  },
  h3: {
      fontWeight: '500',
      fontSize: 34,
      color: 'white',
      textAlign: 'center',
      margin: 30,
  },
});
