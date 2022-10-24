import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawerMenu() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false, swipeEnabled: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}