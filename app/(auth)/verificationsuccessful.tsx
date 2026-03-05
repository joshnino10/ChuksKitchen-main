import VerificationSuccesfulScreen from '@/Component/VerificationSuccussfulScreen/VerificationSuccesfulScreen'
import React from 'react'
import { StyleSheet,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function VerificationSuccessful() {
  return (
    <SafeAreaView style={styles.SafeArea}>
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