import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";

export default function EventScreen() {
    const navigation = useNavigation();
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.text}>Event Screen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate("Setting")}
                style={{
                    backgroundColor: theme.bg(1),
                    alignItems: "center",
                    padding: 10,
                    borderRadius: 999
                }}
            ></TouchableOpacity>
        </View>
    )
}


