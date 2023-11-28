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
      image: require('../../assets/images/trienlamcoloa.jpg'),
      title: 'Triển lãm "Thành Cổ Loa"',
    },
    {
      id: 2,
      image: require('../../assets/images/thanhphoxuacu.jpg'),
      title: 'Thành phố xưa cũ',
    }, 
    {
        id: 3,
        image: require('../../assets/images/khaimac.jpg'),
        title: 'Khai mạc ngày hội di sản',
      },
      {
        id: 4,
        image: require('../../assets/images/trungthu.jpg'),
        title: 'Đêm Trung thu',
      },
      {
        id: 5,
        image: require('../../assets/images/tetdoanngo.jpg'),
        title: 'Tết Đoan ngọ Thăng Long xưa',
      }, {
        id: 6,
        image: require('../../assets/images/tourdem.jpg'),
        title: 'Tour Đêm giải mã Hoàng Thành',
      }, {
        id: 7,
        image: require('../../assets/images/hoatdong.jpg'),
        title: 'Lễ kí kết hợp đồng phát triển',
      }, {
        id: 8,
        image: require('../../assets/images/trungbay.jpg'),
        title: 'Tôn vinh di sản văn hóa',
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
    marginBottom: 80,
  },
});

export default NotificationScreen;