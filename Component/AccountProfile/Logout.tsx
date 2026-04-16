import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { router } from 'expo-router';

export default function Logout() {

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Yes",
          style: "destructive",
          onPress: () => {
            console.log("User logged out");
            router.replace('/(auth)/login')
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.row} onPress={handleLogout}>
        <Image
          style={styles.icon}
          source={require('../../assets/images/logout.png')}
        />
        <Text style={styles.text}>Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    alignItems: 'center',
    paddingHorizontal:16
  },
  row: {
    backgroundColor: '#F49698',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 5,
    width: '100%', 
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: '#FB1616',
  },

  text: {
    fontFamily:'PoppinsBold',
    color: '#FB1616',
    fontSize: 16,
    fontWeight: '500',
  },
})