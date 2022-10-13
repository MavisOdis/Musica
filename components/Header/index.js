import React from "react";
import { View, Image } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header () {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('../../assets/menu.png')} style={{
                    width:24, height:24,marginRight:24
                }}/>
                <Image source={require('../../assets/logo.png')} style={{
                    width:34, height:34
                }}/>
            </View>
            <Ionicons name="search" size={20} color={'#fff'} />
        </View>
    );
}