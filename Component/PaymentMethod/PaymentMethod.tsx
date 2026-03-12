import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useState } from "react";
  import MaterialIcons from "@expo/vector-icons/MaterialIcons";
  
  export default function PaymentMethod() {
    const [selectedTime, setSelectedTime] = useState(null);
  
    const time = [
      { id: "1", time: "ASAP (35m)" },
      { id: "2", time: "17:00 - 18:00" },
      { id: "3", time: "Tomorrow morning" },
    ];
  
    return (
      <View style={styles.Container}>
        {/* Delivery Address Header */}
        <View style={styles.header}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/images/location icon.png")}
          />
          <Text style={styles.delivery}>Delivery Address</Text>
        </View>
  
        {/* Address Card */}
        <TouchableOpacity activeOpacity={0.7} style={styles.HomeAddressContainer}>
          <View style={styles.leftSection}>
            <Image
              style={styles.homeIcon}
              source={require("../../assets/images/home delivery icon.png")}
            />
  
            <View>
              <Text style={styles.addressTitle}>Home</Text>
              <Text style={styles.addressText}>
                Yaba College of Technology, Lagos {"\n"}00000
              </Text>
            </View>
          </View>
  
          <MaterialIcons name="arrow-forward-ios" size={17} color="#868181" />
        </TouchableOpacity>
  
        {/* Delivery Time Header */}
        <View style={styles.deliveryheader}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/images/delivery clock.png")}
          />
          <Text style={styles.delivery}>Delivery Time</Text>
        </View>
  
        {/* Time Options */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
          contentContainerStyle={{ paddingHorizontal: 16 }}
        >
          {time.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => setSelectedTime(item.id)}
              style={{
                paddingVertical: 12,
                paddingHorizontal: 16,
                borderRadius: 12,
                marginRight: 10,
                backgroundColor:
                  selectedTime === item.id ? "#FE8300" : "#F5F5F5",
              }}
            >
              <Text
                style={{
                  color: selectedTime === item.id ? "#fff" : "#000",
                  fontFamily: "poppinsSemiBold",
                  fontWeight: "600",
                  fontSize: 12,
                }}
              >
                {item.time}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        {/* Payment Method Header */}
        <View style={styles.deliveryheader}>
          <Image
            style={{ width: 24, height: 24 }}
            source={require("../../assets/images/payment delivery icon.png")}
          />
          <Text style={styles.delivery}>Payment Method</Text>
        </View>
  
        {/* Visa Card */}
        <TouchableOpacity activeOpacity={0.7} style={styles.HomeAddressContainer}>
          <View style={styles.leftSection}>
            <Image
              style={styles.homeIcon}
              source={require("../../assets/images/visa card.png")}
            />
  
            <View>
              <Text style={styles.addressTitle}>Visa Classic</Text>
              <Text style={styles.addressText}>**** **** **** 4567</Text>
            </View>
          </View>
  
          {/* Orange check icon instead of arrow */}
          <View style={styles.activeIcon}>
            <MaterialIcons name="check" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    Container: {
      marginTop: 30,
    },
  
    header: {
      flexDirection: "row",
      paddingHorizontal: 16,
      alignItems: "center",
      gap: 6,
    },
  
    delivery: {
      fontFamily: "MontserratSemiBold",
      fontSize: 16,
      fontWeight: "600",
    },
  
    HomeAddressContainer: {
      marginTop: 10,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 10,
      paddingVertical: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#FE8300",
      backgroundColor: "#fff",
    },
  
    leftSection: {
      flexDirection: "row",
      gap: 11,
      alignItems: "center",
    },
  
    homeIcon: {
      width: 52,
      height: 52,
    },
  
    addressTitle: {
      fontFamily: "poppinsMedium",
      fontSize: 14,
      fontWeight: "600",
    },
  
    addressText: {
      fontFamily: "poppinsMedium",
      fontSize: 10,
      color: "#868181",
      marginTop: 2,
    },
  
    deliveryheader: {
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      gap: 6,
      marginTop: 40,
    },
  
    activeIcon: {
      backgroundColor: "#FE8300",
      borderRadius: 20,
      justifyContent: "center",
      alignItems: "center",
    },
  });