//App.js 
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Remove the unused import ↓
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './screens/Login';

export default function App() {
  // Create a simple onSignIn function since we're not using navigation yet
  const handleSignIn = (userData) => {
    console.log('User signed in:', userData);
    // Here you would normally handle the login logic
    // For now, we'll just log it
  };

  return (
    <View style={styles.container}>
      <Text>Velkommen!</Text>
      <StatusBar style="auto" />
      {/* Pass the onSignIn function as a prop instead of via route.params */}
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
});

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