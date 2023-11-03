import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "./NavigatorBottomBar";
import GridEvent from "../components/GridEvent";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Notification from "../components/TableEvent";

export default function EventScreen() {
    const navigation = useNavigation();
    const [showGrid, setShowGrid] = React.useState(true);

    const toggleView = () => {
        setShowGrid(!showGrid);
    };
    
    return (
        <View style={styles.container}>
            <Text>Event Screen</Text>
            <View style={styles.title}>
                <Text style={styles.titleText}>Sự kiện</Text>
                <TouchableOpacity style={styles.titleIcon} onPress={toggleView}>
                    <MaterialCommunityIcons name="table-of-contents" color={"black"} size={40}>
                    </MaterialCommunityIcons>
                </TouchableOpacity>
            </View>
            {/* <GridEvent />

            <Notification /> */}
            {showGrid ? <Notification /> : <GridEvent />}
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


