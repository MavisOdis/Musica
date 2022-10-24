import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView } from "react-native";
import Header from "../../components/Header";
import { windowWidth } from "../../utils/Dimensions";
import Ionicons from '@expo/vector-icons/Ionicons';


const Collection = ({navigation}) => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#1E1E1E',
        }}>
            <ScrollView 
                showsVerticalScrollIndicator= {false}
                style={{marginTop:30.75,marginHorizontal:24}}>
                <Header navigation={navigation}/>

                <View style={{flexDirection:'row',width:windowWidth-62,marginTop:46.5}}>
                    <View 
                    style={{
                        height:37,borderRadius:27,
                        backgroundColor:'#FACD66',
                        justifyContent:'center',
                        alignItems:'center',
                        width:windowWidth/2-31}}>
                        <Text style={{fontSize:14,fontFamily:'Quicksand',fontWeight:'400',color:'#1D2123'}}>
                            My collection
                        </Text>
                    </View> 
                    <View 
                    style={{
                        height:37,borderRadius:27,
                        justifyContent:'center',
                        borderWidth:1,
                        borderColor:'#EFEEE0',
                        marginLeft:14,
                        alignItems:'center',
                        width:windowWidth/2-31}}>
                        <Text style={{fontSize:14,fontFamily:'Quicksand',fontWeight:'400', color:'#EFEEE0'}}>
                            Likes
                        </Text>
                    </View> 
                </View>
                <View style={{marginVertical:38}}>
                    <View>
                        <View style={{position:'absolute',top:130,zIndex:3,marginLeft:19}}>
                            <Text style={{fontSize:24,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',lineHeight:30}}>Limits</Text>
                            <Text style={{fontSize:10,fontWeight:'400',fontFamily:'Quicksand',color:'#EFEEE0'}}>John watts</Text>
                            <Text style={{fontSize:14,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',marginTop:32,marginBottom:23}}>2.3m likes</Text>
                        </View>
                        <View style={{
                            width:48,height:48,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.11)',
                            borderRadius:30,backgroundColor:'#FACD66',
                            justifyContent:'center',alignItems:'center',
                            position:'absolute',zIndex:3,bottom:30,marginLeft:windowWidth-110
                            }}>
                                <Ionicons name="play" size={20} color="#fff" /> 
                        </View>
                        <Image source={require('../../assets/frame6.png')} style={{width:windowWidth-48,height:250,borderRadius:20}} />
                    </View>
                    
                    <View>
                        <View style={{position:'absolute',top:140,zIndex:3,marginLeft:19}}>
                            <Text style={{fontSize:24,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',lineHeight:30}}>Limits</Text>
                            <Text style={{fontSize:10,fontWeight:'400',fontFamily:'Quicksand',color:'#EFEEE0'}}>John watts</Text>
                            <Text style={{fontSize:14,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',marginTop:32,marginBottom:23}}>2.3m likes</Text>
                        </View>
                        <View style={{
                            width:48,height:48,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.11)',
                            borderRadius:30,backgroundColor:'#FACD66',
                            justifyContent:'center',alignItems:'center',
                            position:'absolute',zIndex:3,bottom:30,marginLeft:windowWidth-110
                            }}>
                                <Ionicons name="play" size={20} color="#fff" /> 
                        </View>
                        <Image source={require('../../assets/frame7.png')} style={{width:windowWidth-48,height:250,borderRadius:20, marginTop:20}} />
                    </View>

                    <View>
                        <View style={{position:'absolute',top:140,zIndex:3,marginLeft:19}}>
                            <Text style={{fontSize:24,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',lineHeight:30}}>Limits</Text>
                            <Text style={{fontSize:10,fontWeight:'400',fontFamily:'Quicksand',color:'#EFEEE0'}}>John watts</Text>
                            <Text style={{fontSize:14,fontWeight:'400',fontFamily:'Quicksand',color:'#fff',marginTop:32,marginBottom:23}}>2.3m likes</Text>
                        </View>
                        <View style={{
                            width:48,height:48,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.11)',
                            borderRadius:30,backgroundColor:'#FACD66',
                            justifyContent:'center',alignItems:'center',
                            position:'absolute',zIndex:3,bottom:30,marginLeft:windowWidth-110
                            }}>
                                <Ionicons name="play" size={20} color="#fff" /> 
                        </View>
                        <Image source={require('../../assets/frame8.png')} style={{width:windowWidth-48,height:250,borderRadius:20,marginTop:20}} />
                    </View>

                </View>
                
            </ScrollView>         
        </SafeAreaView>
    );
}

export default Collection;