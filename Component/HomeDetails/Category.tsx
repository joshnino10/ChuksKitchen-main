import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

export default function Category() {

  const router = useRouter()

  const gotoSearch = ()=> {
    router.push('/(tabs)/explore')
  }

  const category = [
    {
      id:'1',
      image: require('../../assets/images/rice icon.png'),
      food:'Rice'
    },
    {
      id:'2',
      image: require('../../assets/images/swallow icon.png'),
      food:'Swallow'
    },
    {
      id:'3',
      image: require('../../assets/images/soup icon.png'),
      food:'Soup'
    },
    {
      id:'4',
      image: require('../../assets/images/snacks.png'),
      food:'Snacks'
    },
    {
      id:'5',
      image: require('../../assets/images/drinks icon.png'),
      food:'Drinks'
    },
  ]

  return (
    <View style={styles.Container}>
      
    
      <View style={styles.header}>
        <Text style={styles.categoryText}>Category</Text>

        <TouchableOpacity onPress={gotoSearch}>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

    
      <View style={styles.row}>
        {category.map((item) => (
          <TouchableOpacity key={item.id} style={styles.content}>
            <Image style={styles.icon} source={item.image}/>
            <Text style={styles.food}>{item.food}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    marginTop:30,
    paddingHorizontal:16,
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },

  categoryText:{
    fontFamily:"MontserratSemiBold",
    fontSize:14,
    fontWeight:'600',
    color:'#000000'
  },

  seeAll:{
    fontFamily:"MontserratSemiBold",
    fontSize:12,
    fontWeight:'600',
    color:'#FE8300'
  },

  row:{
    flexDirection:'row',
    justifyContent:"space-between",
    marginTop:15
  },

  content:{
    alignItems:'center',
    gap:6
  },

  icon:{
    width:46,
    height:46
  },

  food:{
    fontFamily:'MontserratMedium',
    fontSize:12,
    fontWeight:'500',
    color: '#000000'
  }
})