import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <TouchableOpacity>
          <View style={[styles.sidebarItem, styles.sidebarItemLarge ]}>
            <AntDesign name="user" size={28} color="black" />
            <Text style={styles.sideBarTextLarge}>Welcome User</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity >
          <View style={[styles.sidebarItem, styles.sidebarItem]}>
            <MaterialCommunityIcons name="alert" size={24} color="black" />
            <Text style={styles.sidebarText}>Report</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.sidebarItem, styles.sidebarItem]}>
            <MaterialIcons name="edit" size={24} color="black" />
            <Text style={styles.sidebarText}>Change password</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.sidebarItem, styles.sidebarItem]}>
            <MaterialIcons name="support-agent" size={24} color="black" />
            <Text style={styles.sidebarText}>Suport</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.sidebarItem, styles.sidebarItem]}>
          <Ionicons name="language-outline" size={24} color="black" />
            <Text style={styles.sidebarText}>Language</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.sidebarItem, styles.sidebarItem]}>
          <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text style={styles.sidebarText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingVertical: 20,
  },
  button: {
    backgroundColor: '#B5B5B5'
  }, 
  sidebarItem: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    flexDirection: 'row',
  },
  sidebarItemLarge: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f2f2f2',
    flexDirection: 'row',
  },
  sidebarText: {
    fontSize: 24,
    marginLeft: 20,
  },
  sideBarTextLarge: {
    fontSize: 28,
    marginLeft: 20,
  },
  mainContent: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    fontSize: 20,
  },
});

