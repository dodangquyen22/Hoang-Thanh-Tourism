import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, Dimensions, SafeAreaView, TextInput} from "react-native";
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import DatePicker from "@react-native-community/datetimepicker";

import BottomButtonBar from "./NavigatorBottomBar";
import TicketNavigation from "../navigation/ticketStates";

export default function TicketScreen() {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState();
    const [date, setDate] = React.useState('09-10-2020');

    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    }
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
                <Text style={styles.titleText}>Đặt vé</Text>
                <TouchableOpacity style={styles.icon} onPress={() => Alert.alert('Hướng dẫn mua vé')}>
                    <Ionicons style={styles.icon} name="information-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={styles.inputContainer}>
                <Text style={styles.label}>Họ và tên:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Nguyễn Văn A'/>
                <Text style={styles.label}>Số điện thoại:</Text>
                <TextInput
                    style={styles.input}
                    onChangeNumber={onChangeNumber}
                    value={number}
                    keyboardType="numeric"/>
                <Text style={styles.label}>Ngày tham quan:</Text>
                <DatePicker
//                    style={styles.datePickerStyle}
                    date={date} // Initial date from state
                    mode="date" // The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="01-01-2016"
                    maxDate="01-01-2019"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                    dateIcon: {
                     //display: 'none',
                     position: 'absolute',
                     left: 0,
                     top: 4,
                     marginLeft: 0,
                    },
                    dateInput: {
                     marginLeft: 36,
                    },
                    }}
                    onDateChange={(date) => {
                    setDate(date);
                    }}
               />
            </SafeAreaView>
            <BottomButtonBar />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        position: 'relative',
    },
    title: {
        flexDirection: 'row',
        height: Dimensions.get('window').height * 0.08,
        width: Dimensions.get('window').width * 0.98,
        marginTop: 60,
        marginLeft: 5,
        justifyContent: 'space-between',
        textAlign: 'center',
        borderColor: 'grey',
        borderWidth: 0,
        borderBottomWidth: 2,
    },
    titleText: {
        flex: 2,
        color: "black",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: 'center',
    },
    icon: {
        textAlign: 'center',
        marginLeft: 20,
        flex: 1,
    },
    inputContainer: {
        flexDirection: 'column',
        marginTop: 30,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
    },
    label: {
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 15,
    },
})