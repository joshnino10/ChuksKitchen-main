
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function ExploreHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>

    
        <View style={styles.profileRow}>
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
          <Image style={styles.icon} source={require('../../assets/images/Cart.png')}/>
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

  icon:{
    width:24,
    height:24,

  },
  
  bellButton: {
    padding: 8,
  },
})