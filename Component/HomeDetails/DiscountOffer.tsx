import React from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function DiscountOffer() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/shop now image.png')}
        style={styles.image}
        imageStyle={styles.imageRadius}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Up to 35% Offer</Text>

          <Text style={styles.subtitle}>
            Enjoy your dinner offer{"\n"}of every day.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SHOP NOW</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    paddingHorizontal:16,
  },

  image:{
    width:"100%",
    height:160,
    justifyContent:'center'
  },

  imageRadius:{
    borderRadius:20
  },

  content:{
    paddingLeft:20,
    width:'60%'
  },

  title:{
    fontFamily: 'MontserratSemiBold',
    fontSize:18,
    fontWeight:'700',
    color:'#FFFFFF'
  },

  subtitle:{
    fontFamily: 'MontserratMedium',
    fontSize:14,
    marginTop:6,
    color:'#FFFFFF'
  },

  button:{
    marginTop:20,
    backgroundColor:'#FE8300',
    paddingVertical:6,
    height:36,
    justifyContent:'center',
    paddingHorizontal:14,
    borderRadius:12,
    alignSelf:'flex-start'
  },

  buttonText:{
    fontFamily: 'MontserratBold',
    color:'#fff',
    fontSize:14,
    fontWeight:'600'
  }
})