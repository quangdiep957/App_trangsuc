import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import api from '../api';
import NumberFormat from 'react-number-format';

export default function App({ navigation }) {
    const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    
    api.all().then(data=> {
      setdataSource(data);
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
   });
  }, []);
  console.log(dataSource);
  const [dataSource1, setdataSource1] = useState([]);
  useEffect(() => {
    
    api.searchloai("nhẫn").then(data1=> {
      setdataSource1(data1);
    });
  }, []);
  console.log(dataSource1);
  const renderItem = ({item})=>{

    return(
        <View style={{height:'auto'}}>
                 <TouchableOpacity style={{backgroundColor:'#dddd',borderRadius:20,marginLeft:5,marginTop:10,height:280}}>
                    <Image
                        style={styles.sp}
                        source={{  uri:"http://shopson.somee.com/img/"+item.anh}}
                    />
                    <Text style={styles.name}>{item.tensp}</Text>
                  
                    <NumberFormat
                        value={item.giatien}
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'Giá Tiền:'}
                        renderText={value => <Text style={styles.price}>{<Text>{value} ₫</Text>}</Text>}/> 
                </TouchableOpacity>
      
               
        </View>    
        
    )
  }


  const renderItem1 = ({item})=>{
    return (
        <TouchableOpacity onPress={() => navigation.navigate('chitietsanpham', {
          da: item.id,
          })} >
          <View style={styles.flastlit}>
  
          <View style={styles.anhfl}>
            <Image
              style={styles.tinyLogo}
              source={{
                uri:"http://shopson.somee.com/img/"+item.anh
              }}
            />
           
          </View>
          <View>
  
            <Text style={styles.txt1}>{item.tensp}</Text>
            <NumberFormat
                        value={item.giatien}
                        displayType={'text'}
                        thousandSeparator={true}
                        renderText={value => <Text style={styles.price}>{<Text>{value} ₫</Text>}</Text>}/> 
          </View>
  
        </View>
        </TouchableOpacity>
  
        
      )

  }
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                 onPress={() => navigation.goBack()}
                >
                    <View style={styles.item}>
                        <AntDesign name="left" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name="md-search" size={24} color="black"/>
                </TouchableOpacity>

                <View style={styles.text}>
                    <Text style={styles.date}>Nhẫn</Text>
                </View>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Ionicons name="md-heart-outline" size={24} color="black" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <View style={styles.main}>
                <View style={styles.title}>
                    <Text style={styles.Nam}>10 sản phẩm</Text>
                </View>
                <View style={styles.option}>
                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <Text style={styles.op}>Bộ lọc</Text>
                            <View style={styles.arrow}>
                                <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.icon}>
                            <Text style={styles.op}>Sắp xếp</Text>
                            <View style={styles.arrow}>
                                <MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={24} color="black" />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ width: 500, marginTop: 10, backgroundColor: '#DDDDDD' }} />
            <View>
                <FlatList
                    horizontal={true}
                    data={dataSource}
                    renderItem={renderItem1}
                    keyExtractor={item => item.id}
                />
                 </View>
                <View style={styles.product}>
                    <FlatList
                      
                        data={dataSource1}
                        style={styles.scrollview}
                        renderItem={renderItem}
                        numColumns={2}
                        keyExtractor={item => item.id}
                       
                    />
                    
                    
                    
                    
                </View>
                <View style={{marginTop: -170, backgroundColor: '#DDDDDD' }} />

        </View>
    );
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        paddingTop: 15,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    header: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center',

    },
    text: {
        marginLeft: 90,
        marginRight: 100,

    },
    date: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 5,
        marginTop:20,
    },
    item: {
        marginRight: 6,
    },
    main: {
        flexDirection: 'row',
        marginTop: 5,
    },
    option: {
        flexDirection: 'row',
        marginLeft:-18,
    },
    icon: {
        flexDirection: 'row',
       
    },
    title: {
        marginLeft: 20,
        marginRight: 130,
    },
    txt: {
        height:50,
        marginTop:20,
        textAlign:'center',
        width:100,
        color: 'red',
        fontWeight: 'bold',
        
    },
    Nam: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    op: {
        marginTop: 6,
        // marginLeft: 6,
    },
    arrow: {
        marginTop: 3,
    },
    anhfl: {
        marginTop: 10,
        marginLeft: 10,
      },
    tinyLogo: {
        width: 50,
        height: 50,
        marginLeft: 15,
    },
    txt1:{
        
        fontSize:8,
        textAlign:'center',
        height:30
      },
      chuduoi: {
        textAlign:'center',
        color:'red',
        fontWeight:'bold'
      },
    scrollview: {
     
        marginBottom: 15,
    },
    sp: {
        width: 150,
        height: 150,
        marginTop:15,
        margin:8,
       
    },
    product: {
        // margin: 10,
        
        alignItems: 'center',
    },
    name: {
        marginTop:2,
        marginLeft: 10,
        width:180,
        height:60,
        fontSize: 15,
        fontWeight: 'bold',
    },
    price: {
        textAlign:'center',
        color: 'red',
        fontWeight: 'bold',
    },
    flastlit:{
        height:120,
        backgroundColor:'white',
        borderColor:'white',
        borderRadius:10,
        borderWidth:1,
        marginLeft:5,
        marginBottom:10,
        width:100
      },
});