import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../theme";
import BottomButtonBar from "./NavigatorBottomBar";
import Icon from "react-native-vector-icons/FontAwesome";
import { SearchBar } from 'react-native-elements';

export default function HomeScreen() {
    const navigation = useNavigation();
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
    return (
        <SafeAreaView style={globalStyles.container}>

            <View style={styles.imageField}>
                <Text style={globalStyles.text}>Home Screen</Text>
                <Image style={styles.imageHome} source={require("../../assets/images/camp.png")}>

                </Image>
            </View>
            <View style={styles.content}>
                <View >
                    <Text style={[globalStyles.text, styles.titleText]}>Các điểm di tích</Text>
                    <View style={styles.location}>
                        <TouchableOpacity >
                            <Icon.Button
                                name="home"
                                backgroundColor="#3b5998"
                                onPress={this.loginWithFacebook}>
                                
                            </Icon.Button>
                        </TouchableOpacity >
                        <TouchableOpacity style={globalStyles.button}>
                            <Text>Dích tích B</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={[globalStyles.text, styles.titleText]}>Dịch vụ</Text>
                    <View style={styles.service}>
                        <TouchableOpacity style={globalStyles.button}>
                            <Text>Mua vé</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.button}>
                            <Text>Mua tour</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <BottomButtonBar />

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    imageField: {
        top: 30,
        left: 0,
        right: 0,
        position: 'absolute',
    },
    imageHome: {
        width: Dimensions.get('window').width,
        height: 300
    },
    content: {
        position: 'absolute',
        top: 360,
        left: 0,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    location: {
        flexDirection: 'row',
    },

    service: {
        flexDirection: 'row',
    },
    btnHome: {

    }
});


