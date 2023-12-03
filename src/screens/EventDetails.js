
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity, Dimensions, Image } from "react-native";
import SlideImage from "../components/SlideImage";
import { useNavigation } from "@react-navigation/native";
import BottomButtonBar from "../components/NavigatorBottomBar";
import { Ionicons } from '@expo/vector-icons';

export default function EventDetails({route}) {
    const navigation = useNavigation();
    const item = route.params.item;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={32} />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Thông tin sự kiện</Text>
            </View>
            <ScrollView style={styles.boxContent}>
                {/* <SlideImage /> */}
                <Image source={item.image} alt="image" />
                <ScrollView style={styles.descriptionContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.descriptionText}>
                        {item.description}
                    </Text>
                </ScrollView>
            </ScrollView>

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
    }, header: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: 'grey',
        marginBottom: 10,
        height: Dimensions.get('window').height * 0.12,
      },
      icon: {
        marginLeft: 10,
      },
      titleHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
      },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10
    },
    descriptionContainer: {
        marginTop: 20,
        padding: 20,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 100
    },
})