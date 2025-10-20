// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import styles from '../styles';

export default function Login({ route }) {
  const { onSignIn } = route.params ?? {}; // App giver en onSignIn-funktion via params
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async () => {
    if (!email || !pwd) return Alert.alert('Manglende info', 'Skriv email og kodeord.');
    // her kunne du validere mod backend – vi accepterer alt != tomt
    await onSignIn({ email }); // gemmer i AsyncStorage via App.js
  };

  const handleGuest = async () => {
    await onSignIn({ email: 'guest@local' });
  };

  return (
    <View style={[styles.container, { justifyContent: 'center' }]}>
      <Text style={styles.title}>Log ind</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Kodeord"
        secureTextEntry
        value={pwd}
        onChangeText={setPwd}
      />

      <Pressable style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Log ind</Text>
      </Pressable>

      <View style={{ height: 10 }} />

      <Pressable style={[styles.btn, { backgroundColor: '#666' }]} onPress={handleGuest}>
        <Text style={styles.btnText}>Fortsæt som gæst</Text>
      </Pressable>
    </View>
  );
}
