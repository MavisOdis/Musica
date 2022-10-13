import { useEffect, useCallback } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Preview from './assets/load-image.svg';
import HomeScreen from './screens/HomeScreen';


export default function App() {
  // const [fontsLoaded] = useFonts({
  //   'Quicksand': require('./assets/font/Quicksand-Regular.ttf'),
  // });

  // useEffect(() => {
  //   async function prepare() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   prepare();
  // }, []);

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }
  return (
      <HomeScreen/>
  );
}


