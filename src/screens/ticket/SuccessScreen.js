import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, SafeAreaView, TextInput, Image, Dimensions} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

import BottomButtonBar from "../../components/NavigatorBottomBar";
import { ticketStyles } from "../../styles/globalStyles";
import { info } from "./TicketScreen";

export default function SuccessScreen() {
    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    };

    const formatDate = (date) => {
        date = new Date(date);
        return (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    };

    return (
        <View style={ticketStyles.container}>
            <View style={styles.container}>
                <Image
                    style={styles.background}
                    source={require('../../../assets/images/success-bg.jpg')}
                />

                <View style={styles.box}>
                    <View style={styles.header}>
                        <FontAwesome style={styles.icon} name='check' size={50}></FontAwesome>
                        <Text style={styles.titleText}>Đặt vé thành công</Text>
                    </View>

                    <View style={styles.body}>
                        <Text style={styles.textContent}>Họ và tên: {info.name}</Text>
                        <Text style={styles.textContent}>Số điện thoại: {info.phone}</Text>
                        <Text style={styles.textContent}>Ngày tham quan: {formatDate(info.date)}</Text>
                        <Text style={styles.textContent}>Số lượng vé: {info.adult} vé người lớn + {info.child} vé học sinh / sinh viên / người cao tuổi</Text>
                        <Text style={styles.textContent}>Vui lòng thanh toán {info.fee} VND tại quầy vé</Text>
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.rowButton}>
                            <TouchableOpacity style={styles.button} onPress={() => handlePress('Home')}>
                                <Text style={styles.textButton}>Về trang chủ</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handlePress('Ticket')}>
                                <Text style={styles.textButton}>Tạo giao dịch khác</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <BottomButtonBar/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    box: {
        flexDirection: 'column',
        height: Dimensions.get('window').height * 0.8,
        width: Dimensions.get('window').width * 0.9,
        marginLeft: 20,
        marginTop: 80,
        justifyContent: 'space-between',
        textAlign: 'center',
        borderRadius: 15,
        backgroundColor: 'rgba(256, 256, 256, 0.8)',
    },
    background: {
        width: Dimensions.get('window').width,
        height: '100%',
        position: 'absolute',
    },
    header: {
        flex: 1,
        textAlign: 'center',
    },
    icon: {
        color: 'rgb(86, 125, 137)',
        margin: '10%',
        textAlign: 'center',
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
        color: 'rgb(86, 125, 137)',
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        textAlign: 'center',
    },
    button: {
        width: Dimensions.get('window').width * 0.34,
        height: Dimensions.get('window').height * 0.05,
        borderRadius: 15,
        backgroundColor: 'rgb(86, 125, 137)',
        textAlign: 'center',
        margin: '5%',
    },
    rowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: '5%',
        marginRight: '5%',
        marginBottom: '5%',
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        marginTop: '5%',
    },
    body: {
        height: Dimensions.get('window').height * 0.4,
        width: Dimensions.get('window').width * 0.8,
        marginLeft: 20,
        marginTop: 80,
//        justifyContent: 'space-between',
        textAlign: 'center',
        borderRadius: 15,
        backgroundColor: 'rgb(256, 256, 256)',
    },
    textContent: {
        paddingLeft: '5%',
        paddingTop: '12%',
    },
});