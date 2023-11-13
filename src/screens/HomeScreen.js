import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions, SafeAreaView, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "../components/NavigatorBottomBar";
import Categories from "../components/categories";
import { theme } from '../theme';
import { SearchBar } from 'react-native-elements';
import { useState } from 'react';
export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
                   <Categories></Categories>
                    <View >
                        <Text style={{fontSize: 23, color: theme.text, marginLeft: 20, marginBottom: 20, marginTop: 10}} className="font-semibold text-neutral-700">Dịch vụ</Text>
                        <View style={styles.service}>
                            <TouchableOpacity>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require("../../assets/images/tickets.png")}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>Mua vé</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require("../../assets/images/tickets.png")}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>Mua vé</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


                <BottomButtonBar />

            </SafeAreaView>
        </TouchableWithoutFeedback>

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
        paddingTop: 20,
    },
    searchInputContainer: {
        backgroundColor: '#f2f2f2',
        height: 40,
    },
    imageContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 30
      },
      image: {
        width: 50, // Điều chỉnh chiều rộng của hình ảnh theo ý muốn
        height: 50, // Điều chỉnh chiều cao của hình ảnh theo ý muốn
      },
      text: {
        marginTop: 5, // Điều chỉnh khoảng cách giữa hình ảnh và văn bản theo ý muốn
      },
});


