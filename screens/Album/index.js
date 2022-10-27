import React from "react";
import { View, Text, SafeAreaView, Image, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { windowWidth } from "../../utils/Dimensions";
import { SimpleLineIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';






const Album = ({navigation}) => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#1E1E1E',
        }}>
            <ScrollView 
                showsVerticalScrollIndicator={false}
                style={{marginTop:30.75,marginHorizontal:24,marginBottom:20}}>
                {/* <ImageBackground 
                    source={require('../../assets/frame8.png')} style={{width:windowWidth, height:350}} resizeMode='stretch'>

                </ImageBackground> */}
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
                <Image source={require('../../assets/frame8.png')} 
                    style={{
                        width:windowWidth-40, 
                        height:289,
                        marginTop:37.5,
                        borderRadius:25}} />
                <Text style={{marginTop:25,fontSize:35,fontWeight:'700',fontFamily:'Quicksand',color:'#A4C7C6'}}>
                    Tomorrow’s tunes
                </Text>
                <Text style={{marginTop:14,fontSize:14,fontWeight:'400',fontFamily:'Quicksand',color:'#EFEEE0',lineHeight:16.8}}>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit ut aliquam, 
                    purus sit amet luctus venenatis
                </Text>
                <Text style={{marginTop:14,fontSize:14,fontWeight:'400',fontFamily:'Quicksand',color:'#EFEEE0',lineHeight:16.8}}>
                    64 songs ~ 16 hrs+
                </Text>
                <View style={{flexDirection:'row',marginTop:25,marginRight:11}}>
                    <View style={{
                        height:36,
                        borderRadius:32,
                        backgroundColor:'rgba(255, 255, 255, 0.07)',
                        alignItems:'center',
                        flexDirection:'row',
                        marginRight:11
                        }}>
                        <Image source={require('../../assets/Vector.png')} style={{width:14,height:14,marginLeft:12}} />
                        <Text style={{color:'#fff',paddingHorizontal:12,fontSize:11,fontFamily:'Quicksand'}}>Play all</Text>
                    </View>
                    <View style={{
                        height:36,
                        borderRadius:32,
                        backgroundColor:'rgba(255, 255, 255, 0.07)',
                        alignItems:'center',
                        flexDirection:'row',
                        marginRight:11}}>
                        <Image source={require('../../assets/music-square-add.png')} style={{width:16,height:16,marginLeft:12}} />
                        <Text style={{color:'#fff',paddingHorizontal:12,fontSize:11,fontFamily:'Quicksand'}}>
                            Add to collection
                        </Text>
                    </View>
                    <View style={{
                        height:36,
                        borderRadius:32,
                        backgroundColor:'rgba(255, 255, 255, 0.07)',
                        alignItems:'center',
                        flexDirection:'row'}}>
                        <Image source={require('../../assets/like.png')} style={{width:16,height:16,marginLeft:5}} />
                        <Text style={{color:'#fff',paddingHorizontal:8,fontSize:11,fontFamily:'Quicksand'}}>
                            Like
                        </Text>
                    </View>
                </View>
                {[{img: <Image source={require('../../assets/frame9.png')} style={{width:39,height:39,marginLeft:9,borderRadius:10}} />},
                {img: <Image source={require('../../assets/frame1.png')} style={{width:39,height:39,marginLeft:9,borderRadius:10}} />},
                {img: <Image source={require('../../assets/frame10.png')} style={{width:39,height:39,marginLeft:9,borderRadius:10}} />},
                {img: <Image source={require('../../assets/frame3.png')} style={{width:39,height:39,marginLeft:9,borderRadius:10}} />}].map((item,idx) => <View key={idx}
                    style={{
                        width:windowWidth-48,
                        height:56,
                        backgroundColor:'rgba(51, 55, 59, 0.37)',
                        borderRadius:10,
                        marginTop:25,
                        flexDirection:'row',
                        alignItems:'center'}}
                        >
                    {item.img}
                    <View style={{marginLeft:14}}>
                        <Text style={{fontSize:12,color:'#fff',fontWeight:'400',fontFamily:'Quicksand'}}>
                            Let me love you ~ Krisx
                        </Text>
                        <Text style={{fontSize:10,color:'#fff',fontWeight:'400',fontFamily:'Quicksand'}}>
                            Single
                        </Text>
                    </View>
                    
                    <View style={{marginLeft:80,alignItems:'center'}}>
                        <SimpleLineIcons name="options-vertical" size={14} color="#FACD66" />
                        <Text style={{fontSize:12,color:'#fff',fontWeight:'400',fontFamily:'Quicksand'}}>
                            4:17
                        </Text>
                    </View>
                </View>)}
                
            </ScrollView>
            
        </SafeAreaView>
    );
}

export default Album;