import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

export default function CustomSplash2() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)'); // change to your next screen
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/product logo.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FE8300", // prevents white flash
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 242,
    height: 172,
    resizeMode: "cover",
  },
});