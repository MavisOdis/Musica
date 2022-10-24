import { createDrawerNavigator } from '@react-navigation/drawer';
import Collection from '../../screens/Collections';
import HomeScreen from '../../screens/HomeScreen';
import Profile from '../../screens/Profile';
import CustomDrawer from './CustomDrawer';

const Drawer = createDrawerNavigator();

export default function MyDrawerMenu() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{ headerShown: false, swipeEnabled: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="My Collections" component={Collection} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}