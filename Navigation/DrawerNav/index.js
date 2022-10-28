import { createDrawerNavigator } from '@react-navigation/drawer';
import Collection from '../../screens/Collections';
import HomeScreen from '../../screens/HomeScreen';
import Profile from '../../screens/Profile';
import CustomDrawer from './CustomDrawer';
import Radio from '../../screens/Radio';
import MusicVideos from '../../screens/MusicVideos';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons } from '@expo/vector-icons';
import Album from '../../screens/Album';


const Drawer = createDrawerNavigator();

export default function MyDrawerMenu() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{ 
      headerShown: false, 
      swipeEnabled: false,
      drawerActiveTintColor: '#fff',
      drawerActiveBackgroundColor: '#1A1E1F', 
      drawerInactiveTintColor:'rgba(239, 238, 224, 0.25)',
      drawerLabelStyle: {
        marginLeft:-20,
        fontFamily: 'Quicksand',
        fontSize:17
      } 
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home' size={20} color={color} />
        )
      }} />
      <Drawer.Screen name="My Collections" component={Collection} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home' size={20} color={color} />
        )
      }}/>
      <Drawer.Screen name="Radio" component={Radio} options={{
        drawerIcon: ({color}) => (
          <MaterialIcons name='radio' size={20} color={color} />
        )
      }}/>
      <Drawer.Screen name="Music Videos" component={MusicVideos} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='home' size={20} color={color} />
        )
      }}/>
      <Drawer.Screen name="Profile" component={Profile} options={{
        drawerIcon: ({color}) => (
          <Ionicons name='person' size={20} color={color} />
        )
      }}/>
      <Drawer.Screen name='Album' component={Album} options={{
        drawerItemStyle: {height:0}
      }} />
    </Drawer.Navigator>
  );
}