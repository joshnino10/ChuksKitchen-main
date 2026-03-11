import { StyleSheet, } from 'react-native'
import React from 'react'
import Displayaddedtocart from '@/Component/AddedToCartDisplay/Displayaddedtocart'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Displayadded() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <Displayaddedtocart/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeArea:{
        flex:1,
        backgroundColor:'white',
    }
})