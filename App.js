import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { WelcomePage, pressButton } from './welcome-page.js';
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./welcome-page.js";
import Forms from './form.js';

const Stack = createStackNavigator();

export default function App() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Form" component={Forms} />
      </Stack.Navigator>
    )
}

<View style={styles.container}>
{ { {pressButton === false && (
   <WelcomePage />
)}

{pressButton === true && ( }
   <Forms />
{ )} }
</View> }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
