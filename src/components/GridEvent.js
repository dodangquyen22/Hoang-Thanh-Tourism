import React from 'react';
import { Dimensions } from 'react-native';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const GridEvent = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

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
    
      // <View style={styles.content}>
      //     <ScrollView >
      //   <View >
      //     {data.map(item => (
      //       <TouchableOpacity key={item.id} style={styles.item}>
      //         <Text>{item.title}</Text>
              
      //       </TouchableOpacity>
      //     ))}
      //   </View>
      // </ScrollView>
      // </View>
      <FlatList
      data={data}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
    />
  );
    

}

export default GridEvent;

const styles = StyleSheet.create({
  content: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  item: {
    width: Dimensions.get('window').width * 0.45,
    height: 80,
    backgroundColor: 'lightgray',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
    borderRadius: 5,
  }
});


