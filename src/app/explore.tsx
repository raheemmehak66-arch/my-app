import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { StyleSheet } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Explore Fixed</ThemedText>
      <ThemedText>Build ab pass hoga.</ThemedText>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
});