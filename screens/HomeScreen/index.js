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
import Ionicons from '@expo/vector-icons/Ionicons';





export default Home = () => {
    return(
        <SafeAreaView style={{
            flex:1,
            backgroundColor: '#1E1E1E'
        }}>
            <ScrollView style={{marginTop:30.75}} showsVerticalScrollIndicator={false}>
               <View style={{marginHorizontal:24}}>
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
                            color:'#fff',fontSize:12, paddingTop:32, fontWeight:'400', fontFamily:'Quicksand'
                        }}>
                            Currated playlist
                        </Text>
                        <Image source={require('../../assets/design.png')} style={{
                            width:167.6, height:167.6,tintColor:'#fff', alignSelf:'flex-end',position:'absolute'
                        }}/>
                        <View style={{top:236}}>
                            <Text style={{
                                fontSize:35, color:'#fff', fontWeight:'700', fontFamily:'Quicksand'
                            }}>
                                R & B Hits
                            </Text>
                            <Text style={{
                                fontSize:14, color:'#fff', 
                                fontWeight:'400', lineHeight:16.8,
                                fontFamily:'Quicksand'
                            }}>
                                All mine, Lie again, Petty call me everyday,
                                Out of time, No love, Bad habit,
                                and so much more
                            </Text>
                        </View>
                    </View>
               </View>

               <View style={{paddingTop:47}}>
                <Text style={{color:'#fff',fontSize:20,fontWeight:'700',fontFamily:'Quicksand'}}>Top charts</Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[{image:<Image source={require('../../assets/frame1.png')} style={{width:108, height:99, marginTop:15}}/>,
                    categoty: 'Golden age of 80s', author:'Sean swadder',time:'2:34:45'},

                    {image:<Image source={require('../../assets/frame2.png')} style={{width:108, height:99, marginTop:15,borderRadius:10}}/>,
                    categoty: 'Reggae “n” blues', author:'Sean swadder',time:'2:34:45'},

                    {image:<Image source={require('../../assets/frame1.png')} style={{width:108, height:99, marginTop:15}}/>,
                    categoty: 'Golden age of 80s', author:'Sean swadder',time:'2:34:45'}].map((item, idx) => <View key={idx} style={{
                        borderRadius:10,
                        backgroundColor:'#1A1E1F',
                        marginTop:17,
                        marginRight:17,
                        borderWidth:1
                    }}>
                        <View style={{marginLeft:14, flexDirection:'row'}}>
                            <View style={{paddingRight:70}}>
                                {item.image}
                                <Text style={{
                                    color:'#fff',fontSize:17,fontWeight:'400',paddingTop:15,
                                    fontFamily:'Quicksand'
                                    }}>
                                        {item.categoty}
                                </Text>
                                <Text style={{
                                    color:'rgba(255, 255, 255, 0.5)',fontSize:12,fontWeight:'400',
                                    paddingTop:6,fontFamily:'Quicksand'
                                    }}>
                                        {item.author}
                                </Text>
                                <Text style={{
                                    color:'rgba(255, 255, 255, 0.5)',fontSize:12,fontWeight:'400',
                                    paddingTop:24,paddingBottom:23,fontFamily:'Quicksand'
                                }}>
                                        {item.time}
                                </Text>
                            </View>
                            <View style={{
                                width:37,height:37,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.11)',
                                borderRadius:20,marginTop:15,marginRight:14
                                }}>
                                    <Ionicons name="play" size={14} color="#FACD66" />  
                            </View>
                        </View>
                    </View>)}
                    
                </ScrollView>
               </View>

               <View style={{paddingTop:47,marginBottom:82}}>
                <Text style={{
                    color:'#fff',fontSize:20,fontWeight:'700',fontFamily:'Quicksand'
                    }}>
                        New releases.
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {[{img:<Image source={require('../../assets/frame3.png')} style={{width:153,height:153}} />},
                    {img:<Image source={require('../../assets/frame4.png')} style={{width:153,height:153}} />},
                    {img:<Image source={require('../../assets/frame5.png')} style={{width:153,height:153}} />}].map((item, idx) => <View key={idx} style={{
                        width:153,
                        height:153,
                        borderRadius:10,
                        backgroundColor:'#1A1E1F',
                        marginTop:17,
                        marginRight:30
                    }}>
                        {item.img}
                    </View>)}
                    
                </ScrollView>
               </View>
            </View>
               <View style={{
                width:windowWidth,
                height:125,
                backgroundColor:'rgba(255, 255, 255, 0.1)',
                position:'absolute',
                bottom:'-0.08%',
                flexDirection:'row'
                // alignItems:'center'
                // borderWidth:1,
                // borderColor:'#1D2123'
               }}>
                    <View style={{marginLeft:30}}>
                        <Image source={require('../../assets/frame2.png')} 
                        style={{width:57.41,height:57.41,borderRadius:10,marginTop:33.79,marginBottom:33.79}} 
                        />  
                    </View>

                    <View>
                        <Text style={{
                            color:'#fff',fontSize:16.4,fontWeight:'700',paddingTop:42.65,
                            fontFamily:'Quicksand'
                            }}>
                                Seasons in
                        </Text>
                        <Text style={{
                            color:'rgba(255, 255, 255, 0.44)',fontSize:11.72,fontWeight:'700',paddingTop:3.43,
                            fontFamily:'Quicksand'
                            }}>
                                James
                        </Text>
                    </View>

                    <View>
                        <View style={{
                            width:37,height:37,borderWidth:1,borderColor:'rgba(255, 255, 255, 0.11)',
                            borderRadius:20,marginTop:15,marginRight:14,backgroundColor:'#FACD66',
                            justifyContent:'center',alignItems:'center'
                            }}>
                                <Ionicons name="play" size={16} color="#fff" /> 
                        </View>
                    </View>
                    <Ionicons name="play-skip-forward-sharp" size={20} color="#fff" />  

               </View>
            </ScrollView>
        </SafeAreaView>
    )
}