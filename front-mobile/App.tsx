import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import Header from './src/Header';
import Home from './src/Home';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Header />
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
