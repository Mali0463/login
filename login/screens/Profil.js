import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min profil</Text>
      <Pressable style={styles.btn} onPress={() => navigation.navigate('MyReviews')}>
        <Text style={styles.btnText}>📚 Mine reviews</Text>
      </Pressable>

      <View style={{ height: 12 }} />

      <Pressable style={styles.btn} onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.btnText}>⭐ Favoritter</Text>
      </Pressable>
    </View>
  );
}