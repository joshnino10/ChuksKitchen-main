import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { populardishes } from "../PopularDishes/Populardishes";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";

export default function PopularHomeDishes() {
  const router = useRouter();

  const renderItem = ({ item}:any) => {
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} />

        <View style={styles.textContainer}>
          <Text style={styles.foodName}>{item.Food}</Text>

          <View style={styles.row}>
            <EvilIcons name="clock" size={15} color="#8D8781" />
            <Text style={styles.time}>{item.Time}</Text>
          </View>

          <View style={[styles.row, { marginTop: 5 }]}>
            <AntDesign name="star" size={12} color="#FE8300" />
            <Text style={styles.rate}>{item.Rate}</Text>
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.price}>{item.Price}</Text>

            <TouchableOpacity
              style={styles.addContainer}
              onPress={() => router.push(`/populardishes/${item.id}`)}
            >
              <Entypo name="plus" size={16} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.popularDishes}>Popular Dishes</Text>

        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={populardishes.slice(0, 6)}
        renderItem={renderItem}
        horizontal
        keyExtractor={(item) => String(item.id)}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  popularDishes: {
    fontFamily: "MontserratSemiBold",
    fontSize: 14,
  },

  viewAll: {
    fontFamily: "MontserratSemiBold",
    fontSize: 12,
    color: "#FE8300",
  },

  list: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },

  card: {
    width: 160,
    marginRight: 16,
    marginBottom: 10,
    backgroundColor: "#F2EBE3",
    borderRadius: 20,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,

    elevation: 8,
  },

  image: {
    width: "100%",
    height: 110,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    resizeMode: "cover",
  },

  textContainer: {
    padding: 10,
  },

  foodName: {
    fontFamily: "MontserratSemiBold",
    fontSize: 13,
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  time: {
    fontFamily: "MontserratMedium",
    fontSize: 12,
    color: "#8D8781",
  },

  rate: {
    fontFamily: "MontserratMedium",
    fontSize: 12,
    color: "#8D8781",
  },

  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
  },

  price: {
    fontFamily: "MontserratSemiBold",
    fontSize: 16,
  },

  addContainer: {
    backgroundColor: "#FE8300",
    height: 26,
    width: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },
});