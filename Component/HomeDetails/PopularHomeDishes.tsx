import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { populardishes } from '../PopularDishes/Populardishes'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';


export default function PopularHomeDishes() {

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.foodName}>{item.Food}</Text>

          <View style={{flexDirection:'row', gap:5, alignItems:'center'}}>
           <EvilIcons name="clock" size={15} color="#8D8781" />
            <Text style={styles.time}>{item.Time}</Text>
          </View>

          <View style={{flexDirection:'row', gap:5, alignItems:'center', marginTop:5}}>
          <AntDesign name="star" size={12} color="#FE8300" /> 
            <Text style={styles.rate}>{item.Rate}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.Price}</Text>
          <TouchableOpacity style={styles.AddContainer}>
            <Entypo name="plus" size={20} color="#FFFFFF" />

          </TouchableOpacity>
          </View>
         
        </View>
      </View>
    )
  }

  return (
    <View style={styles.Container}>
      <View style={styles.header}>
        <Text style={styles.popularDishes}>Popular Dishes</Text>

        <TouchableOpacity >
          <Text style={styles.viewall}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={populardishes.slice(0, 6)}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{
    marginTop:50
  },

  header:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:16
  },

  popularDishes:{
    fontFamily: 'MontserratSemiBold',
    fontSize:14,
    fontWeight: '600'
  },

  viewall:{
    fontFamily: 'MontserratSemiBold',
    fontSize:12,
    fontWeight: '600',
    color: '#FE8300'
  },

  list:{
    paddingLeft:16,
    paddingTop:16
  },

  card:{
    width:160,
    marginRight:16,
    backgroundColor:'#F2EBE3',
    borderRadius:20,
    overflow:'hidden'
  },

  image:{
    width:'100%',
    height:110,
    borderRadius:20,
    resizeMode:'cover'
  },

  textContainer:{
    padding:10,
  
  },

  foodName:{
    fontFamily: 'MontserratSemiBold',
    fontSize:13,
    fontWeight:'600',
    marginBottom:4
  },
  time:{
    fontFamily: 'MontserratMedium',
    fontSize:12,
   
    color: '#8D8781'
    
  },

  rate:{
      fontFamily: 'MontserratMedium',
      fontSize:12,
      marginBottom:4,
      color: '#8D8781'
    },

    priceContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'

    },
  price:{
    fontFamily: 'MontserratSemiBold',
    fontSize:16,
    marginBottom:4,
    fontWeight:'600',
   
  },
  AddContainer:{
    backgroundColor:'#FE8300',
    height:22,
    width:22,
    marginBottom:4,
    borderRadius:20,
    justifyContent: 'center',
    alignItems:'center'
  }
})