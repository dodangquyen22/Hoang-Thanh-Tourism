import React, { useState } from 'react';
import { View, TouchableOpacity, globalStylesheet, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from 'react-native-elements';

const BottomButtonBar = () => {
    const navigation = useNavigation();
    const [activeIcon, setActiveIcon] = useState('violet')
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    }

    return (
        <View style={globalStyles.navigator}>

            <TouchableOpacity style={globalStyles.buttonNavigator} onPress={() => handlePress('Info')}>
                <View >
                    <MaterialCommunityIcons  name="information-outline" color={"black"} size={32} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Map')}>
                <View>
                    <Icon name="map-o" color={"black"}  size={28}>
                    </Icon>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Home')}>
                <View>
                    <Octicons name="home" color={"black"} size={40}>
                    </Octicons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Event')}>
                <View>
                    <MaterialCommunityIcons name="calendar" color={"black"}  size={32}>
                    </MaterialCommunityIcons>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Setting')}>
                <View>
                    <Icon name="bars" color={"black"}  size={32}>
                    </Icon>
                </View>

            </TouchableOpacity>
        </View>
    );
};

const handlePress = () => {

}


export default BottomButtonBar;