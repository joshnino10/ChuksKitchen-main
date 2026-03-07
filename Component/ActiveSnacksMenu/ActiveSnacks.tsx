import { FlatList, ScrollView } from 'react-native'
import React from 'react'
import Card from '../CardComponent/Card'
import { snacksmenu } from './SnacksMenu'

export default function ActiveSwallowMenu() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
      
      <FlatList
        data={snacksmenu}
        numColumns={2}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        columnWrapperStyle= {{justifyContent: 'space-between', marginBottom:15}}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom:300}}
        renderItem={({ item,}) => <Card item={item} />}
      />

    </ScrollView>
  )
}

