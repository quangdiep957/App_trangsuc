import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, View, Button, PointPropType, Image, TouchableOpacity, FlatList, ScrollView,TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import api from '../api';
import NumberFormat from 'react-number-format';


export default function trangchu({ navigation }) {
  const [dataSource, setdataSource] = useState([]);
  const [dataid, setdataid] = useState('AboutReact');
  useEffect(() => {
    
    api.all().then(data=> {
      setdataSource(data);
      
    }).catch((error)=>{
      console.log("Api call error");
      alert(error.message);
   });
  }, []);
  //console.log(dataSource);
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

  const renderItem = ({ item }) => (
    <Item title={item.title} anh={item.anh} />

  );
  return (

    <View style={styles.container}>

      <Text style={styles.text}> Trang Chủ </Text>
      <View style={styles.thanhtren}>
        <View style={styles.iconmess}>
          <MaterialCommunityIcons name="email-outline" size={24} color="black" />
          <View style={styles.seach}>
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>
        <View style={styles.logopnj}>
          <Image
            style={styles.logoha}
            source={{uri:"https://cdn.pnj.io/images/logo/pnj.com.vn.png"}}
          />
        </View>
        <View style={styles.heart}><AntDesign name="hearto" size={24} color="black" />
          <View style={styles.bag}>
            <SimpleLineIcons name="bag" size={24} color="black" />
          </View>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.menungang}>

          <TouchableOpacity onPress={() => navigation.navigate('trangchu')}>
            <Text style={styles.mn1}>Trang Chủ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('watch')}>
            <Text style={styles.mn1}>Đồng hồ</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('earring')}>
            <Text style={styles.mn1}>Bông tai</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ring')}>
            <Text style={styles.mn1}>Nhẫn</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('gioithieu')}>
            <Text style={styles.mn1}>Giới Thiệu</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('lienhe')}>
            <Text style={styles.mn1}>Liên Hệ</Text>
          </TouchableOpacity>
          
        </View>
      </ScrollView>

      
      <FlatList
      horizontal={true}
              data={dataSource}
              keyExtractor = {item => item.id}
              renderItem = {renderItem1}
          />
          
      <ScrollView>
        <View><Text style={{fontSize:20,fontWeight:'bold',textAlign:'center'}}>Sản Phẩm nổi Bật</Text></View>
        <View style={styles.hang1}>

          <Image
            style={styles.hinhanh5}
            source={require("../image/gd0000y000795-day-chuyen-vang-18k-pnj.png")}
          />
          <Text style={styles.textchung}>Dây chuyền Vàng 18K PNJ 0000Y000833</Text>

        </View>

        <View><Text style={styles.textgia}>26.075.000đ</Text></View>


        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang2}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/0000x000036-day-chuyen-vang-y-18k-pnj.png")}
          />
          <Text style={styles.textchung}>Dây chuyền Vàng 18K PNJ 0000Y000123</Text>
        </View>
        <View><Text style={styles.textgia}>25.000.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/0000y000833-day-chuyen-vang-18k-pnj.png")}
          />
          <Text style={styles.textchung}>Dây chuyền Vàng 18K PNJ 0000Z12</Text>
        </View>
        <View><Text style={styles.textgia}>24.000.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/0000w060953-day-chuyen-vang-trang-y-18k-pnj-001.png")}
          />
          <Text style={styles.textchung}>Dây chuyền Kim Cương PNJ 0000Y000833</Text>
        </View>
        <View><Text style={styles.textgia}>45.050.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/gd0000w000281-day-chuyen-vang-trang-18k-pnj-01.png")}
          />
          <Text style={styles.textchung}>Dây chuyền vàng trắng Ý</Text>
        </View>
        <View><Text style={styles.textgia}>25.000.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/gd0000w000233-day-chuyen-vang-trang-y-18k-pnj-kieu-day-bi-001.png")}
          />
          <Text style={styles.textchung}>Dây chuyền vàng Ý</Text>
        </View>
        <View><Text style={styles.textgia}>9.500.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/FTW6035_Desktop_1.jpg")}
          />
          <Text style={styles.textchung}>Đồng hồ thông minh nữ</Text>
        </View>
        <View><Text style={styles.textgia}>7.250.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/FTW6036_Desktop_1.jpg")}
          />
          <Text style={styles.textchung}>Đồng hồ thông minh Michael Kors Nữ</Text>
        </View>
        <View><Text style={styles.textgia}>10.250.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />

        <View style={styles.hang3}>
          <Image
            style={styles.hinhanh5}
            source={require("../image/MTS-100D-1AVDF_Desktop_1.jpg")}
          />
          <Text style={styles.textchung}>Đồng hồ Casino Nam</Text>
        </View>
        <View><Text style={styles.textgia}>2.500.000đ</Text></View>

        <View style={{ width: 230, height: 1, marginTop: 30, marginLeft: 120, backgroundColor: 'skyblue' }} />
        <View style={{ width: 400, height: 320, backgroundColor: '#fff' }} />
      </ScrollView>
     
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => navigation.navigate('trangchu')}>
          <View style={styles.bottom2}>
            <AntDesign name="home" size={25} color="black" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View style={styles.bottom1}>
            <AntDesign name="search1" size={25} color="black" />
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <View style={styles.bottom1}>
            <AntDesign name="shoppingcart" size={25} color="black" />
          </View>
          </TouchableOpacity>
         
          <View style={styles.bottom1}>
            <AntDesign name="filetext1" size={25} color="black" />
          </View>
          <View style={styles.bottom1}>
            <AntDesign name="qrcode" size={25} color="black" />
          </View>
        </View>

        <View style={styles.chubottom}>
        <TouchableOpacity onPress={() => navigation.navigate('trangchu')}>
          <View style={styles.chubottom1}>
            <Text>Trang Chủ</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.chubottom2}>
            <Text>Tìm Kiếm</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('cart')}>
          <View style={styles.chubottom3}>
            <Text>Giỏ Hàng</Text>
          </View>
          </TouchableOpacity>
          <View style={styles.chubottom4}>
            <Text>Hồ Sơ</Text>
          </View>
          <View style={styles.chubottom5}>
            <Text>Cấu Hình</Text>
          </View>
        </View>

      
    </View>

  );
}
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },

  text: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#635555',
    marginLeft: 5,
  },
  logoha: {
    width: 150,
    height: 60,
    marginLeft: 30,
  },
  thanhtren: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 10,
  },
  iconmess: {
    flexDirection: 'row',
    marginTop: 23,
  },
  heart: {
    flexDirection: 'row',
    marginTop: 23,
    marginLeft: 60,
  },
  seach: {
    marginLeft: 10,
    marginRight: 56,
  },
  bag: {
    marginLeft: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginLeft:15
  },
  anhfl: {
    marginTop: 10,
    marginLeft: 10,
  },
  chuduoi: {

    textAlign:'center',
    color:'red',
    fontWeight:'bold'
  },
  hang1: {
    flexDirection: 'row',
    marginTop: 15,
    width: 200,
  },
  hang2: {
    flexDirection: 'row',
    marginTop: 15,
    width: 200,
  },
  hang3: {
    flexDirection: 'row',
    marginTop: 15,
    width: 200,
  },
  textchung: {
    marginTop: 25,
    marginLeft: 25,
    fontSize: 15,
  },
  textgia: {
    color: 'red',
    fontSize: 16,
    marginLeft: 130,
    marginTop: -35,
    fontWeight: 'bold',
  },

  hinhanh5: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  hang4: {
    flexDirection: 'row',
    marginTop: 300,
    width: 200,
  },
  bottom1: {
    marginLeft: 55,
    marginTop: 5,
  },
  bottom2: {
    marginLeft: 15,
    marginTop: 5,
  },
  chubottom: {
    flexDirection: 'row',
    marginTop: -30,
  },
  chubottom1: {
    marginLeft: 1,
    marginTop: 2,
  },
  chubottom2: {
    marginLeft: 20,
    marginTop: 2,
  },
  chubottom3: {
    marginLeft: 27,
    marginTop: 2,
  },
  chubottom4: {
    marginLeft: 25,
    marginTop: 2,
  },
  chubottom5: {
    marginLeft: 33,
    marginTop: 2,
  },
  hinhanh5: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  bottom: {
    width: 400,
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    marginTop: -345,
  },
  menungang: {
    flexDirection: 'row',
    marginTop: 10,

    height: 30,
  },
  mn1: {
    marginLeft: 30,
    fontWeight: 'bold',
    color: '#B67777',

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
  txt1:{
    
    fontSize:8,
    textAlign:'center',
    height:30,
    color:'blue',
    fontSize:10
  },

  price: {
    textAlign:'center',
    color: 'red',
    fontWeight: 'bold',
    
},
});
