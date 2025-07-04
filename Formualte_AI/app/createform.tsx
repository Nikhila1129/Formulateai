import { View, Text, StyleSheet, Button } from 'react-native';
import { Stack, router } from 'expo-router';

export default function CreateFormScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: 'New Form', presentation: 'modal',  }} />
      <Text style={styles.text}>Create New Form Here!</Text>
      <Button title="Dismiss" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});