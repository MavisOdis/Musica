import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1,backgroundColor:'#1A1E1F'}}>
            <DrawerContentScrollView {...props}
            // contentContainerStyle={{backgroundColor: '#1A1E1F'}}
            >
                <DrawerItemList {...props} />
                <TouchableOpacity style={{marginBottom:30,marginLeft:20,flexDirection:'row'}}>
                    <Ionicons name="exit" size={25} color="rgba(239, 238, 224, 0.25)" style={{top:3,marginRight:8}} />  
                    <Text style={{fontSize:17,fontWeight:'400',fontFamily:'Quicksand',color:'rgba(239, 238, 224, 0.25)'}}>
                        Log out
                    </Text>
                </TouchableOpacity>
            </DrawerContentScrollView>           
        </View>
    )
}
//#1A1E1F

export default CustomDrawer;