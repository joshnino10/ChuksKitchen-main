
import React from 'react';
import { Dimensions, StatusBar, StyleSheet, View, Image } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function CustomSplashScreen() {
 

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Image
        source={require('../../assets/images/Splahscreen.png')}
        style={styles.image}
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
    width: width,
    height: height,
  },
});