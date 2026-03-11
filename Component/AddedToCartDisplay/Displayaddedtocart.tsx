import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Image, StyleSheet, View, Easing } from 'react-native';

export default function Displayaddedtocart() {
  const router = useRouter();
  const { foodImage } = useLocalSearchParams();

  // Animations
  const foodDrop = useRef(new Animated.Value(-300)).current;
  const boxRise = useRef(new Animated.Value(300)).current;
  const lidDrop = useRef(new Animated.Value(-350)).current;
  const slideOut = useRef(new Animated.Value(0)).current;

  useEffect(() => {
   
    Animated.parallel([
      Animated.timing(foodDrop, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(boxRise, {
        toValue: 0,
        duration: 700,
        useNativeDriver: true,
      }),
      Animated.timing(lidDrop, {
        toValue: -60,
        duration: 700,
        useNativeDriver: true,
      }),
    ]).start(() => {
      
      setTimeout(() => {
        Animated.timing(slideOut, {
          toValue: 500,
          duration: 700,
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          router.replace('/addedtocart');
        });
      }, 1000); 
    });
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateX: slideOut }] },
      ]}
    >
      <View style={styles.boxContainer}>
        {/* FOOD IMAGE */}
        {foodImage && (
          <Animated.Image
            source={{ uri: foodImage }}
            style={[
              styles.foodImage,
              { transform: [{ translateY: foodDrop }] },
            ]}
          />
        )}

        {/* BOX BASE */}
        <Animated.Image
          source={require('../../assets/images/deliverbox1.png')}
          style={[
            styles.bottomImage,
            { transform: [{ translateY: boxRise }] },
          ]}
        />

        {/* BOX LID */}
        <Animated.Image
          source={require('../../assets/images/deliveryboxtop.png')}
          style={[
            styles.topImage,
            { transform: [{ translateY: lidDrop }] },
          ]}
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  foodImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
  bottomImage: {
    width: 380,
    height: 290,
    position: 'absolute',
    resizeMode: 'contain',
  },
  topImage: {
    width: 550,
    height: 320,
    position: 'absolute',
    resizeMode: 'contain',
  },
});