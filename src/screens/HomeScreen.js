import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Image, Dimensions, SafeAreaView, Keyboard, TouchableWithoutFeedback, ScrollView, TextInput } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "../components/NavigatorBottomBar";
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import SearchBar from "../components/Search";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SlideImage from "../components/SlideImage";
import Categories from "../components/categories";
import { theme } from '../theme';
import { useState } from "react";
import { useEffect } from 'react';
export default function HomeScreen({ navigation }) {
    const [userData, setUserData] = useState(null);
    const retrieveUserData = async () => {
        try {
          const data = await AsyncStorage.getItem('userData');
          if (data) {
            const parsedData = JSON.parse(data);
            setUserData(parsedData);
            // console.log(parsedData);
          } else {
            setUserData(null);
          }
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        const reloadListener = setInterval(retrieveUserData, 1000); // Refresh every second
    
        return () => clearInterval(reloadListener); // Cleanup: Clear the interval when the component unmounts
      }, []);
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    }
    // console.log(userData)
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={globalStyles.container}>
                <ScrollView style = {styles.scrollViewContent} showsVerticalScrollIndicator={false}>
                <View style={styles.imageField}>
                    
                    <View className="mx-5 flex-row justify-between items-center mb-10" style={{marginBottom: 10}}>
                        <Text style={{fontSize: wp(7)}} className="font-bold text-neutral-700">{userData? `Xin chào ${userData}` : 'Xin chào'}</Text>
                        <TouchableOpacity>
                            <Image source={require('../../assets/images/avatar.png')} style={{height: wp(12), width: wp(12)}} />
                        </TouchableOpacity>
                    </View> 
                    <View className="mx-5 mb-4">
                        <View className="flex-row items-center bg-neutral-100 rounded-full p-4 space-x-2 pl-6">
                            <MagnifyingGlassIcon size={20} strokeWidth={3} color="gray" />
                            <TextInput
                            placeholder='Tìm kiếm địa danh'
                            placeholderTextColor={'gray'}
                            className="flex-1 text-base mb-1 pl-1 tracking-wider"
                            />
                        </View>
                    </View>
                    <View>
                        <SlideImage></SlideImage>
                    </View>
                </View>
                <View style={styles.content}>
                   <Categories></Categories>
                    <View >
                        <Text style={{fontSize: 23, color: theme.text, marginLeft: 20, marginBottom: 20, marginTop: 10}} className="font-semibold text-neutral-700">Dịch vụ</Text>
                        <View style={styles.service}>
                            <TouchableOpacity onPress={() => handlePress('Ticket')}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require("../../assets/images/ticket-icon.jpg")}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>Mua vé</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handlePress('Tour')}>
                            <View style={styles.imageContainer}>
                                <Image
                                    source={require("../../assets/images/icon-tour.png")}
                                    style={styles.image}
                                />
                                <Text style={styles.text}>Tour</Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
                </ScrollView>
                <BottomButtonBar />
            </SafeAreaView>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    scrollViewContent: {
        flex: 1,
      },
    imageField: {
        top: 10,
        // left: 0,
        // right: 0,
        // position: 'absolute',
        shadowColor: '#202020',
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 5,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    imageHome: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.35,
    },
    content: {
        //position: 'absolute',
        // top: Dimensions.get('window').height * 0.48,
        marginTop: 20,
        paddingBottom: 100,
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
        justifyContent: 'space-between',
        width: Dimensions.get('window').width * 0.8,
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
        marginLeft: '30%',
      },
      image: {
//        shadowColor: 'black',
//        borderWidth: 1,
//        borderRadius: 20,
//        borderColor: 'black',
        width: Dimensions.get('window').width * 0.18, // Điều chỉnh chiều rộng của hình ảnh theo ý muốn
        height: Dimensions.get('window').width * 0.18, // Điều chỉnh chiều cao của hình ảnh theo ý muốn
      },
      text: {
        marginTop: '2%', // Điều chỉnh khoảng cách giữa hình ảnh và văn bản theo ý muốn
      },
});


