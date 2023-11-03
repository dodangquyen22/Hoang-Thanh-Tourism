import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "./NavigatorBottomBar";
import GridEvent from "../components/GridEvent";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function EventScreen() {
    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            {/* <View style={styles.title}>
                <Text style={styles.titleText}>Sự kiện</Text>
                <TouchableOpacity style={styles.titleIcon}>
                    <MaterialCommunityIcons name="table-of-contents" color={"black"} size={40}>
                    </MaterialCommunityIcons>
                </TouchableOpacity>
            </View> */}
            <GridEvent />
            <BottomButtonBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    title: {
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

})


