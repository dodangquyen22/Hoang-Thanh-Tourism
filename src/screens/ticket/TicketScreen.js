import * as React from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet, Alert, SafeAreaView, TextInput, ScrollView} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

import BottomButtonBar from "../../components/NavigatorBottomBar";
import { PopUp } from "../../components/PopUp";
import { ticketStyles } from "../../styles/globalStyles";
import {CustomDatePicker} from "../../components/DatePicker";

export const info = {
    "name": '',
    "phone": '',
    "date": '',
    "adult": '',
    "child": '',
    "fee": ''
};

export default function TicketScreen() {
    const [text, onChangeText] = React.useState();
    const [phone, onChangePhone] = React.useState();
    const [adultTicket, onChangeAdult] = React.useState(0);
    const [childTicket, onChangeChild] = React.useState(0);
    const price = 30000;

    const currentDate = new Date();
    const [date, setDate] = React.useState(new Date());
    const [show, setShow] = React.useState(false)
    const [warn, setWarn] = React.useState(false);

    const [isConfirmVisible, setConfirmVisible] = React.useState(false);
    const [isHelpVisible, setHelpVisible] = React.useState(false);

    const navigation = useNavigation();
    const handlePress = (buttonName) => {
        navigation.navigate(buttonName);
        setConfirmVisible(!isConfirmVisible);
        info.name = text;
        info.phone = phone;
        info.date = date;
        info.adult = adultTicket;
        info.child = childTicket;
        info.fee = price * adultTicket + price * childTicket / 2;
    };


    const toggleModal = (typeOfModal) => {
        if (typeOfModal == 'confirm') {
            setConfirmVisible(!isConfirmVisible);
        } else {
            setHelpVisible(!isHelpVisible);
        }
    };

    const onChange = (event, selectedDate) => {
        const currentDate = new Date();
        if (currentDate <= selectedDate) {
            setDate(selectedDate);
            setWarn(false);
            setShow(false);
        } else {
            setDate(currentDate);
            setWarn(true);
        }
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

    const formatDate = (date) => {
        date = new Date(date);
        return (`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`);
    };

    const onPlusPress = (typeOfTicket) => {
        if (typeOfTicket == 'adult') {
            onChangeAdult(adultTicket + 1);
        } else {
            onChangeChild(childTicket + 1);
        }
    };

    const onMinusPress = (typeOfTicket) => {
        if (typeOfTicket == 'adult') {
            if (adultTicket > 0)
                onChangeAdult(adultTicket - 1);
        } else {
            if (childTicket > 0)
                onChangeChild(childTicket - 1);
        }
    };

    const confirm = () => {
        Alert.alert('Xác nhận thông tin');
    };

    return (
        <View style={ticketStyles.container}>
            <View style={ticketStyles.title}>
                <TouchableOpacity style={ticketStyles.icon} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
                <Text style={ticketStyles.titleText}>Đặt vé</Text>
                <TouchableOpacity style={ticketStyles.icon} onPress={() => Alert.alert('Hướng dẫn mua vé')}>
                    <Ionicons style={ticketStyles.icon} name="information-circle-outline" size={40}>
                    </Ionicons>
                </TouchableOpacity>
            </View>

            <ScrollView style={ticketStyles.formContainer}>
                <Text style={ticketStyles.label}>Họ và tên:</Text>
                <TextInput
                    style={ticketStyles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder='Nguyễn Văn A'/>
                <Text style={ticketStyles.label}>Số điện thoại:</Text>
                <TextInput
                    style={ticketStyles.input}
                    onChangeText={onChangePhone}
                    value={phone}
                    keyboardType="numeric"
                    maxLength={10}
                />
                <Text style={ticketStyles.label}>Ngày tham quan:</Text>
                <TouchableOpacity style={ticketStyles.inputContainer} onPress={() => setShow(true)}>
                    <Text style={ticketStyles.inputDate}>{formatDate(date)}</Text>
                    <FontAwesome style={ticketStyles.calendar} name="calendar" size={20}></FontAwesome>

                </TouchableOpacity>

                {show && (
                    <DateTimePicker
                        style={ticketStyles.datePicker}
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        display='spinner'
                        is24Hour={true}
                        onChange={onChange}
                        minimumDate={currentDate}
                    />
                )}

                <View style={ticketStyles.warning}>
                    {(warn) ? <Text style= {{color: 'red'}}>Vui lòng chọn ngày từ {formatDate(new Date())} trở đi!</Text> : <Text></Text>}
                </View>
                <View>
                    <Text style={ticketStyles.label}>Số lượng vé:</Text>
                    <View style={ticketStyles.ticketContainer}>
                        <Text style={ticketStyles.subTitle}>Vé người lớn: </Text>
                        <View style={ticketStyles.countContainer}>
                            <TouchableOpacity onPress={() => onMinusPress('adult')}>
                                <FontAwesome style={ticketStyles.countIcon} name="minus-square-o" size={18}></FontAwesome>
                            </TouchableOpacity>
                            <Text style={ticketStyles.countNumber}>{adultTicket}</Text>
                            <TouchableOpacity onPress={() => onPlusPress('adult')}>
                                <FontAwesome style={ticketStyles.countIcon} name="plus-square-o" size={18}></FontAwesome>
                            </TouchableOpacity>
                            <Text style={ticketStyles.priceStyle}>{price * adultTicket} VND</Text>
                        </View>

                    </View>
                    <View style={ticketStyles.ticketContainer}>
                        <Text style={ticketStyles.subTitle}>Vé học sinh / sinh viên / người cao tuổi: </Text>
                        <View style={ticketStyles.countContainer}>
                            <TouchableOpacity onPress={() => onMinusPress('child')}>
                                <FontAwesome style={ticketStyles.countIcon} name="minus-square-o" size={18}></FontAwesome>
                            </TouchableOpacity>
                            <Text style={ticketStyles.countNumber}>{childTicket}</Text>
                            <TouchableOpacity onPress={() => onPlusPress('child')}>
                                <FontAwesome style={ticketStyles.countIcon} name="plus-square-o" size={18}></FontAwesome>
                            </TouchableOpacity>
                            <Text style={ticketStyles.priceStyle}>{price * childTicket / 2} VND</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <TouchableOpacity style={ticketStyles.buttonContainer} onPress={() => toggleModal('confirm')}>
                <Text style={ticketStyles.button}>Xác nhận</Text>
            </TouchableOpacity>

            <BottomButtonBar />
            <PopUp isVisible={isConfirmVisible}>
                <PopUp.Container>
                    <PopUp.Header title="Xác nhận thông tin" />
                    <PopUp.Body>
                        <Text style={ticketStyles.popText}>Người đặt vé: {text}</Text>
                        <Text style={ticketStyles.popText}>Số điện thoại: {phone}</Text>
                        {console.log({phone})}
                        <Text style={ticketStyles.popText}>Thông tin vé: {adultTicket} vé người lớn + {childTicket} vé học sinh /
                         sinh viên / người cao tuổi, ngày {formatDate(date)}</Text>
                        <Text style={ticketStyles.popText}>Thành tiền: </Text>
                        <Text style={ticketStyles.strong}>{price * adultTicket + price * childTicket / 2} VND</Text>
                    </PopUp.Body>
                    <PopUp.Footer>
                        <Button title="Xác nhận" onPress={() => handlePress('SuccessTicket')} />
                    </PopUp.Footer>
                </PopUp.Container>
            </PopUp>
        </View>
    )
};