import React from 'react';
import { Dimensions } from 'react-native';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GridEvent = () => {
  const data = [
    { id: 1, title: 'Item 1' },
    { id: 2, title: 'Item 2' },
    { id: 3, title: 'Item 3' },
    { id: 4, title: 'Item 4' },
    { id: 5, title: 'Item 5' },
    { id: 6, title: 'Item 6' },
    { id: 7, title: 'Item 7' },
    { id: 8, title: 'Item 8' },
    { id: 9, title: 'Item 9' },
    { id: 10, title: 'Item 10' },
    { id: 11, title: 'Item 11' },
    { id: 12, title: 'Item 12' },
    { id: 13, title: 'Item 13' },
    { id: 14, title: 'Item 14' },
    { id: 15, title: 'Item 15' },
    // Thêm nhiều dữ liệu khác ở đây
  ];

  return (
    <View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Sự kiện</Text>
        <TouchableOpacity style={styles.titleIcon} >
          <MaterialCommunityIcons name="table-of-contents" color={"black"} size={40}>
          </MaterialCommunityIcons>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          {data.map(item => (
            <TouchableOpacity key={item.id} style={styles.item}>
              <Text>{item.title}</Text>
              
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>

  );
}

export default GridEvent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    width: Dimensions.get('window').width * 0.45,
    height: 80,
    backgroundColor: 'lightgray',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 5,
  }, title: {
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.07,
    marginTop: 40,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  titleText: {
    flex: 1,
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: 10
  },
  titleIcon: {
    color: "black",
    paddingRight: 10
  },
});


