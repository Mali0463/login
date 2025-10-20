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

      {/* Viser login-komponenten */}
      <Login />
    </View>
  );
}

import Profile from '../screens/Profile';
import MyReviews from '../screens/MyReviews';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();
export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Min profil' }} />
      <Stack.Screen name="MyReviews" component={MyReviews} options={{ title: 'Mine reviews' }} />
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favoritter' }} />
    </Stack.Navigator>
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
