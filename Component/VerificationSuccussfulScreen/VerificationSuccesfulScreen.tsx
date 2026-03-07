import { useRouter } from 'expo-router'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import CustomButton from '../CustomButton/CustomButton'

export default function VerificationSuccesfulScreen() {
  const router = useRouter()

  const handleStartOrdering = () => {
    router.replace('/(tabs)/home') 
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/successfulicon.png')}
            resizeMode="contain"
          />

          <Text style={styles.title}>Verification Successful!</Text>

          <Text style={styles.subtitle}>
            Welcome to Chucks Kitchen
          </Text>

          <View style={styles.buttonContainer}>
            <CustomButton
             style={{paddingHorizontal:16}}
              title="Start Ordering"
              onPress={handleStartOrdering}
            />
          </View>
        </View>

        <View style={styles.secureTextContainer}>
          <Text style={styles.secureText}>
            Secure encrypted verification process
          </Text>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingBottom: 30,

    backgroundColor: '#FFFFFF',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 110,
    height: 110,
  },

  title: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 20,
    textAlign: 'center',
  },

  subtitle: {
    fontFamily: 'MontserratMedium',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 10,
    color: '#8D8781',
    textAlign: 'center',
  },

  buttonContainer: {
    marginTop: 30,
    width: '80%',
  },

  secureTextContainer: {
    alignItems: 'center',
  },

  secureText: {
    fontFamily:'MontserratMedium',
    fontSize: 12,
    color: '#D3D3D3',
  },
})