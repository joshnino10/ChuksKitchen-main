import React from 'react'
import { ScrollView, FlatList} from 'react-native'
import { drinkmenu } from './DrinksMenu'
import Card from '../CardComponent/Card'

export default function ActiveDrinksMenu() {
  return (
      <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
         
         <FlatList
           data={drinkmenu}
           numColumns={2}
           scrollEnabled={false}
           showsHorizontalScrollIndicator={false}
           keyExtractor={(item) => item.id}
           columnWrapperStyle= {{justifyContent: 'space-evenly', marginBottom:15}}
           contentContainerStyle={{ paddingHorizontal: 16, paddingBottom:300}}
           renderItem={({ item,}) => <Card item={item} />}
         />
   
       </ScrollView>
  )
}

