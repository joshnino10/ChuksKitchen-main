import Category from '@/Component/HomeDetails/Category'
import FastFood from '@/Component/HomeDetails/FastFood'
import HomeHeader from '@/Component/HomeDetails/HomeHeader'
import PopularHomeDishes from '@/Component/HomeDetails/PopularHomeDishes'
import Search from '@/Component/HomeDetails/Search'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Home() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <HomeHeader />
        <Search/>
        <FastFood/>
        <Category/>
        <PopularHomeDishes/>
    
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 100,
  },
})