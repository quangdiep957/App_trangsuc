import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
export default function login({ navigation }) {
  return (
    <View style={styles.nen}>
      <View style={styles.contents}>
        <Text style={styles.text}>Đăng nhập</Text>
        <StatusBar style="auto" />
        <View style={styles.input}>
        <View style={{marginRight:10,}}>
            <AntDesign name="user" size={24} color="red" />
            </View>
        

          <TextInput
            placeholder="Email hoặc số điện thoại"
            keyboardType="default"
          />
          

        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        <View style={styles.input}>
            <View style={{marginRight:10,}}>
            <Feather name="key" size={24} color="red" />
            </View>
      

          <TextInput
            placeholder="Mật khẩu"
            keyboardType="default"
          />
        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        <View>
          <Text style={styles.chuduoi}>Quên mật khẩu?</Text>
          <View style={styles.button}>
            <Button
              title="Đăng nhập"
              color="red"
              onPress={() => navigation.navigate('trangchu')}
            />
          </View>
          <View style={{ width: 340, height: 1, marginTop: 10,marginLeft:30, backgroundColor: 'powderblue' }} />
          <View>
            <TouchableOpacity  onPress={() => navigation.navigate('register')}>
            <Text style={styles.sign}>Không có tài khoản? Đăng ký?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 50,
    color: 'black',
    fontSize: 28,
    alignItems: 'center',
    fontWeight: "bold",
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,

  },
  input: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 20,
  },
  contents: {
    marginTop: 120,
    width: 400,
    height: 330,
    backgroundColor: '#fff',
  },
  nen: {
    backgroundColor: '#fff',
    height: 700,
    alignItems: 'center',
  },
  chuduoi: {
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 215,
  },
  button: {
    width:350,
    height:40,
    backgroundColor:'red',
    marginTop:12,
    marginLeft:23,
    borderRadius:10,
  },
  sign: {
    marginLeft: 35,
    fontWeight: "bold",
    color: 'black',
    marginTop: 10,
  },
});