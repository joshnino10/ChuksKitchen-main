import AccountProfile from '@/Component/AccountProfile/AccountProfile'
import AccountSections from '@/Component/AccountProfile/AccountSections'
import React from 'react'
import { ScrollView, StyleSheet, } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



export default function Profile() {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <AccountProfile/>
        <AccountSections/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex:1,
    backgroundColor:'#FFFFFF'
  },
  scrollContent:{
    paddingBottom: 80,
 
  },
})