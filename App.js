import React from 'react';

import { StyleSheet, View, ImageBackground } from 'react-native';
import { WelcomePage, pressButton } from './welcome-page.js';
import { useState } from 'react';
// import { createStackNavigator } from "@react-navigation/stack";

// import WelcomePage from "./welcome-page.js";
import Forms from './form.js';
import { Switch, Button } from 'react-native';

// import QRCode from 'qrcode.react';


// const Stack = createStackNavigator();

// export default function App() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen name="Welcome" component={Welcome} />
//         <Stack.Screen name="Form" component={Forms} />
//       </Stack.Navigator>
//     )
// }

export default function App() {
  return(
  <ImageBackground source={require('./assets/new.png')} style={styles.background}>
       <Forms />
  </ImageBackground>)
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    flex: 1,
    resizeMode: 'cover', // adapter la taille de l'image à la taille de l'écran
  },
});