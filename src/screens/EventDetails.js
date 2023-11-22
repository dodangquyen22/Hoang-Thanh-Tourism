
import { View, StyleSheet, Text, ScrollView, FlatList, TouchableOpacity, Dimensions } from "react-native";
import SlideImage from "../components/SlideImage";
import BottomButtonBar from "../components/NavigatorBottomBar";
import { Ionicons } from '@expo/vector-icons';

export default function EventDetails() {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={32} />
                </TouchableOpacity>
                <Text style={styles.titleHeader}>Thông tin sự kiện</Text>
            </View>
            <ScrollView style={styles.boxContent}>
                <SlideImage />

                <ScrollView style={styles.descriptionContainer}>
                    <Text style={styles.title}>Sự kiện A</Text>
                    <Text style={styles.descriptionText}>
                        Thông tin sự kiện A
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
        marginBottom: 20,
        height: Dimensions.get('window').height * 0.08,
      },
      icon: {
        marginRight: 10,
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