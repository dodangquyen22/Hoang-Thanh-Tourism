import React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, SafeAreaView, TextInput, Image, Dimensions, ScrollView} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";

import BottomButtonBar from "../../components/NavigatorBottomBar";
import SlideTour from "../../components/SlideTour.js"
import { ticketStyles } from "../../styles/globalStyles";

export default function SuccessScreen() {
    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={ticketStyles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
                <Text style={ticketStyles.titleText}>Tour</Text>
                <TouchableOpacity style={ticketStyles.icon} onPress={() => Alert.alert('Hướng dẫn đặt tour')}>
                    <Ionicons style={ticketStyles.icon} name="information-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <SlideTour></SlideTour>
                <Text style={styles.subTitle}>Danh sách tour </Text>
                <View style={styles.tourContainer}>
                    <View style={styles.tourButton}>
                        <Image
                            style={styles.imageButton}
                            source={require('../../../assets/tour-images/tour-dem-0.jpg')}
                        />
                        <View>
                            <Text style={styles.titleButton}>Tour đêm Hoàng Thành Thăng Long</Text>
                            <TouchableOpacity onPress={() => handlePress('TourDetail')}>
                                <Text style={styles.textButton}>Xem thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.tourButton}>
                        <Image
                            style={styles.imageButton}
                            source={require('../../../assets/tour-images/tour-vn-0.jpg')}
                        />
                        <View>
                            <Text style={styles.titleButton}>Tour tham quan cho du khách trong nước</Text>
                            <TouchableOpacity>
                                <Text style={styles.textButton}>Xem thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.tourButton}>
                        <Image
                            style={styles.imageButton}
                            source={require('../../../assets/tour-images/tour-nn-0.jpg')}
                        />
                        <View>
                            <Text style={styles.titleButton}>Tour tham quan cho du khách nước ngoài</Text>
                            <TouchableOpacity>
                                <Text style={styles.textButton}>Xem thêm</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <BottomButtonBar />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    title: {
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.98,
        marginTop: 60,
        marginLeft: 5,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    subTitle: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: 'center',
//        color: '#a16b56',
        marginTop: '5%',
    },
    tourContainer: {
        justifyContent: 'flex-start',
        margin: '5%',
    },
    tourButton: {
        flexDirection: 'row',
        backgroundColor: 'rgb(232,232,232)',
        shadowColor: 'black',
        elevation: 5,
        borderRadius: 15,
        height: Dimensions.get('window').height * 0.08,
        marginBottom: '10%',
    },
    titleButton: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
        marginLeft: '2%',
        marginTop: '3%',
        marginBottom: '2%',
        width: Dimensions.get('window').width * 0.65,
//        flexWrap: 'wrap',
    },
    textButton: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
        textAlign: 'right',
    },
    imageButton: {
        width: Dimensions.get('window').width * 0.2,
        height: Dimensions.get('window').height * 0.07,
        borderRadius: 15,
        margin: '1%',
    },
});