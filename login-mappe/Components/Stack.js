// Stack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './screens/Profil';
import MyReviews from './screens/myreviews';
import Favorites from './screens/favorites';

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