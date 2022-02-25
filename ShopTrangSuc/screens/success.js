import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


export default function success({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.thanhcong}
                    source={require("../image/icon-thanh-cong-300x300.png")}
                />
            </View>
            <View style={styles.title}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 35,
                    fontWeight: 'bold',
                    marginTop: 20,
                }}>Thành công !</Text>
            </View>
            <View>
                <Text style={{marginTop: 10, marginLeft: 20, fontSize: 16,}}>Đơn hàng của bạn đã được thêm thành công, để kiểm tra thông tin vui lòng truy cập "Đơn hàng của tôi" trong tab "Hồ sơ cá nhân"</Text>
            </View>
            <View style={styles.btn}>
                <Button
                    title="Quay trở về trang chủ"
                    color="green"
                    onPress={() => navigation.navigate('trangchu')}
                />
            </View>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        marginTop: 80,
    },
    thanhcong: {
        width: 200,
        height: 200,
        borderRadius: 500,
        marginLeft: 100,
        marginTop: -10,
    },
    btn: {
        width: 250,
        height: 40,
        borderRadius:50,
        marginTop:50,
        marginLeft: 65,
       
    },
})