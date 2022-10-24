import React from "react";
import { View, Text } from "react-native";
import { DrawerContentScrollView,DrawerItemList } from "@react-navigation/drawer";

const CustomDrawer = (props) => {
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}
            contentContainerStyle={{backgroundColor: '#1A1E1F'}}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
        
    )
}

export default CustomDrawer;