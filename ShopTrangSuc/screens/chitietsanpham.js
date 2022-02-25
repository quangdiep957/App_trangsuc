
import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, PointPropType, Image, TouchableOpacity, FlatList, ScrollView,Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NumberFormat from 'react-number-format';


import api from '../api';


export default function chitietsanpham({navigation,route}) {
       
    const [dataSource, setdataSource] = useState([]);
    useEffect(() => {
      
      api.detail(route.params.da).then(data=> {
        setdataSource(data);
      }).catch((error)=>{
        console.log("Api call error");
        alert(error.message);
     });
    }, []);

    return(
                <View style={{flex: 1,backgroundColor:'#fff'}}>
                  <View style={{height:60, backgroundColor:"#000000e5"}}/>
                  <View>
                    {/* Head */}
                    <View style={styles.mainMenu}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <Icon.Button name="search" color='black' backgroundColor='#e5f9fa' > </Icon.Button>
                      </View>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                          <TouchableOpacity onPress ={() => {navigation.navigate('trangchu'); }} >
                              <Text style={{fontSize:17,fontWeight:'bold',textTransform:'uppercase',paddingLeft:20,color:'black'}}>Chi tiết sản phẩm</Text>
                          </TouchableOpacity>
                      </View>
            
                      <View style={{flexDirection:'row'}} >
                          <Icon.Button name="shopping-cart" color='black' backgroundColor='#e7fbff' onPress ={() => {navigation.navigate('cart'); }} > </Icon.Button> 
                          <Icon.Button name="user" color='black' backgroundColor='#e5f9fa' onPress ={() => {navigation.navigate('login'); }} > </Icon.Button>          
                      </View>
                    </View>
                    {/* End  Head */}
            
                  <ScrollView>
                    
                    <View style={{top:0,padding:10}}>
                      <Text style={styles.diachitrang}>Trang Chủ /  </Text>
                        <ScrollView
                         pagingEnabled horizontal style={styles.scollvTop}
                        >
                           {
                           
                               <Image
                                 
                                  source={{uri:"http://shopson.somee.com/img/"+dataSource.anh}}
                                  style={styles.imgSlider}
                               />
                            
                           }
                        </ScrollView>
                      
                    </View>
                    <View style={{top:0,padding:20}}>
                     
                      <View style={{top:20,flexDirection:'row',justifyContent:'space-between'}}>
                          <Text style={styles.thongtinSP}>{dataSource.tensp}</Text>
                      </View>
                      <View style={{top:20,flexDirection:'row'}}>
                      <Text style={styles.thongtinSP}>Giá tiền:</Text>
                      <NumberFormat
                        value={dataSource.giatien}
                        displayType={'text'}
                        thousandSeparator={true}
                      
                        renderText={value => <Text style={{color:'red',marginLeft:20,marginTop:3,fontSize:20}}>{<Text>{value} ₫</Text>}</Text>}/> 
                      </View>
                      <View style={{marginTop:30,flexDirection:'row',justifyContent:'flex-start',}}>
                                        <Text style={{fontSize:17,fontWeight:'400',flex:0.3}}>Màu sắc</Text>
                                        <View style={{marginTop:-12}}>
                                            <Text style={{width:30,height:30,borderRadius:30,backgroundColor:'gray',marginTop:10}} />
                                        </View>
                                    </View>
                      <View style={{marginTop:15,flexDirection:'row',justifyContent:'flex-start'}}>
                          <Text style={{fontSize:17,fontWeight:'400',flex:0.3}}>Số lượng</Text>
                          <View style={{flexDirection:'row',flex:0.3}}>
                                <TouchableOpacity style={{width:30,height:30,backgroundColor:'#0da9c4',justifyContent:'center',alignItems:'center'}} onPress ={() => {navigation.navigate('ChitietSanPham'); }} >
                                  <Text style={{fontSize:20,}}>-</Text>
                                </TouchableOpacity>
                                <View style={{width:30,height:30,backgroundColor:'#fff',justifyContent:'center',alignItems:'center',borderTopWidth:1,borderBottomWidth:1,borderColor:'#0da9c4'}}>
                                  <Text>5</Text>
                                </View>
                                <TouchableOpacity style={{width:30,height:30,backgroundColor:'#0da9c4',justifyContent:'center',alignItems:'center'}} onPress ={() => {navigation.navigate('ChitietSanPham'); }} >
                                  <Text style={{}}>+</Text>
                                </TouchableOpacity>
                          </View>
                      </View>
                      
                      <View style={styles.khuyenmai}>
                            <Text style={styles.dicItem,{fontWeight:'bold',fontSize:13}}>Khuyến mại:</Text>
                            <Text style={styles.dicItem}>  • Mua một tặng một</Text>
                            <Text style={styles.dicItem}>  • Giảm 30% đơn hàng</Text>
                            <Text style={styles.dicItem}>  • Giảm 50% phí ship</Text>
                      </View>
                      <TouchableOpacity style={styles.bottomButtonCart,styles.thanhtoan} onPress ={() => {navigation.navigate('GioHang'); }} >
                              <Text style={styles.TextButton}>Mua Ngay</Text>
                      </TouchableOpacity>
                      <View style={{top:20}}>
                            <Text style={styles.dicItem,{fontWeight:'bold',fontSize:20}}>Mô tả:</Text>
                            <Text style={styles.dicItem}> Thương hiệu: {dataSource.nhacc}</Text>
                            <Text style={styles.dicItem}> Mã Sản Phẩm: {dataSource.id}</Text>
                            <Text style={styles.dicItem}> Size gọng: 51-23-145</Text>
                            <Text style={styles.dicItem}> Chất liệu :{dataSource.loai}</Text>
                            <Text style={styles.dicItem}> Thể loại :{dataSource.loaisp}</Text>
                            <Text style={styles.dicItem}> Chống tia cực tím UV 400: Có</Text>
                            <Text style={styles.dicItem}> Xuất xứ: Italia</Text>
                            <Text style={styles.dicItem}> Mô tả: {dataSource.mota}</Text>
                            <Image  style={{width:420,height:150,marginTop:30,marginRight:-30,marginLeft:-20}} source={require('../image/giaohangnhanh.jpg')}/>
                      </View>
                    </View> 
                    {/*Best Salers */}
                    <View style={{marginTop:20}}>
                      <Text style={{marginBottom:10,fontSize:20,fontWeight:'bold',textTransform:'uppercase',alignSelf:'center'}}>Sản phẩm khác</Text>
                      <ScrollView horizontal
               showsHorizontalScrollIndicator = {false}
               contentContainerStyle = { {}}>
               
                  <TouchableOpacity>
                      <View style ={styles.ItemBestSaler}>
                        
                        <View style={{width:150, alignItems:'center',paddingHorizontal:5, paddingVertical:5}}>
                            <Image  style={{width:80,height:50,}}     source={{uri:"http://shopson.somee.com/img/"+dataSource.anh}}/>
                            <Text style={styles.NameItems}>{dataSource.tensp}</Text>
                        </View>
                        <View style={styles.ViewPriceLove}>
                            <Text style={styles.Price}>{dataSource.giatien}đ</Text>
                            
                        </View>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                      <View style ={styles.ItemBestSaler}>
                        
                        <View style={{width:150, alignItems:'center',paddingHorizontal:5, paddingVertical:5}}>
                            <Image  style={{width:80,height:50,}}     source={{uri:"http://shopson.somee.com/img/"+dataSource.anh}}/>
                            <Text style={styles.NameItems}>{dataSource.tensp}</Text>
                        </View>
                        <View style={styles.ViewPriceLove}>
                            <Text style={styles.Price}>{dataSource.giatien}đ</Text>
                            
                        </View>
                      </View>
                  </TouchableOpacity>
              
               </ScrollView>
                    </View>
                   
                    <Text style={{alignSelf:'center',marginLeft:30,marginRight:30}}>© Copyright 2021 KinhMat.com. All Right Reserved </Text>
                    <Text style={{alignSelf:'center',marginLeft:50,marginRight:50}}>Privacy Policy   |   Terms & Conditions </Text>
            
                      {/*END   Best Salers */}
                      <View style={{height:150}}></View>
                
                </ScrollView>
                    {/* Button ADD TO CART */}
                    {/* <View style={{}}>
                        <TouchableOpacity onPress ={() => {navigation.navigate('HomeScreen'); }} >
                          <View style={{backgroundColor:'black',height:45,alignItems:'center',justifyContent:'center',}}>
                            <Text style={{fontSize:25,fontWeight:'bold',color:'#fff',textTransform:'uppercase',position:'absolute'}}>Add To Cart</Text></View>
                        </TouchableOpacity>
                    </View> */}
                  </View>
              </View>
              

    );
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    mainMenu:{
        justifyContent:'space-between',flexDirection:'row',paddingLeft:15,paddingRight:15,
        borderBottomColor:'#d1d1d1',
        borderBottomWidth:1,
        // backgroundColor:"#e7fbff",
        backgroundColor:"#e5f9fa",
        height: 50
      },
      dicItem:{
        fontSize:16,fontWeight:'400',paddingTop:10
    
      },
      TextButton:{
        color: '#fff',
      },
      bottomButtonCart:{
        padding:10,
        height:30,justifyContent:'center',alignItems:'center',
      },
      thanhtoan:{
        backgroundColor:'#0da9c4',
        justifyContent:'center',
        alignItems:'center',
        padding:13,
        marginTop:15,
        borderRadius:4
      },
      diachitrang:{justifyContent:'center',alignSelf:'center',padding:10},
      scollvTop:{width:400,height:150,top:70,marginBottom:80},
      imgSlider:{width:425,height:150,resizeMode:'contain',marginLeft:-20},
      dotSlider:{flexDirection:'row',alignSelf:'center',position:'absolute',bottom:0},
      thongtinSP:{fontSize:23,fontWeight:'400'},
      khuyenmai:{top:20,marginBottom:20,backgroundColor:'#e8f7fe',paddingBottom:20,paddingTop:20,marginLeft:-20,marginRight:-20,paddingLeft:20},
      ItemBestSaler:{
        backgroundColor:'#fff',
        height:170,width:180,borderRadius:15,padding:15,marginLeft:10
      },
      NameItems:{
        fontSize:15,color:'black',
        marginTop:10
      },
      ViewPriceLove:{
        justifyContent:'center',alignItems:'center',top:5,
        alignSelf:'center',
        backgroundColor:'brown',
        width:100,
        height:30,
        borderRadius:5
      },
      Price:{
        fontSize:20,color:'#fff', fontWeight:'bold',
      }, 
    
    })
    
