import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity, ScrollView, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function xacnhandonhang({ route, navigation }) {
    const { userName } = route.params;
    const { mobileNumber } = route.params;
    const { city } = route.params;
    const { phuong } = route.params;
    const { quan } = route.params;
    const { diachi } = route.params;
    return (
        <View style={styles.container}>
             <View>
                    <Text style={styles.text}>XÁC NHẬN ĐƠN HÀNG</Text>
                </View>
            <ScrollView>
            <View style={styles.thanhtren}>
                <TouchableOpacity onPress={() => navigation.navigate('infor')}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </TouchableOpacity>
               
                </View>
               
            
                <View style={{flexDirection:'row',height:40,borderColor:'red',borderWidth:1}}>
                    <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold', }}>1.Xác nhận đơn hàng</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('infor')}>
                          <Text style={{marginTop: 10, marginLeft: 180, color:'blue'}}>Thay đổi</Text>
                    </TouchableOpacity>
                </View>
                
              
                <Text style={{ margin: 5, marginLeft: 20, fontWeight: 'bold' }}>{userName}</Text>
                <Text style={{ margin: 5, marginLeft: 20, fontWeight: 'bold' }}>{mobileNumber}</Text>
                <Text style={{ margin: 5, marginLeft: 20, fontWeight: 'bold' }}>{diachi}-{phuong}-{quan}-{city}</Text>
                <View style={{flexDirection:'row',height:40,borderColor:'red',borderWidth:1}}>
              <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold', }}>2.Vận chuyển</Text>
              </View>
              
                <View style={{flexDirection:'row',marginTop: 10, marginBottom: 30,}}>
                    <Text style={{marginLeft: 20,}}>Phí vận chuyển</Text>
                    <View style={{marginTop: 2, marginLeft: 10,}}>
                         <AntDesign name="infocirlceo" size={17} color="blue" />
                    </View>
                    <Text style={{marginLeft: 230,}}>0đ</Text>
                </View>

                <View style={{flexDirection:'row',height:40,borderColor:'red',borderWidth:1}}>
                <Text style={{ marginLeft: 15, marginTop: 10, fontWeight: 'bold', }}>3.Phương thức thanh toán</Text>
                </View>
              
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, }}>
                    <Ionicons name="checkmark-circle" size={24} color="red" />
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ marginLeft: 10, marginTop: 5, }}>Thanh toán bằng VNPAY</Text>
                        <Image
                            style={{height:20,width:50,marginLeft: 135, marginTop: 5, }}
                            source={{uri:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd2w2SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--998573548f2a95e4b349ffbf42cfb623613039fd/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RW5KbGMybDZaVjkwYjE5bWFYUmJCMmtCcWpBPSIsImV4cCI6bnVsbCwicHVyIjoidmFyaWF0aW9uIn19--623b1a923c4c6ecbacda77c459f93960558db010/logo%20VNPAY-02.png"}}
                        />
                    </View>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, }}>
                    <Ionicons name="checkmark-circle" size={24} color="red" />
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ marginLeft: 10, marginTop: 5, }}>Thanh toán bằng MOMO</Text>
                        <Image
                            style={{height:20,width:20,marginLeft: 150, marginTop: 5, }}
                            source={{uri:"https://itviec.com/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBM0E3SHc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--98ad6550665270931a546757db0e58f65b0505bc/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdCem9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2RkhKbGMybDZaVjkwYjE5c2FXMXBkRnNIYVFJc0FXa0NMQUU9IiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--ee4e4854f68df0a745312d63f6c2782b5da346cd/MoMo%20Logo.png"}}
                        />
                    </View>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10, }}>
                    <Ionicons name="checkmark-circle" size={24} color="black" />
                    <View>
                        <Text style={{ marginLeft: 10, marginTop: 5, }}>Thanh toán khi nhận hàng (COD)</Text>
                    </View>
                </View>
                <View style={{ width: 400, height: 10, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{}}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 20, marginTop: 10, }}>Điểm Thưởng</Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, marginTop: 10, }}>Điểm Thưởng có thể dùng :500</Text>
                    <View style={{ marginLeft: 5, marginTop: 9, }}><AntDesign name="infocirlceo" size={14} color="black" /></View>
                </View>
                <View style={{ marginTop: 10, marginLeft: 20, flexDirection: 'row' }}>
                    <TextInput
                        style={styles.nhap}
                        placeholder="Điểm thưởng khả dụng..."
                        keyboardType="default"
                    />
                    <View style={styles.benphai}>
                        <Text style={{ color: 'white', marginLeft: 20, marginTop: 12, }}>Sử dụng</Text>
                    </View>
                </View>
                <View style={{ width: 400, height: 10, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{}}>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold', }}>Mã Voucher</Text>

                </View>
                <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
                    <TextInput
                        style={styles.nhap2}
                        placeholder="Voucher áp dụng..."
                        keyboardType="default"
                    />
                    <View style={styles.benphai2}>
                        <Text style={{ color: '#fff', marginLeft: 20, marginTop: 12, }}>Áp dụng</Text>
                    </View>
                </View>
                <View style={{ width: 400, height: 10, marginTop: 10, backgroundColor: '#D4CECE' }} />

                <View>
                    <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>Thanh Toán</Text>
                    <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>Tổng tiền hàng:</Text>
                        <Text style={{ marginLeft: 160, marginTop: 10, fontWeight: 'bold' }}>1.134.400đ</Text>
                    </View>
                    <View style={{ width: 400, height: 1, marginTop: 10, backgroundColor: '#D4CECE' }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, marginTop: 10, fontWeight: 'bold' }}>Tổng tiền thanh toán:</Text>
                        <Text style={{ marginLeft: 120, marginTop: 10, fontWeight: 'bold' }}>2.334.400đ</Text>
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="Hoàn Tất Đơn Hàng"
                            color="red"
                            onPress={() => navigation.navigate('success')}
                        />
                    </View>
                    <View style={{marginTop:100}}></View>

                </View>
            </ScrollView>
        </View>
    );
}

const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
    container: {
        marginTop: 30,

    },
    thanhtren: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    text: {
       textAlign:'center',
        marginTop: 20,
        fontWeight: 'bold',fontSize:20,
        color:'black'

    },
    nhap: {
        width: 250,
        height: 42,
        borderColor:'green',
        borderWidth: 1,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight:1,
        
       
    },
    nhap2: {
        width: 250,
        height: 42,
        borderColor:'orange',
        borderWidth: 1,
        borderBottomLeftRadius: 30,
        borderTopLeftRadius: 30,
        marginRight:1
       
    },
    benphai: {
        width: 100,
        height: 42,
        backgroundColor: 'green',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    benphai2: {
        width: 100,
        height: 42,
        backgroundColor: 'orange',
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    button: {
        width:350,
        height:40,
      
        marginTop:35,
        marginLeft:15,
        borderRadius:10,
      },

})