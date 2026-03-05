import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, StatusBar, StyleSheet, View } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CustomSplashScreen() {
  const router = useRouter();

  // Animated values for drift
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Drift vertically
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, { toValue: -20, duration: 4000, useNativeDriver: true }),
        Animated.timing(translateY, { toValue: 0, duration: 4000, useNativeDriver: true }),
      ])
    ).start();

    // Drift horizontally
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX, { toValue: 15, duration: 6000, useNativeDriver: true }),
        Animated.timing(translateX, { toValue: 0, duration: 6000, useNativeDriver: true }),
      ])
    ).start();

  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Animated.Image
        source={require('../../assets/images/Splahscreen.png')}
        style={[
          styles.image,
          {
            transform: [
              { translateY: translateY },
              { translateX: translateX },
            ],
          },
        ]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width + 40,   // extra width for horizontal drift
    height: height + 40, // extra height for vertical drift
  },
});