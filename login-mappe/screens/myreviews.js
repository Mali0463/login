import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../styles';
import { loadMyReviews } from './storage';

export default function MyReviews() {
  const [items, setItems] = useState([]);

  useEffect(() => { (async () => setItems(await loadMyReviews()))(); }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mine reviews</Text>
      <FlatList
        data={items}
        keyExtractor={r => r.id}
        ListEmptyComponent={<Text>Du har ikke skrevet nogen reviews endnu.</Text>}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ fontWeight: '700' }}>{item.title} · {item.country}</Text>
            <Text>{item.text}</Text>
            <Text style={styles.rating}>⭐ {item.rating}/5</Text>
            <Text style={{ opacity: 0.6, marginTop: 4 }}>
              {new Date(item.createdAt).toLocaleString()}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
