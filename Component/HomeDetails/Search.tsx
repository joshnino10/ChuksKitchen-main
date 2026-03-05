import React, { useState } from 'react'
import { Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

export default function Search() {
  const [search, setSearch] = useState('')

  return (
    <View style={styles.container}>
      
      <Feather name="search" size={24} color="#A0A0A0" style={styles.icon} />

    
      <TextInput
        placeholder="Search for jollof rice..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
        placeholderTextColor="#A0A0A0"
      />

      <TouchableOpacity style={styles.rightIcon}>
        <Image
          style={{ width: 33, height: 31 }}
          source={require('../../assets/images/seachbox icon.png')}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
    height: 50,
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 20,
    paddingHorizontal: 12,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    color: '#000',
  },
  rightIcon: {
    marginLeft: 8,
  },
})