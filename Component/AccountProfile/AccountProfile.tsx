import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

export default function AccountProfile() {

  const [image, setImage] = useState(require('../../assets/images/profile image.jpg'))
  const AccountName = "Favour Ben"
  const Email = 'favour@gmail.com'

  
  const pickImage = async () => {

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1,1],
      quality: 1,
    })

    if (!result.canceled) {
      setImage({ uri: result.assets[0].uri })
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.imgContainer} onPress={pickImage}>
            
            <Image 
              style={styles.profileImg} 
              source={image}
            />

            <Image 
              style={styles.editIcon}  
              source={require('../../assets/images/change icon.png')} 
            />

        </TouchableOpacity>

        <Text style={styles.AccountName}>{AccountName}</Text>
        <Text style={styles.Email}>{Email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
    },

    imgContainer:{
        borderWidth:5,
        borderColor:'#FE8300',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },

    profileImg:{
        width:87,
        height:87,
        borderRadius:9,
        resizeMode:'cover'
    },

    editIcon:{
        position:'absolute',
        bottom:-3,
        right:-7,
        width:24,
        height:24
    },

    AccountName:{
        fontFamily: 'PoppinsSemiBold',
        marginTop:5,
        fontSize:20,
        fontWeight:"600",

    },

    Email:{
        fontFamily: 'PoppinsRegular',
        color:'#868181',
        fontWeight:'400',
        fontSize:16,


    }
})