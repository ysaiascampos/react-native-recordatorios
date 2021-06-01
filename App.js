import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MyApp from './src';

export default function App() {
  let [fontsLoaded] = useFonts({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <MyApp />
    );
  }
}