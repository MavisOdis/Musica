import { useEffect, useState, useCallback } from 'react';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import Preview from './assets/load-image.svg';
import HomeScreen from './screens/HomeScreen';
import StackNav from './Navigation';


export default function App() {
 
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try{
        await Font.loadAsync({
          'Quicksand': require('./assets/font/Quicksand-Regular.ttf'),
          'Quicksand-bold' : require('./assets/font/Quicksand-Bold.ttf')
        })
      } catch (e) {
        console.warn(e);
      } finally{
        setAppIsReady(true)
      }
      // await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayout = useCallback(async () =>{
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) return null;
  return (
      <StackNav onLayout={onLayout}/>
  );
}


