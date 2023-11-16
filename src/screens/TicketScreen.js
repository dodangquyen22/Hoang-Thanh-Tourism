import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, Dimensions, SafeAreaView, TextInput} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import BottomButtonBar from "../components/NavigatorBottomBar";

export default function TicketScreen() {
    const [text, onChangeText] = React.useState();
    const [number, onChangeNumber] = React.useState();
    const [date, setDate] = React.useState(new Date());

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
        value: date,
        onChange,
        mode: currentMode,
        is24Hour: true,
        });
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName)
    };

    const formatDate = (date) => {
        return `${date.getDate()}/${date.getMonth() +
          1}/${date.getFullYear()}`;
    };

    const typeDate = () => {
        this.myTextInput.clear();
    };

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
                <TouchableOpacity style={styles.labelContainer} onPress={showDatepicker}>
                    <TextInput
                        style={styles.inputDate}
                        onChange={setDate}
                        value={formatDate(date)}
                        keyboardType="numeric"
                        placeholder='DD/MM/YYYY'
                        ref= {this.myTextInput} />
                    <FontAwesome style={styles.calendar} name="calendar" size={20}></FontAwesome>
                </TouchableOpacity>
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
    labelContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    calendar: {
        flex: 1,
        marginTop: 20,
    },
    inputDate: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        flex: 8,
    },
})