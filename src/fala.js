import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as Speech from 'expo-speech';


export default function App() {
  const speak = () => {
    const thingToSay = 'Ola Pessoal da Informática';
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <Button title="Clique aqui" onPress={speak} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
