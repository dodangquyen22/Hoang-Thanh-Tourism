import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, SafeAreaView, TextInput, Image, Dimensions, ScrollView} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from 'react-native-image-slider-box';

import BottomButtonBar from "../../components/NavigatorBottomBar";
import SlideTour from "../../components/SlideTour.js"
import { ticketStyles } from "../../styles/globalStyles";

export default function TourDetail() {
    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    };

    const images = {
        image0: require('../../../assets/tour-images/tour-dem-0.jpg'),
        image1: require('../../../assets/tour-images/tour-dem-1.png'),
        image2: require('../../../assets/tour-images/tour-dem-2.jpg'),
        image3: require('../../../assets/tour-images/tour-dem-3.jpg'),
        image4: require('../../../assets/tour-images/tour-dem-4.jpg'),
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Tour đêm Hoàng Thành Thăng Long</Text>
            </View>

            <View style={styles.contentContainer}>
                <SliderBox
                    style={styles.image}
                    images={Object.values(images)}
                    dotColor='#dec584'
                    inactiveDotColor='#e2d7a7'
                    autoplay
                    circleLoop
                    autoplayInterval={4000}
                />
                <ScrollView>
                    <View style={{marginTop: '5%'}}>
                        <View>
                            <Text>
                            <Text style={{fontWeight:'bold', flexWrap: 'wrap'}}>Thời gian khởi hành tour:</Text>
                            19h ngày thứ Sáu, Thứ Bảy hàng tuần.
                            </Text>
                            <Text>Chương trình tour kéo dài khoảng 1,5 giờ.
                            Các bạn lưu ý đến trước giờ khởi hành 15 phút, tại cổng Hoàng thành Thăng Long 19C Hoàng Diệu.
                            </Text>
                        </View>
                        <View>
                            <Text style={{marginTop:'5%'}}>
                                <Text style={{fontWeight:'bold'}}>Giá tour:</Text> 300k/người lớn.Trẻ em dưới 12 tuổi giảm 50%. Trẻ em dưới 5 tuổi miễn phí.
                            </Text>
                        </View>
                        <View>
                            <Text style={{marginTop:'5%'}}>
                                <Text style={{fontWeight:'bold'}}>Liên hệ đặt tour:</Text>
                                 0913012021/ 0902115698
                            </Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', marginTop:'5%'}}>Lộ trình tham quan:</Text>
                            <Text>- Đón khách tại cổng Hoàng thành 19c Hoàng Diệu</Text>
                            <Text>- Chụp ảnh check in tại Đoan Môn </Text>
                            <Text>- Xem biểu diễn nghệ thuật trên sàn kính khảo cổ Đoan Môn</Text>
                            <Text>- Tham quan phòng trưng bày hiện vật</Text>
                            <Text>- Dâng hương tưởng nhớ các bậc tiên đế tại Điện Kính Thiên</Text>
                            <Text>- Tham quan các dấu tích khảo cổ tại 18 Hoàng Diệu</Text>
                            <Text>- Trải nghiệm nước giếng hoàng cung</Text>
                            <Text>- Giải mã hiện vật bằng ánh sáng laze</Text>
                            <Text>- Thư giãn, thưởng thức trà sen, mứt sen cung đình dưới bóng cây bồ đề</Text>
                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', marginTop:'5%'}}>Những điểm đặc biệt của tour mà bạn không nên bỏ lỡ:</Text>
                            <Text>
                                Trải nghiệm khu di sản văn hóa thế giới Hoàng thành Thăng Long trong không gian lung linh ban đêm.
                                Chụp ảnh cùng các cung nữ, lính canh trong trang phục cổ xưa.
                                Thưởng thức nghệ thuật tại một sân khấu độc đáo, ngay trên các dấu tích khảo cổ nghìn năm.
                                Tham dự Lễ dâng hương tưởng nhớ các bậc tiên đế tại điện Kính Thiên, trung tâm của trời đất, trung tâm của kinh thành Thăng Long xưa.
                                Tham quan khu khảo cổ với các dấu tích cung điện vàng son một thuở, những hiện vật nghìn năm từ lòng đất.
                                Tự tay lấy cho mình những dòng nước mát từ giếng Vua, nguồn nước biểu tượng cho nguồn sống dồi dào và sự may mắn, phúc lành.
                                Tham gia trò chơi Giải mã Hoàng thành Thăng Long bằng thẻ giải mã với màn trình diễn laze bật mí ấn tượng và những phần quà ý nghĩa.
                                Cảm giác thật thư thái khi được ngồi thưởng thức trà sen, mứt sen ngay dưới tán cây bồ đề cổ thụ, biểu tượng cho sự an lành, may mắn.
                            </Text>

                        </View>
                        <View>
                            <Text style={{fontWeight:'bold', marginTop:'5%'}}>Những lưu ý nhỏ khi bạn tham gia tour:</Text>
                            <Text>
                                Trang phục lịch sự, quần áo, giày dép thoải mái thuận tiện cho việc đi bộ nhiều.
                                Chương trình khởi hành đúng giờ, các bạn vui lòng có mặt trước 15 phút tại cổng Hoàng thành Thăng Long 19C Hoàng Diệu (riêng cổng vào phải chú ý nhé vì khu di sản có nhiều cổng, dễ nhầm đấy).
                                Khu di sản rất rộng, các hoạt động liên tục diễn ra nên các bạn cố gắng bám sát, đi theo hướng dẫn viên của đoàn mình, cẩn thận không dễ bị “củ lạc”.
                                Hoạt động diễn ra ngoài trời, bạn nên mang thêm ô để phòng thời tiết mưa gió thất thường.
                                Chúc các bạn có một trải nghiệm thú vị với tour đêm Giải mã Hoàng thành Thăng Long!
                            </Text>
                        </View>
                    </View>
                </ScrollView>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={ticketStyles.icon} onPress={() => navigation.goBack()}>
                            <Entypo name="arrow-long-left" size={50}>
                            </Entypo>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 3}}>
                            <Text style={styles.button}>Đăng ký</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                            <Entypo name="arrow-long-right" size={50}>
                            </Entypo>
                        </TouchableOpacity>
                    </View>
            </View>

            <BottomButtonBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        textAlign: 'center',
    },
    title: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        margin: '5%',
        marginTop: '10%',
        textAlign: 'center',
    },
    titleText: {
        flex: 2,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    contentContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.75,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'black',
        backgroundColor: 'rgba(209,209,209, 0.8)',
        marginLeft: '5%',
        justifyContent: 'flex-start',
    },
    image: {
        width: Dimensions.get('window').width * 0.85,
        height: Dimensions.get('window').height * 0.2,
        borderRadius: 20,
        margin: '2.5%',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: '5%',
        marginBottom: '5%',
    },
    button: {
        width: 100,
        height: 40,
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 8,
        fontWeight: 'bold',
        paddingTop: 5,
        marginLeft: '25%',
    },
    icon: {
        textAlign: 'center',
        flex: 1,
    },
});