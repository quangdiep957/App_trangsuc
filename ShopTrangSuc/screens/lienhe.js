import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function lienhe({ navigation }) {
    return (
        <View style={styles.nen}>
            <ScrollView>
                <View>
                    <Text style={{
                        marginTop: 30, color: 'black', fontSize: 28, alignItems: 'center', fontWeight: "bold", textAlign: 'center',
                    }}>Liên Hệ</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Hỗ trợ Khách hàng mua online</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Tổng đài: 1800 6061</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>9-17h (thứ 2 - thứ 6) </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: saleonlin@PNJ.com </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, fontWeight: '300' }}>Địa chỉ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 25, backgroundColor: '#6B4747' }} />
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Chăm sóc khách hàng:</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 1800 6061</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: chamsockhachhangn@PNJ.com </Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Đặt đồng phục:</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Mr. Bơ</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 037.896.9551 (Zalo)</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: boxinhtrai@gmail.com </Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 25, backgroundColor: '#6B4747' }} />
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Văn phòng miền Bắc</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, fontWeight: '300' }}>Địa chỉ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 037.896.9335 (Zalo)</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Fax: +85.37.896.9331</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: boxinhtrai@gmail.com </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Website: www.PNJ.com</Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 25, backgroundColor: '#6B4747' }} />
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Văn phòng miền Nam</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, fontWeight: '300' }}>Địa chỉ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 037.896.9551 (Zalo)</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: boxinhtrai@gmail.com </Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 25, backgroundColor: '#6B4747' }} />
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Liên hệ làm Đại Lí</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, fontWeight: '300' }}>Địa chỉ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 037.896.9335 (Zalo)</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Fax: +85.37.896.9331</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, color: '#DF7B7B' }}>Email: boxinhtrai@gmail.com </Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Website: www.PNJ.com</Text>
                </View>
                <View style={{ width: 400, height: 1, marginTop: 25, backgroundColor: '#6B4747' }} />
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 20, marginLeft: 10, color: '#403636' }}>Nhà máy</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16, fontWeight: '300' }}>Địa chỉ: Phòng 301 Tòa nhà GP Invest, 170 La Thành, P. Ô Chợ Dừa, Q. Đống Đa, Hà Nội</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Điện thoại: 037.896.9335 (Zalo)</Text>
                    <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 16 }}>Fax: +85.37.896.9331</Text>
                </View>
                <View style={styles.button}>
                    <Button
                        title="Quay lại Trang chủ"
                        color="red"
                        onPress={() => navigation.navigate('trangchu')}
                    />
                    
                </View>
                <View style={{ width: 400, height: 20, marginTop: 25, backgroundColor: '#fff' }} />
            </ScrollView>
        </View>



    );
}

const styles = StyleSheet.create({
    nen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    button: {
        marginTop:15,
        width:380,
      
    },

});