import { Image, StyleSheet, View, Text } from "react-native";
import React from "react";
import Animated, {
  BounceInDown,

} from "react-native-reanimated";

export default function AddedSuccessfully() {
  return (
    <View style={styles.Container}>
      <Image
        style={styles.icon}
        source={require("../../assets/images/succes added icon.png")}
      />

      <Animated.View
        style={{ marginTop: 20 }}
        entering={BounceInDown.duration(800)}
      >
        <Text style={styles.title}>Added to Cart</Text>
        <Text style={styles.subtitle}>Successfully!</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  icon: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 10,
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    color: "#45413C",
    fontWeight: "600",
  },
  subtitle: {
    marginTop: 1,
    fontFamily: "MontserratSemiBold",
    fontSize: 20,
    textAlign: "center",
    color: "#FE8300",
  },
});
