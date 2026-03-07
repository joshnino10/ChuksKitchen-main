import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Card from '../CardComponent/Card'
import { swallowmenu } from './SwallowMenu'

export default function ActiveSwallowMenu() {
  return (
    <View style={styles.container}>
      <FlatList
        data={swallowmenu}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
        contentContainerStyle={styles.contentStyle}
        renderItem={({ item }) => <Card item={item}  />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20
  },
  contentStyle:{
    paddingRight: 16,
    paddingLeft:16,
    
  }
})