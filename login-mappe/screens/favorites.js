import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';
import { loadFavorites } from './Components/storage';

export default function Favorites() {
  const [items, setItems] = useState([]);

  useEffect(() => { (async () => setItems(await loadFavorites()))(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⭐ Favoritter</Text>
      <FlatList
        data={items}
        keyExtractor={(s, i) => s + i}
        ListEmptyComponent={<Text>Ingen favoritter endnu.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: '600' }}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}
