import { Image, StyleSheet, View, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { useRouter } from "expo-router";

export default function CustomSplash2() {
  const router = useRouter();
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animation loop (fade in & out)
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();

    // Navigate after 5 seconds
    const timer = setTimeout(() => {
      router.replace("/(auth)");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/product logo.png")}
      />

      {/* Animated Loading */}
      <Animated.Image
        style={[styles.loadingstate, { opacity }]}
        source={require("../../assets/images/loading frame.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FE8300",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 242,
    height: 172,
    resizeMode: "cover",
  },

  loadingstate: {
    marginTop: 50,
    width: 80,
    height: 13,
  },
});