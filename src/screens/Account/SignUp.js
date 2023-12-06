import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity, Image, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleValidInput = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (username.length < 6) {
      setError('Username must be at least 6 characters');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return false;
    }
    if (phone.length < 10) {
      setError('Phone must be at least 10 characters');
      return false;
    }
    if (email.length < 6) {
      setError('Email must be at least 6 characters');
      return false;
    }

    if (!validRegex.test(email)) {
      setError('Email is invalid');
      return false;
    }
    return true;
  }

  const handleSignUp = async () => {
    handleValidInput();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://192.168.99.16:3000/register', {
        method: 'POST',
        headers:
        {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, phone, email }),
      });

      const data = await response.json();

      if (response.ok) {
        // console.log(data)
        // Đăng ký thành công, chuyển đến màn hình đăng nhập
        navigation.navigate('LoginScreen');
      } else {
        // Xử lý lỗi từ máy chủ
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle-outline" size={32}>
          </Ionicons>
        </TouchableOpacity>
        <Image source={require('../../../assets/logoLogin.png')} style={styles.logo} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={text => setUsername(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={text => setConfirmPassword(text)}
        />
        <TextInput style={styles.input} placeholder="phone" value={phone} onChangeText={text => setPhone(text)} />
        <TextInput style={styles.input} placeholder="email" value={email} onChangeText={text => setEmail(text)} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Button title="Đăng kí" onPress={handleSignUp} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 999,
  },
  error: {
    color: 'red',
    marginBottom: 16,
  },
});

export default SignUpScreen;