import React from "react";
import {
     View, 
     Text, 
     SafeAreaView,
     Image,
     ScrollView
} from "react-native";
import { windowWidth } from "../../utils/Dimensions";
import Header from "../../components/Header";




export default Home = () => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#1E1E1E'
        }}>
            <ScrollView style={{marginHorizontal:24, marginTop:30.75}} showsVerticalScrollIndicator={false}>
               
                <Header />

               <View style={{
                height:503,
                width:windowWidth-48,
                backgroundColor:'#609EAF',
                borderRadius:10,
                marginTop:26.5
               }}>  
                    <View style={{paddingHorizontal:33}}>
                        <Text style={{
                            color:'#fff',fontSize:12, paddingTop:32, fontWeight:'400'
                        }}>
                            Currated playlist
                        </Text>
                        <Image source={require('../../assets/design.png')} style={{
                            width:167.6, height:167.6,tintColor:'#fff', alignSelf:'flex-end',position:'absolute'
                        }}/>
                        <View style={{top:236}}>
                            <Text style={{
                                fontSize:35, color:'#fff', fontWeight:'700'
                            }}>
                                R & B Hits
                            </Text>
                            <Text style={{
                                fontSize:14, color:'#fff', fontWeight:'400', lineHeight:16.8
                            }}>
                                All mine, Lie again, Petty call me everyday,
                                Out of time, No love, Bad habit,
                                and so much more
                            </Text>
                        </View>
                    </View>
               </View>

               <View style={{paddingTop:47}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>Top charts</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[1,2,3].map((item, idx) => <View key={idx} style={{
                        width:windowWidth-80,
                        height:233,
                        borderRadius:10,
                        backgroundColor:'#1A1E1F',
                        marginTop:17,
                        marginRight:17
                    }}>
                        
                    </View>)}
                    
                </ScrollView>
               </View>

               <View style={{paddingTop:47,marginBottom:82}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'700'}}>New releases.</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[1,2,3].map((item, idx) => <View key={idx} style={{
                        width:153,
                        height:153,
                        borderRadius:10,
                        backgroundColor:'#1A1E1F',
                        marginTop:17,
                        marginRight:30
                    }}>
                        
                    </View>)}
                    
                </ScrollView>
               </View>

               <View style={{
                width:windowWidth,
                height:125,
                backgroundColor:'rgba(29, 33, 35, 0.3)',
                position:'absolute',
                bottom:'-0.08%'
               }}>

               </View>
            </ScrollView>
        </SafeAreaView>
    )
}