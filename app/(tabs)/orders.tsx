import Cartitem from '@/Component/Cart/CartItem'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Orders() {
  return (
    <View style={styles.view}>
      <Cartitem/>
    </View>
  )
}

const styles = StyleSheet.create({
  view:{
    flex:1,
    backgroundColor:'white'
  }

})