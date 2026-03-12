import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Checkout from '@/Component/Checkout/Checkout'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function CheckoutOrder() {
  return (
    <SafeAreaView style={styles.safearea}>
     <Checkout/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    safearea:{
        flex:1,
        backgroundColor:'white',
      
    }
})