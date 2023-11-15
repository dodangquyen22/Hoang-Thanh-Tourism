import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";


const NotificationScreen = () => {
    const navigation = useNavigation();
    const notifications = [
        {
            id: 1,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 1',
        },
        {
            id: 2,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 2',
        },
        {
            id: 3,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 3',
        },
        {
            id: 4,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 4',
        },
        {
            id: 5,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 5',
        },
        {
            id: 6,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 6',
        },
        {
            id: 7,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 7',
        },
        {
            id: 8,
            image: require('../../assets/images/beach.png'),
            title: 'Thông báo 8',
        },
    ];

    return (
        <View style={styles.container} contentContainerStyle={styles.center}>
            {/* <View style={styles.title}>
                <Text style={styles.titleText}>Sự kiện</Text>
                <TouchableOpacity style={styles.titleIcon} onPress={navigation.navigate("EventGrid")}>
                    <MaterialCommunityIcons name="table-of-contents" color={"black"} size={40}>
                    </MaterialCommunityIcons>
                </TouchableOpacity>
            </View> */}
            {notifications.map(notification => (
                <View key={notification.id} style={styles.notificationItem}>
                    <Image source={notification.image} style={styles.image} />
                    <Text style={styles.title}>{notification.title}</Text>
                    <MaterialCommunityIcons name="bell-ring" color={"orange"} size={32}>
                    </MaterialCommunityIcons>
                </View>
            ))}
        </View>
    );
};
export default NotificationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, center: {
        alignItems: 'center',
    },
    notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 80,
        width: Dimensions.get('window').width,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    image: {
        width: 100,
        height: 60,
        marginRight: 16,
    },
    title: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 20,
        height: 20,
    }, title: {
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.08,
        marginTop: 40,
        justifyContent: 'space-between',
        textAlign: 'center',
    },
    titleText: {
        flex: 1,
        color: "black",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 10
    },
    titleIcon: {
        color: "black",
        paddingRight: 10
    },
});

