import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, AsyncStorage } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function gioithieu({ navigation }) {
    return (
        <View style={styles.nen}>
            <ScrollView>
                <View>
                    <Text style={{
                        marginTop: 30, color: 'black', fontSize: 28, alignItems: 'center', fontWeight: "bold", textAlign: 'center',
                    }}>Giới Thiệu</Text>
                </View>
                <View>
                    <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10, color: '#403636' }}>PNJ là thương hiệu hàng đầu tại Việt Nam trong lĩnh vực chế tác và bán lẻ trang sức bằng vàng, bạc, đá quý. Sản phẩm PNJ ngày càng được các nước tại thị trường Châu Á và Châu Âu ưu chuộng.</Text>
                    <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10, color: '#403636' }}>Hiện tại, PNJ Group có gần 7000 nhân viên với hệ thống bán sỉ, và gần 400 cửa hàng bán lẻ trải rộng trên toàn quốc; Công ty PNJP có công suất sản xuất đạt trên 4 triệu sản phẩm/năm, được đánh giá là một trong những nhà máy chế tác nữ trang lớn nhất khu vực Châu Á với đội ngũ gần 1.500 nhân viên.</Text>
                    <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10, color: '#403636' }}>Trải qua 33 năm hình thành và phát triển, PNJ đã đạt đươc nhiều thành tựu đáng kể: thuộc Top 500 nhà bán lẻ hàng đầu Châu Á Thái Bình Dương, Giải thưởng Chất lượng Châu Á Thái Bình Dương, Thương hiệu quốc gia, Top 100 Môi trường làm việc tốt nhất Việt Nam, Môi trường làm việc tốt nhất châu Á, Vietnam HR Awards 2020 …</Text>
                    <Image
                        style={styles.hinh}
                        source={require("../image/GT1.jpg")}
                    />
                </View>
                
                <View>
                    <Image
                        style={styles.hinh}
                        source={require("../image/GT2.jpg")}
                    />
                    
                </View>
                
                <View>
<Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10, color: '#403636' }}>Với những giá trị cốt lõi mà PNJ đã theo đuổi, PNJ đã sở hữu được nguồn nhân lực có tác phong làm việc chuyên nghiệp, hiệu quả lao động cao và hơn cả là mối gắn kết nhân viên với tổ chức. Cơ sở vật chất được trang bị hiện đại bảo đảm nhân viên được làm việc trong điều kiện tốt nhất. Ngoài ra công ty còn trang bị thêm phòng tập GYM và Yoga giúp người lao động tái tạo sức lao động sau một ngày làm việc.</Text>

                </View>
                
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20, marginLeft: 10, color: 'red' }}>ĐÀO TẠO HỘI NHẬP</Text>
                    <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Nhằm giúp nhân viên mới hội nhập nhanh chóng vào môi trường làm việc và nắm bắt công việc hiệu quả nhất, tất cả nhân sự mới đều được hướng dẫn hội nhập.

Nhân viên làm việc tại hệ thống cửa hàng sẽ được tham gia các lớp đào tạo về kiến thức sản phẩm, kỹ năng/nghiệp vụ chuyên môn theo lộ trình đào tạo hội nhập dành cho từng vị trí công việc.

Nhân viên làm việc tại các bộ phận/phòng ban tùy từng vị trí cụ thể sẽ được lên kế hoạch tham gia các lớp đào tạo các kiến thức, kỹ năng/nghiệp vụ chuyên môn của vị trí đảm trách.

Nhân viên có kết quả công việc tốt và thể hiện năng lực quản lý sẽ có cơ hội thăng tiến</Text>
                </View>
                <View>
                    <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20, marginLeft: 10, color: 'red' }}>ĐÀO TẠO – PHÁT TRIỂN</Text>
                    <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Nhân viên có kết quả công việc tốt và thể hiện năng lực quản lý sẽ có cơ hội thăng tiến lên các vị trí cao hơn thông qua việc đề bạt và xem xét của các cấp quản lý (nhằm đảm bảo có cơ hội cho vị trí mới), hoàn thành các nội dung đào tạo tương ứng và được đánh giá đạt qua các giai đoạn đào tạo.</Text>
                    <Image
                        style={styles.hinh}
                        source={require("../image/GT4.jpg")}
                    />
