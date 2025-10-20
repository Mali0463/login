/*import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// REMOVE THIS: import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';

export default function App() {
  const handleSignIn = (userData) => {
    console.log('User signed in:', userData);
  };

  return (
    <View style={styles.container}>
      <Text>Velkommen!</Text>
      <StatusBar style="auto" />
      <Login onSignIn={handleSignIn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/

App.js
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style= {{color: 'white'}}>It works 🎉</Text>
    </View>
  );
}
