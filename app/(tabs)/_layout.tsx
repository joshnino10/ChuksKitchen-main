import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet } from 'react-native';

export default function Tablayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
         tabBarActiveTintColor: '#FE8300',
         tabBarInactiveTintColor: '#D3D3D3',

        tabBarBackground: () => (
          <BlurView
            intensity={50}
            tint="light"
            style={styles.BlurView}
          />
        ),

        tabBarStyle: {
          position: "absolute",
          marginHorizontal: 16,
          bottom: 20,
          borderRadius: 2000,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F2EBE333",
          paddingTop: 10,
          borderWidth: 0.3,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 4,

          elevation: 10,
        },

        tabBarIconStyle: {
          justifyContent: "center",
          alignItems: "center",
        },

        tabBarLabelStyle:{
          fontFamily: 'MontserratSemiBold',
          fontSize:8,
          marginTop:1,
          fontWeight:'400',

        }
      }}
    >
      <Tabs.Screen 
        name="home"
        options={{
          title:'Home',
          tabBarIcon: ({focused}) => (
            <Image 
            source={
               focused? require('../../assets/images/active home icon.png'):
               require('../../assets/images/in active home icon.png')
               
            }
             style={styles.icon}
             resizeMode="contain"
            />
          )
        }}
       />
      <Tabs.Screen
       name="explore" 
        options={{
          title:'Explore',
          tabBarIcon: ({focused}) =>(
            <Image
             source={
              focused? require('../../assets/images/explore active icon.png'):
              require('../../assets/images/explore inactive icon.png')

             } 
             style={styles.icon}
             resizeMode="contain"/>
          )
        }}/>

      <Tabs.Screen 
      name="orders" 
      options={{
        title:'Orders',
        tabBarIcon: ({focused})=>(
          <Image source={
            focused? require('../../assets/images/order active icon.png'):
            require('../../assets/images/order inactive icon.png')
          }
          style={styles.icon}
          resizeMode="contain"/>
        )
      }}/>

      <Tabs.Screen
       name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({focused})=>(
            <Image source={focused?
              require('../../assets/images/active profile icon.png'):
              require('../../assets/images/inactive profile icon.png')
            }
            style={styles.icon}
            resizeMode="contain"/>
          )
        }}
       />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  BlurView:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    borderRadius:2000,
    overflow:'hidden',
  },

  icon:{
    width:24,
    height:24
  }


})