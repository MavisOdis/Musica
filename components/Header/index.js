import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header ({navigation}) {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={require('../../assets/menu.png')} style={{
                        width:24, height:24,marginRight:24
                    }}/>
                </TouchableOpacity>
                <Image source={require('../../assets/logo.png')} style={{
                    width:34, height:34
                }}/>
            </View>
            <TouchableOpacity>
                <Ionicons name="search" size={20} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
}