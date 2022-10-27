import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../components/Header';
import Album from '../screens/Album';
import MyDrawerMenu from './DrawerNav';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={MyDrawerMenu} />
            <Stack.Screen name="Album" component={Album} />
            <Stack.Screen name='Header' component={Header} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}