import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from '@/Component/OnboardingScreen/Onboarding'

export default function index() {
  return (
    <View style={styles.Container}>
      <Onboarding/>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }


})
