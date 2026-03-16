import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ConfirmOrder from '@/Component/OrderConfirmed/ConfirmOrder'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Orderconfirm() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ConfirmOrder/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white',
    paddingTop: Platform.OS === 'android'? 10:0,
  }

})