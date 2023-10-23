import React from 'react';
import { View, TouchableOpacity, globalStylesheet, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
import { useNavigation } from "@react-navigation/native";

const BottomButtonBar = () => {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.navigator}>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Info")}>
            <Text style={globalStyles.buttonText}>Info</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Map")}>
            <Text style={globalStyles.buttonText}>Map</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Home")}>
            <Text style={globalStyles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Event")}>
            <Text style={globalStyles.buttonText} >Event</Text>
        </TouchableOpacity>
        <TouchableOpacity style={globalStyles.button} onPress={() => navigation.navigate("Setting")}>
            <Text style={globalStyles.buttonText}>Setting</Text>
        </TouchableOpacity>
    </View>
    );
  };


  export default BottomButtonBar;