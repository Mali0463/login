// screens/Profile.js
import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles';
import { loadMyReviews, loadFavorites } from './Components/storage';

export default function Profile({ navigation }) {
  const [countReviews, setCountReviews] = useState(0);
  const [countFavs, setCountFavs] = useState(0);

  useEffect(() => {
    const unsub = navigation.addListener('focus', async () => {
      const my = await loadMyReviews();
      const fav = await loadFavorites();
      setCountReviews(my.length);
      setCountFavs(fav.length);
    });
    return unsub;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Min profil</Text>
      <Text style={{ marginBottom: 16, opacity: 0.7 }}>Lokal bruger (ingen login)</Text>

      <Pressable style={styles.btn} onPress={() => navigation.navigate('MyReviews')}>
        <Text style={styles.btnText}>📚 Mine reviews ({countReviews})</Text>
      </Pressable>

      <View style={{ height: 10 }} />

      <Pressable style={styles.btn} onPress={() => navigation.navigate('Favorites')}>
        <Text style={styles.btnText}>⭐ Favoritter ({countFavs})</Text>
      </Pressable>
    </View>
  );
}
