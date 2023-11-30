import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, globalStylesheet, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from "react-native-vector-icons/FontAwesome";
import { Entypo} from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import { useNavigationState } from "@react-navigation/native";
import { color } from 'react-native-elements/dist/helpers';

const BottomButtonBar = () => {
    const navigation = useNavigation();
    const navigationState = useNavigationState((state) => state);
    const [activeIcon, setActiveIcon] = useState('Home');
   
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    }

    return (
        <View style={globalStyles.navigator}>

            <TouchableOpacity style={globalStyles.buttonNavigator} onPress={() => handlePress('Info')}>
                <View style={styles.buttonContainer}>
                    <MaterialCommunityIcons name="information-outline" color={navigationState.routes[navigationState.index].name === 'Info' ? 'blue' : 'black'} size={26} />
                    <Text style={[styles.textNavigator, { color: navigationState.routes[navigationState.index].name === 'Info' ? 'blue' : 'black' }]}>Thông tin</Text>
                </View>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Map')}>
                <View style={styles.buttonContainer}>
                    <Entypo name="location-pin" color={navigationState.routes[navigationState.index].name === 'Map' ? 'blue' : 'black'} size={26}>
                    </Entypo>
                    <Text style={[styles.textNavigator, { color: navigationState.routes[navigationState.index].name === 'Map' ? 'blue' : 'black' }]}>Bản đồ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Home')}>
                <View style={styles.buttonContainer}>
                    <Octicons name="home" color={navigationState.routes[navigationState.index].name === 'Home' ? 'blue' : 'black'} size={26}>
                    </Octicons>
                    <Text style={[styles.textNavigator, { color: navigationState.routes[navigationState.index].name === 'Home' ? 'blue' : 'black' }]}>Trang chủ</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Event')}>
                <View style={styles.buttonContainer}>
                    <MaterialCommunityIcons name="calendar" color={navigationState.routes[navigationState.index].name === 'Event' ? 'blue' : 'black'} size={26}>
                    </MaterialCommunityIcons>
                    <Text style={[styles.textNavigator, { color: navigationState.routes[navigationState.index].name === 'Event' ? 'blue' : 'black' }]}>Sự kiện</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Setting')}>
                <View style={styles.buttonContainer}>
                    <Icon name="bars" color={navigationState.routes[navigationState.index].name === 'Setting' ? 'blue' : 'black'} size={26}>
                    </Icon>
                    <Text style={[styles.textNavigator, { color: navigationState.routes[navigationState.index].name === 'Setting' ? 'blue' : 'black' }]}>Menu</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
};

const handlePress = () => {

}


export default BottomButtonBar;

const styles = StyleSheet.create({
    textNavigator: {
        color: 'black',
        fontSize: 10,
        marginTop: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
})