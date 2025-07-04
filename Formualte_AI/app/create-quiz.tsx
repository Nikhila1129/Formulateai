import { View, Text, StyleSheet, Button } from 'react-native';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function CreateQuizScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={false} translucent={true}/>
      <Stack.Screen options={{ title: 'New Quiz', presentation: 'modal', headerShown: false }} />
      <Text style={styles.text}>This is the Quiz Creation Screen!</Text>
      <Button title="Go Back" onPress={() => router.back()} />
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