import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawerMenu from './DrawerNav';

const Stack = createStackNavigator();

export default function StackNav() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeScreen" component={MyDrawerMenu} />
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}