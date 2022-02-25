import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView,TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function infor({ navigation }) {
    const [txtuserName, onChangeUserName] = React.useState();
    const [txtMobileNumber, onChangeMobileNumber] = React.useState();
    const [txtCity, onChangeCity] = React.useState();
    const [txtQuan, onChangeQuan] = React.useState();
    const [txtPhuong, onChangePhuong] = React.useState();
    const [txtdiachi, onChangediachi] = React.useState();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>THÔNG TIN ĐƠN HÀNG</Text>
            <View style={styles.main}>
           
                <View style={styles.product}>
                    <View style={styles.img}>
                        <Image
                            style={styles.ava}
                            source={require('../image/sbxmxmk000197-bong-tai-bac-dinh-da-pnjsilver-my-feeling.png')}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.shirt}>Bông tai Kim Cương</Text>
                            <View style={{ marginLeft: 160, }}>
                                <TouchableOpacity>
                                    <AntDesign name="delete" size={24} color="black" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.quantity}>
                            <View style={styles.size}>
                                <Text>Màu sắc:</Text>
                                <Text
                                    style={{borderRadius: 50,
                                        width: 20,
                                        height: 20,
                                        marginLeft: 5,
                                        backgroundColor:'gold'}}/>
                                <Text style={{ marginLeft: 10, }}>Chất Liệu: Kim Cương</Text>
                           
                            </View>
                        </View>
                        <Text style={{ color: 'red', }}>14.099.000 đ</Text>
                        <Text style={{marginRight: 8, }}>Số lượng :2</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 230, marginTop: -25, }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircleo" size={24} color="black" />
                            </TouchableOpacity>
                        
                            <TouchableOpacity>
                                <AntDesign name="pluscircleo" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: 340, marginLeft: 5, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
                <View style={styles.product}>
                    <View style={styles.img}>
                        <Image
                            style={styles.ava}
                            source={require('../image/YA126340_Desktop_1.jpg')}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.shirt}>Đồng hồ dây da</Text>
                            <TouchableOpacity>
                                <View style={{ marginLeft: 90, }}>
                                    <AntDesign name="delete" size={24} color="black" />
                                </View>
                            </TouchableOpacity>


                        </View>
                        <View style={styles.quantity}>
                            <View style={styles.size}>
                                <Text>Màu sắc:</Text>
                                <Text style={{borderRadius: 50,
                                        width: 20,
                                        height: 20,
                                        marginLeft: 5,
                                        backgroundColor:'black'}}
                                />
                                <Text style={{ marginLeft: 10, }}>Chất Liệu: Vàng</Text>
                            </View>
                        </View>
                        <Text style={{ color: 'red', }}>8.299.000 đ</Text>
                        <Text style={{marginRight: 8, }}>Số lượng :2</Text>
                        <View style={{ flexDirection: 'row', marginLeft: 230, marginTop: -25 }}>
                            <TouchableOpacity>
                                <AntDesign name="minuscircleo" size={24} color="black" />
                            </TouchableOpacity>
                            
                            <TouchableOpacity>
                                <AntDesign name="pluscircleo" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ width: 340, marginLeft: 5, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
                </View>
            <ScrollView>
                <View style={styles.main}>
                   
                        
                                <TextInput
                        style={styles.input}
                        onChangeText={onChangeUserName}
                        placeholder="Họ tên người nhận"
                        value={txtuserName}
                    />
                     <TextInput
                       style={styles.input}
                            placeholder="Số điện thoại:"
                            keyboardType="default"
                            onChangeText={onChangeMobileNumber}
                            value={txtMobileNumber}
                        />
                    
                    
                        <TextInput
                         style={styles.input}
                            placeholder="Tỉnh/Thành phố:"
                            keyboardType="default"
                            onChangeText={onChangeCity}
                            value={txtCity}
                        />
                  
                    
                        <TextInput
                         style={styles.input}
                            placeholder="Quận/Huyện:"
                            keyboardType="default"
                            onChangeText={onChangeQuan}
                            value={txtQuan}
                        />
                   
                 
                        <TextInput
                         style={styles.input}
                            placeholder="Phường/Xã:"
                            keyboardType="default"
                            onChangeText={onChangePhuong}
                            value={txtPhuong}
                        />
                    
                        <TextInput
                         style={styles.input}
                            placeholder="Địa chỉ chi tiết:"
                            keyboardType="default"
                            onChangeText={onChangediachi}
                            value={txtdiachi} 
                        />
                   
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'red', margin: 10 }}>* Lưu ý ghi rõ thông tin địa chỉ để tiện cho việc giao hàng, xin chân thành cảm ơn.</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="TIẾP TỤC"
                            color="red"
                            onPress={() => navigation.navigate('xacnhandonhang', { userName: txtuserName, diachi: txtdiachi, mobileNumber: txtMobileNumber, city: txtCity, phuong: txtPhuong, quan:txtQuan  })}
                        />
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
    input: {
        height: 40,
        width:'94%',
        borderWidth: 1,
        padding: 10,
        marginTop: 15,
    },
    container: {
        marginTop: 60,
        marginLeft:20,
    },
    text: {
         color: 'black',
        fontSize: 20,
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: 10,
    },
    button: {
        width: 350,
        height: 40,
     
        borderRadius: 50,
    },
    ava: {
        marginTop: 10,
        width: 80,
        height: 80,
        backgroundColor:'white',
        borderRadius:40
    },
    product: {
        flexDirection: 'row',
        marginTop: 10,
    },
    content: {
        marginTop: 15,
        marginLeft: 10,
    },
    
    size: {
        flexDirection: 'row',
    },
    shirt: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    tongtinh: {
        marginTop: 10,
        margin: 10,
    },
});