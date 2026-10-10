import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <ThemedText type="title">About My App</ThemedText>
        <ThemedText style={styles.text}>
          This screen is added for Assignment 02.
          This is my React Native Expo App.
        </ThemedText>

        <ThemedView style={styles.card}>
          <ThemedText type="subtitle">App Features</ThemedText>
          <ThemedText>• Bottom Tab Navigation</ThemedText>
          <ThemedText>• Custom Icon & Splash</ThemedText>
          <ThemedText>• Themed Components</ThemedText>
        </ThemedView>

        <ThemedText style={styles.footer}>Developed by Mehak</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { padding: 20, gap: 15, paddingTop: 50 },
  text: { marginTop: 10, lineHeight: 22 },
  card: { marginTop: 15, padding: 15, borderRadius: 12, borderWidth: 0.5, borderColor: '#ccc' },
  footer: { marginTop: 30, textAlign: 'center', opacity: 0.6 },
});