<Text style={{ fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Chương trình Quản trị viên tập sự: nhằm chuẩn bị đội ngũ quản lý trẻ có đầy đủ năng lực và phẩm chất đáp ứng chiến lược phát triển của Công ty, hàng năm Công ty tổ chức  chương trình Quản trị viên tập sự, trong đó tổ chức tuyển chọn những sinh viên xuất sắc từ các Trường đại học uy tín để đào tạo – phát triển thành các cán bộ quản lý cho khối Kinh doanh, Văn phòng, Xí nghiệp.</Text>
                    
                    
                </View>
                <View>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20, marginLeft: 10, color: 'red' }}>CƠ HỘI NGHỀ NGHIỆP/ THUYÊN CHUYỂN</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Công ty có chính sách ưu tiên tuyển dụng nội bộ, nhân viên công ty được tạo điều kiện ứng tuyển vào các vị trí công việc phù hợp với năng lực cá nhân.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Các nhân viên tiềm năng, ưu tú được công ty đài thọ chi phí tham dự các khóa đào tạo bên trong và bên ngoài công ty nhằm có đủ năng lực cho vị trí mới.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>Tại PNJ, sự nghiệp của các bạn sẽ được phát triển cùng với sự lớn mạnh không ngừng của chúng tôi.

PNJ là thương hiệu hàng đầu tại Việt Nam trong lĩnh vực chế tác và bán lẻ trang sức bằng vàng, bạc, đá quý. Sản phẩm PNJ ngày càng được các nước tại thị trường Châu Á và Châu Âu ưu chuộng.</Text>

                </View>
                <View>
                <Text style={{ fontWeight: "bold", fontSize: 15, marginTop: 20, marginLeft: 10, color: 'red' }}>CHÍNH SÁCH ĐÃI NGỘ</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>1. Thưởng tháng lương 13 + Thưởng thành tích: lương tháng 14 ,15, 16 ++ theo kết quả kinh doanh công ty.
</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>2. Thưởng dịp lễ Tết, thưởng đột xuất cho thành tích xuất sắc.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>3. Tăng lương theo năng lực và hiệu quả công việc.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>4. Chi phí cơm trưa, xăng, điện thoại, và các hỗ trợ chi phí khác theo vị trí và tính chất công việc.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>5. Chi phí Công tác phí theo cấp bậc.</Text>
<Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>6. Đồng phục cho Nhân viên hằng năm.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>7. Bảo hiểm Xã hội, Bảo hiểm tai nạn 24/24, Bảo Hiểm Sức Khỏe Cá Nhân.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>8. Khám sức khỏe định kì hằng năm.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>9. Du Lịch hằng năm.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>10. Chế độ nghỉ phép cho nhân viên từ 12-14 ngày/năm.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>11. Chương trình đào tạo và phát triển sự nghiệp.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>12. Môi trường làm việc chuyên nghiệp, năng động, cơ hội thăng tiến, phát triển nghề nghiệp.</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>13. Các họat động tập thể: Teambuilding, Ngày hội văn hóa, Văn nghệ, CLB thể dục thể  thao…</Text>
                <Text style={{  fontSize: 15, marginTop: 20, marginLeft: 10,color: '#403636' }}>14. Các hoạt động công đoàn: Quà tặng nhân dịp 8/3, 20/10, Quốc tế Thiếu nhi 1/6, tết Trung thu…</Text>
                </View>


                <View>
                <Image
                        style={styles.foot}
                        source={require("../image/GT4.jpg")}
                    />
                <Text style={{alignSelf:'center',marginLeft:30,marginRight:30,fontSize:13}}>© Copyright 2022 PNJ.com. All Right Reserved </Text>
                <Text style={{alignSelf:'center',marginLeft:50,marginRight:50,fontSize:13}}>Privacy Policy   |   Terms & Conditions </Text>
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
        marginTop: 15,
        width: 380,
     
    },
    hinh: {
        width: 400,
        height: 200,
        borderRadius: 40,
    },
    foot: {
        marginTop: 45,
        width:400,
        height:150
    },

});