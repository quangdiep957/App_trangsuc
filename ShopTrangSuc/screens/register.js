import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
export default function register({ navigation }) {
  const [txtUserName, onChangeUserName] = React.useState();
  const [txtEmail, onChangeEmail] = React.useState();
  const [txtmobile, onChangemobile] = React.useState();

  return (
    <View style={styles.nen}>
      <View style={styles.contents}>
        <Text style={styles.text}>Đăng ký</Text>
        <StatusBar style="auto" />
        <View style={styles.input}>
        <View style={{marginRight:10,}}>
            <AntDesign name="user" size={24} color="red" />
            </View>
        

          <TextInput
            placeholder="Họ và tên"
            keyboardType="default"
            onChangeText={onChangeUserName}
            value={txtUserName}
          />
          

        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        <View style={styles.input}>
            <View style={{marginRight:10,}}>
            <MaterialCommunityIcons name="email-check-outline" size={24} color="red" />
            </View>
      

          <TextInput
            placeholder="Email"
            keyboardType="default"
            onChangeText={onChangeEmail}
            value={txtEmail}
          />
          
        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        <View style={styles.input}>
            <View style={{marginRight:10,}}>
            <MaterialCommunityIcons name="mobile-phone" size={24} color="red" />
            </View>
      

          <TextInput
            placeholder="Số điện thoại"
            keyboardType="default"
            onChangeText={onChangemobile}
            value={txtmobile}
          />
          
        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        <View>
        <View style={styles.input}>
            <View style={{marginRight:10,}}>
            <AntDesign name="lock1" size={24} color="red" />
            </View>
      

          <TextInput
            placeholder="Mật khẩu"
            keyboardType="default"
          />
        </View>
        <View style={{ width: 300, height: 1, marginLeft: 30, backgroundColor: 'powderblue' }} />
        </View>
        <View>
         
          <View style={styles.button}>
            <Button
              title="Đăng ký"
              color="red"
              onPress={() => navigation.navigate('user', {userName: txtUserName, email: txtEmail, mobileNumber: txtmobile } )}
            />
          </View>
<View style={{ width: 340, height: 1, marginTop: 10,marginLeft:30, backgroundColor: 'powderblue' }} />
          <View>
            <Text style={styles.sign}>Đã có tài khoản? Đăng nhập.</Text>
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
  input3: {
    flexDirection: 'row',
    marginLeft: 35,
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
  button: {
    width:350,
    height:40,
    backgroundColor:'red',
    marginTop:30,
    marginLeft:23,
    borderRadius:10,
  },
  sign: {
    marginLeft: 140,
    fontWeight: "bold",
    color: 'black',
    marginTop: 10,
  },
});