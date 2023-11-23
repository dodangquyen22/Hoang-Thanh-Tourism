import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BottomButtonBar from '../../components/NavigatorBottomBar';

const PurchasedTicketsScreen = ({ navigation }) => {
  const purchasedTickets = [
    { id: 1, eventName: 'Sự kiện 1', ticketCode: 'ABC123' },
    { id: 2, eventName: 'Sự kiện 2', ticketCode: 'DEF456' },
    { id: 3, eventName: 'Sự kiện 3', ticketCode: 'GHI789' },
    // Thêm các vé khác vào đây
  ];

  const renderTicket = ({ item }) => (
    <View style={styles.ticketContainer}>
      <Text style={styles.eventName}>{item.eventName}</Text>
      <Text style={styles.ticketCode}>Mã vé: {item.ticketCode}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle-outline" size={32} />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Vé đã mua</Text>
      </View>
      <View style={styles.content}>
        <FlatList
          data={purchasedTickets}
          renderItem={renderTicket}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.ticketList}
        />
      </View>
      <BottomButtonBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    marginBottom: 20,
    height: Dimensions.get('window').height * 0.08,
  },
  icon: {
    marginRight: 10,
  },
  titleHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  content: {
    flex: 1,
  },
  ticketList: {
    flexGrow: 1,
  },
  ticketContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  ticketCode: {
    fontSize: 16,
  },
});

export default PurchasedTicketsScreen;