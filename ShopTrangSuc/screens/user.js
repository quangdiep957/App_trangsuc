import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, PointPropType, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function user({ route, navigation }) {
  const { userName } = route.params;
  const { mobileNumber } = route.params;
  const { email } = route.params;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View styles={styles.ava}>
          
        </View>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 20 }}>{userName}</Text>
        </View>
      </View>
      <View style={{ width: 500, height: 20, marginTop: 20, backgroundColor: '#B0C4DE' }} />
      <View style={styles.main}>
          <View>
            
            <View style={styles.fb}>
              <FontAwesome name="phone" size={24} color="black" />
              <Text style={{ marginLeft: 10, marginTop: 3, fontSize: 15 }}>SĐT: </Text>
            </View>
            <View style={styles.fb}>
              <MaterialIcons name="email" size={24} color="black" />
              <Text style={{ marginLeft: 10, marginTop: 3, fontSize: 15 }}>EMAIL: </Text>
            </View>
            
          </View>
          <View style={{marginTop: 13, marginRight: 10}}>
            
            <Text style={{  fontSize: 15, marginLeft: 20, fontWeight: 'bold', marginBottom:24 }}>{mobileNumber}</Text>
            <Text style={{  fontSize: 15, marginLeft: 5, fontWeight: 'bold', marginBottom:24 }}>{email}</Text>
            
          </View>
      </View>
    
      <View style={{ width: 500, height: 1, marginTop: 30, backgroundColor: '#B0C4DE' }} />
      <View style={styles.button}>
        <Button
          title="Đăng xuất"
          color="red"
        onPress={() => navigation.navigate('login')}
        />
      </View>
      <View style={{ marginTop: 28, }}>
        <View style={styles.bottom}>
          <TouchableOpacity
            onPress={() => navigation.navigate('trangchu')}
          >
            <View style={styles.bottom2}>
              <AntDesign name="home" size={25} color="black" />
            </View>
          </TouchableOpacity>

          <View style={styles.bottom1}>
            <AntDesign name="search1" size={25} color="black" />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
          >
            <View style={styles.bottom1}>
              <AntDesign name="shoppingcart" size={25} color="black" />
            </View>
          </TouchableOpacity>

          <View style={styles.bottom1}>
            <AntDesign name="filetext1" size={25} color="black" />
          </View>
          <View style={styles.bottom1}>
            <AntDesign name="user" size={24} color="black" />
          </View>
        </View>
        <View style={styles.chubottom}>
          <TouchableOpacity>
            <View style={styles.chubottom1}>
              <Text>Trang Chủ</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.chubottom2}>
            <Text>Tìm Kiếm</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('cart')}
          >
            <View style={styles.chubottom3}>
              <Text>Giỏ Hàng</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.chubottom4}>
            <Text>Hồ Sơ</Text>
          </View>
          <View style={styles.chubottom5}>
            <Text>Tài khoản</Text>
          </View>
        </View>
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    margin: 10,
    alignItems: 'center'
  },
  header: {
    alignItems: 'center',
    marginTop: 10,
    // marginRight: 100,
  },
  ava: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop:120,
  },
  main: {
    flexDirection: 'row',
    marginTop: 15,
    // marginRight: 150,
    marginLeft: 120,
    marginBottom: -25
  },
  fb: {
    marginLeft: -100,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  button: {
    // marginTop: 20,
    width: 350,
    height: 40,
    backgroundColor: 'red',
    marginTop: 12,
    marginLeft: -5,
    borderRadius: 10,
  },
  bottom1: {
    marginLeft: 58,
    marginTop: 5,
  },
  bottom2: {
    marginLeft: 30,
    marginTop: 5,
  },
  chubottom: {
    flexDirection: 'row',
    marginTop: -30,
    marginLeft: 90,
  },
  chubottom1: {
    marginLeft: 12,
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
    width: 500,
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    marginLeft: 80,
    marginTop: 125,
   
  },
});