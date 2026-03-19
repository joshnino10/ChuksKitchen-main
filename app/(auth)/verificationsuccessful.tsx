import VerificationSuccesfulScreen from '@/Component/VerificationSuccussfulScreen/VerificationSuccesfulScreen'
import React from 'react'
import { StyleSheet, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function VerificationSuccessful() {
  return (
    <SafeAreaView style={styles.SafeArea}>
       <StatusBar barStyle='dark-content' backgroundColor='white'  />
      <VerificationSuccesfulScreen/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'white',

  }

})