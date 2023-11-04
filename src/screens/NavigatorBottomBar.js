import React, { useState } from 'react';
import { View, TouchableOpacity, globalStylesheet, Text, StyleSheet } from 'react-native';
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
                <Text style={styles.textNavigator}>Info</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handlePress('Map')}>
                <View>
                    <Icon name="map-o" color={"black"}  size={28}>
                    </Icon>
                    <Text style={styles.textNavigator}>Map</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Home')}>
                <View>
                    <Octicons name="home" color={"black"} size={32}>
                    </Octicons>
                    <Text style={styles.textNavigator}>Home</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Event')}>
                <View>
                    <MaterialCommunityIcons name="calendar" color={"black"}  size={32}>
                    </MaterialCommunityIcons>
                    <Text style={styles.textNavigator}>Events</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePress('Setting')}>
                <View>
                    <Icon name="bars" color={"black"}  size={32}>
                    </Icon>
                    <Text style={styles.textNavigator}>Setting</Text>
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
    }
})