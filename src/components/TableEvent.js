import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { eventData } from '../constants';

const NotificationScreen = () => {
  const navigation = useNavigation();
  const handlePress = (item) => {
    navigation.navigate("EventDetails", { item });
  };
  const pressIcon = () => {
    alert('Đã bật thông báo cho sự kiện này');
  }

  const renderItem = ({ item }) => (
    <View style={styles.eventItem}>
      <TouchableOpacity style={styles.box} onPress={() => handlePress(item)}>
        <Image source={item.image} style={styles.eventImage} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={pressIcon}>
        <MaterialCommunityIcons name="bell-ring" color="orange" size={26} />
      </TouchableOpacity>
    </View>
  );

  return (
    <FlatList
      data={eventData}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  eventItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 80,
    width: Dimensions.get('window').width * 0.98,
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },box: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
    width: Dimensions.get('window').width * 0.98,
  
  },
  eventImage: {
    width: 120,
    height: 70,
    marginRight: 10,
    left: 0,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },
  eventTitle: {
    flex: 1,
    textAlign: 'center',
    marginRight: 10,
  }, flatList: {
    height: Dimensions.get('window').height * 0.4,
    marginBottom: 80,
  },title: {
    fontSize: 14,
    marginLeft: 5,
  }, icon: {
    textAlign: 'center',
  }
});

export default NotificationScreen;