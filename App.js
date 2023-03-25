import React from 'react';

import { StyleSheet, View } from 'react-native';
import { WelcomePage, pressButton } from './welcome-page.js';
// import { createStackNavigator } from "@react-navigation/stack";

// import WelcomePage from "./welcome-page.js";
import Forms from './form.js';

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
  return (
    <View style={styles.container}>
    {/* {pressButton === false && ( */}
       <WelcomePage />
    {/* )} */}

    {/* {pressButton === true && ( */}
       <Forms />
    {/* )} */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
