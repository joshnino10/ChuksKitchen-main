import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

export default function HomeHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

    
        <View style={styles.profileRow}>
          <TouchableOpacity>
            <Image
              style={styles.avatar}
              source={require('../../assets/images/img.png')}
            />
          </TouchableOpacity>

          <View>
            <Text style={styles.deliverText}>Deliver to</Text>

            <TouchableOpacity style={styles.locationRow}>
              <Text numberOfLines={1} style={styles.locationText}>
                Yabaleft Sabo Yaba, Lagos
              </Text>

              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color="#FE8300"
              />
            </TouchableOpacity>
          </View>
        </View>

    
        <TouchableOpacity style={styles.bellButton}>
          <Fontisto name="bell" size={22} color="black" />
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },

  avatar: {
    width: 38,
    height: 38,
    borderRadius: 100,
  },

  deliverText: {
    fontFamily: 'MontserratRegular',
    fontSize: 12,
    color: '#000000',
    fontWeight:'400',
    marginBottom: 2,
  },

  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 14,
    fontWeight: '600',
    marginRight: 3,
  },

  bellButton: {
    padding: 8,
  },
})