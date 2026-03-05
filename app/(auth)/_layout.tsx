import { Stack } from 'expo-router'
import React from 'react'


export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown:false, gestureEnabled:false}} >
        <Stack.Screen name="index"/>
        <Stack.Screen name="login"/>
        <Stack.Screen name="verifynumber"/>
        <Stack.Screen name="verifyemail"/>
        <Stack.Screen name="verificationsuccessful"/>

    </Stack>
   
  )
}
