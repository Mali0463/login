import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login'; // sørg for at stien passer

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Velkommen!</Text>
      <StatusBar style="auto" />
      <Login />
    </View>
  );
}


/*App.js
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{color: 'white'}}>It works 🎉</Text>
    </View>
  );
}*/