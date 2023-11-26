import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from '../../components/NavigatorBottomBar';

export default function UserInfoScreen() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={32}>
                    </Ionicons>
                </TouchableOpacity>
                <View>
                    <Text style={styles.titleHeader}>Thông tin cá nhân</Text>
                </View>
            </View>
            <View>

                <Image
                    source={require('../../../assets/images/avatar.png')}
                    style={styles.avatar}
                />
                <Text style={styles.name}>Nguyen Van A</Text>
                <Text style={styles.email}>nguyenvanabc@gmail.com</Text>
                <Text style={styles.bio}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
                    justo et eros faucibus, vel lacinia neque rutrum. Vivamus vehicula
                    interdum mauris, a ultrices lectus rutrum sit amet.
                </Text>
            </View>
            <BottomButtonBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: 20,
    }, header: {
        position: 'absolute',
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.98,
        marginTop: 30,
        marginLeft: 5,
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 0,
        borderBottomWidth: 2,
        top: 0,
    }, titleHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
        marginLeft: 80,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 40,
    }, icon: {
        textAlign: 'center',
    },
    titleText: {
        flex: 2,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 16,
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        textAlign: 'center',
    },
});