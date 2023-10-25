import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions, SafeAreaView } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "./NavigatorBottomBar";
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={globalStyles.container}>

            <View style={styles.imageField}>
                <View >
                    <SearchBar placeholder="Search..."
                        containerStyle={styles.searchContainer}
                        inputContainerStyle={styles.searchInputContainer}
                    >
                    </SearchBar>
                </View>
                <Image style={styles.imageHome} source={require("../../assets/images/camp.png")}></Image>
            </View>
            <View style={styles.content}>
                <View >
                    <Text style={[globalStyles.text, styles.titleText]}>Các điểm di tích</Text>
                    <View style={styles.location}>
                        <TouchableOpacity style={styles.btnHome}>
                            <Text>Di tích A</Text>

                        </TouchableOpacity >
                        <TouchableOpacity style={styles.btnHome}>

                            <Text>Di tích B</Text>

                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnHome}>

                            <Text>Di tích C</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                <View >
                    <Text style={[globalStyles.text, styles.titleText]}>Dịch vụ</Text>
                    <View style={styles.service}>
                        <TouchableOpacity style={globalStyles.button}>
                            <View>
                                <Text>Mua vé</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.button}>
                            <View >
                                <Text>Đặt tour</Text>
                            </View>
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
        top: 24,
        left: 0,
        right: 0,
        position: 'absolute',
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        backgroundColor: 'violet'
    },
    searchBar: {
        color: 'white',
        height: 30,
    },
    imageHome: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
    },
    content: {
        position: 'absolute',
        top: Dimensions.get('window').height * 0.48,
        left: 0,
    },
    titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    location: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: Dimensions.get('window').width,
    },

    service: {
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.6,
    },
    btnHome: {
        flex: 1,
        height: 60,
        width: 50,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'lightgray',
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    }, searchContainer: {
        backgroundColor: '#f2f2f2',
        borderTopWidth: 0,
        borderBottomWidth: 0,
        paddingHorizontal: 10,
      },
      searchInputContainer: {
        backgroundColor: '#f2f2f2',
        height: 40,
      }
});


