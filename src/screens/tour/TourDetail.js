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
                    <Text>
                        Thời gian khởi hành tour: 19h ngày thứ Sáu, Thứ Bảy hàng tuần. Chương trình tour kéo dài khoảng 1,5 giờ. Các bạn lưu ý đến trước giờ khởi hành 15 phút, tại cổng Hoàng thành Thăng Long 19C Hoàng Diệu.

                        Giá tour: 300k/người lớn.Trẻ em dưới 12 tuổi giảm 50%. Trẻ em dưới 5 tuổi miễn phí.

                        Liên hệ đặt tour: 0913012021/ 0902115698

                        Lộ trình tham quan: Đón khách tại cổng Hoàng thành 19c Hoàng Diệu – Chụp ảnh check in tại Đoan Môn – Xem biểu diễn nghệ thuật trên sàn kính khảo cổ Đoan Môn –  Tham quan phòng trưng bày hiện vật –  Dâng hương tưởng nhớ các bậc tiên đế tại Điện Kính Thiên – Tham quan các dấu tích khảo cổ tại 18 Hoàng Diệu – Trải nghiệm nước giếng hoàng cung – Giải mã hiện vật bằng ánh sáng laze – Thư giãn, thưởng thức trà sen, mứt sen cung đình dưới bóng cây bồ đề.

                        Những điểm đặc biệt của tour mà bạn không nên bỏ lỡ:....

                    </Text>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={ticketStyles.icon} onPress={() => navigation.goBack()}>
                            <Entypo name="arrow-long-left" size={40}>
                            </Entypo>
                        </TouchableOpacity>

                        <TouchableOpacity style={{flex: 3}}>
                            <Text style={styles.button}>Đăng ký</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                            <Entypo name="arrow-long-right" size={40}>
                            </Entypo>
                        </TouchableOpacity>
                    </View>

                </ScrollView>

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