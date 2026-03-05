import React from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fastfood } from '../QuickFood/QuickFood'


export default function FastFood() {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.card}>
        <ImageBackground
          source={item.image} 
          style={styles.image}
          imageStyle={{ borderRadius: 20 }}
          resizeMode="cover"
        >
         
          <View style={styles.darkOverlay} />

        
          <View style={styles.overlay}>
            <Text numberOfLines={2} style={styles.title}>{item.FoodName}</Text>

            <View  style={styles.badge}>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.dot} />
              <Image style={styles.star} source={require('../../assets/images/Star 1.png')} />
              <Text style={styles.rating}>{item.rate}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={fastfood}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    marginRight: 16,
    width: 240,
    height: 147,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  darkOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 20,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    right: 10,
    flexDirection: 'column',
    gap: 6,
  },
  title: {
    fontFamily: 'MontserratSemiBold',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 12,
    gap: 4,
    overflow: 'hidden',
  },
  price: {
    fontFamily: 'MontSerratSemiBold',
    color: '#F6F6F6',
    fontWeight: 'bold',
    fontSize: 12,

  },
  rating: {
    fontFamily: 'MontSerratSemiBold',
    color: 'white',
    fontWeight: '600',
    fontSize:10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'white',
  },
  star: {
    width: 12,
    height: 12,
    marginHorizontal: 2,
  },
})