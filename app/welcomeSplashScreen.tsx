import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomSplash2 from '@/Component/CustomSplashScreen/CustomSplash2'


export default function WelcomeSplashScreen() {
  return (
    <View style={styles.Container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
      <CustomSplash2/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:'#FE8300',
        justifyContent: "center",
        alignItems: "center",
      },
})