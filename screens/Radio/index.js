import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Header from "../../components/Header";

const Radio = ({navigation}) => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#1E1E1E',
        }}>
            <View style={{marginTop:30.75,marginHorizontal:24}}>
                <Header navigation={navigation}/>
            </View>
            
        </SafeAreaView>
    );
}

export default Radio;