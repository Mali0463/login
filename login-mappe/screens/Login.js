// screens/Login.js
import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from 'react-native';

export default function Login({ route }) {
  const { onSignIn } = route.params ?? {}; // App giver en onSignIn-funktion via params
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = async () => {
    if (!email || !pwd) return Alert.alert('Manglende info', 'Skriv email og kodeord.');
    // her kunne du validere mod backend – vi accepterer alt != tomt
    if (onSignIn) {
      await onSignIn({ email }); // gemmer i AsyncStorage via App.js
    }
  };

  const handleGuest = async () => {
    if (onSignIn) {
      await onSignIn({ email: 'guest@local' });
    }
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});