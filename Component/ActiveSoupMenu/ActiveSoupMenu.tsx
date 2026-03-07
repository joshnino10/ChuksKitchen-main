import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import Card from '../CardComponent/Card'
import { soupmenu } from './SoupMenu'

export default function ActiveSoupMenu() {
  return (
    <View>
        <FlatList
         data={soupmenu}
         numColumns={2}
         scrollEnabled={false}
         keyExtractor={(item)=> item.id}
         renderItem={({item})=> <Card item={item}/>}
         contentContainerStyle={styles.list}
         
        />
      
    </View>
  )
}

const styles = StyleSheet.create({
    list:{
        paddingLeft: 16,
        paddingTop: 16,
    }

})