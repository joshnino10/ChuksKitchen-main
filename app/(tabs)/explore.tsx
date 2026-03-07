import ActiveMenu from '@/Component/ExploreDetails/ActiveMenu'
import ExploreHeader from '@/Component/ExploreDetails/ExoplreHeader'
import SearchExplore from '@/Component/ExploreDetails/SearchExplore'
import React from 'react'
import { StyleSheet,} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Explore() {
  return (
    <SafeAreaView style={styles.SafeArea}>
        <ExploreHeader/>
        <SearchExplore/>
        <ActiveMenu/>
     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeArea:{
    flex: 1,
    backgroundColor: 'white',
  },


})