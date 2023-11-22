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

const NotificationScreen = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("EventDetails");
  };

  const eventData = [
    {
      id: 1,
      image: require('../../assets/images/beach.png'),
      title: 'Thông báo 1',
    },
    {
      id: 2,
      image: require('../../assets/images/beach.png'),
      title: 'Thông báo 2',
    }, 
    {
        id: 3,
        image: require('../../assets/images/beach.png'),
        title: 'Thông báo 3',
      },
      {
        id: 4,
        image: require('../../assets/images/beach.png'),
        title: 'Thông báo 4',
      },
      {
        id: 5,
        image: require('../../assets/images/beach.png'),
        title: 'Thông báo 5',
      },
    // Thêm các sự kiện khác vào đây
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.eventItem} onPress={handlePress}>
      <Image source={item.image} style={styles.eventImage} />
      <Text>{item.title}</Text>
      <MaterialCommunityIcons name="bell-ring" color="orange" size={32} />
    </TouchableOpacity>
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
  },
  eventImage: {
    width: 120,
    height: 70,
    marginRight: 10,
    left: 0
  },
  eventTitle: {
    flex: 1,
    textAlign: 'center',
    marginRight: 10,
  }, flatList: {
    height: Dimensions.get('window').height * 0.4,
  },
});

export default NotificationScreen;