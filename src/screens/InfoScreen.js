import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import BottomButtonBar from "./NavigatorBottomBar";


export default function InfoScreen() {
    const navigation = useNavigation();
    return  (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Info Screen</Text>
            
            <BottomButtonBar />
        </View>
    )
}
