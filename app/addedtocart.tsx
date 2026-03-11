import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import AddedSuccessfully from "@/Component/AddedToCartDisplay/AddedSuccessfully";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Addedtocart() {
  const router = useRouter();

  const goback = () => {
    router.back();
  };

  const goToCart = () => {
    router.replace("/orders");
  };
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goback}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToCart}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require('../assets/images/added cart icon.png')}
          
          />
        </TouchableOpacity>
      </View>

      <AddedSuccessfully />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeArea: {
    flex: 1,
    backgroundColor: "white",
  },

  header:{
    paddingHorizontal:16,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

}
});
