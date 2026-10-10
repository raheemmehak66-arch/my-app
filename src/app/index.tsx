import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState("Mera Pehla App Chal Gaya!");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assalamu Alaikum!</Text>
      <Text style={styles.subtitle}>{text}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setText("Mehak's App ❤️")}>
        <Text style={styles.buttonText}>Click Karo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' },
  title: { fontSize: 28, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginTop: 10 },
  button: { backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 20 },
  buttonText: { color: 'white', fontWeight: 'bold' },
});