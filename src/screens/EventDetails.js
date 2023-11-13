
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SlideImage from "../components/SlideImage";
import BottomButtonBar from "../components/NavigatorBottomBar";

export default function EventDetails() {

    return (
        <View style={styles.container}>
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