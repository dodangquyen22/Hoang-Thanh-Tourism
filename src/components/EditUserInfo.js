import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export const EditUserInfoWindow = ({ user, onSaveChanges, onCancelChanges }) => {
    const navigation = useNavigation();
    const [email, setEmail] = React.useState(user.email);
    const [phone, setPhone] = React.useState(user.phone);

    const handleSaveChanges = () => {
        const updatedUser = { ...user, email, phone };
        console.log(phone);
        onSaveChanges(updatedUser);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
                <TextInput
                    style={styles.input}
                    value={phone}
                    onChangeText={setPhone}
                    placeholder="Phone"
                />

                <View style={styles.boxButton}>
                    <Button title="Save" onPress={handleSaveChanges} style={styles.button} />
                    <Button title="Cancel" onPress={onCancelChanges} style={styles.button} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    }, title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        height: 50,
        width: Dimensions.get('window').width * 0.9,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5,
    }, boxButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    }, button: {
        width: 50,
        backgroundColor: 'blue',
        borderRadius: 5,
    }
});