import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView, Button } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
           <Text style={{textAlign:"center",fontWeight:'bold',fontSize:30}}>Giỏ Hàng</Text>
            <View style={{ width: 500, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
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
                <View style={{ width: 300, marginLeft: 40, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
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
                <View style={{ width: 300, marginLeft: 40, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
                <View style={styles.product}>
                    <View style={styles.img}>
                        <Image
                            style={styles.ava}
                            source={require('../image/sbxmmxh060000-bong-tai-bac-pnjsilver-01.png')}
                        />
                    </View>
                    <View style={styles.content}>
                        <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.shirt}>Nhẫn Kim Cương</Text>
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
                                        backgroundColor:'white'}}
                               
                                />
                                <Text style={{ marginLeft: 10, }}>Chất Liệu: Vàng Trắng</Text>
                            
                            </View>
                        </View>
                        <Text style={{ color: 'red', }}>20.500.000 đ</Text>
                        <Text style={{ marginRight: 8, }}>Số lượng :2</Text>
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
                <View style={{ width: 300, marginLeft: 40, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
                <View style={styles.tongtinh}>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontWeight: 'bold', }}>Số lượng: </Text>
                        <Text style={{ marginLeft: 260, color: 'red', fontWeight: 'bold' }}>3</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontWeight: 'bold', }}>Tổng giá bán: </Text>
                        <Text style={{ marginLeft: 180, color: 'red', fontWeight: 'bold' }}>1.847.000đ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                        <Text style={{ fontWeight: 'bold', }}>Giảm giá: </Text>
                        <Text style={{ marginLeft: 260, color: 'red', fontWeight: 'bold' }}>0đ</Text>
                    </View>
                </View>
                <View style={{ width: 500, height: 1, marginTop: 10, backgroundColor: '#DDDDDD' }} />
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10, }}>Tạm tính: </Text>
                    <Text style={{ fontWeight: 'bold', color: 'red', marginTop: 16, marginLeft: 197 }}>1.847.00đ </Text>
                </View>
                <View style={styles.btn}>
                
                    <Button
                        title="ĐẶT HÀNG"
                        color="red"
                        onPress={() => navigation.navigate('infor')}
                    />
                
                </View>
                


            </View>
        </View>
    );
};

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginLeft:20,
    },
    ava: {
        marginTop: 10,
        width: 80,
        height: 80,
        borderRadius:40,
        backgroundColor:'white'
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
    btn: {
        marginTop:45,
        width:300,
        height:40,
      
        marginLeft:29,
    }

});