import Ionicons from '@expo/vector-icons/Ionicons';
import React from "react";
import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCart } from "../../context/CartContext";
import { useRouter } from 'expo-router';


export default function ConfirmOrder() {

  const router = useRouter();

  const GotoHome = ()=>{

    router.replace('/(tabs)/home')
  }


  const { cartItems } = useCart();
  const currentStep = 2;

  const item = cartItems[0]; 

  return (
    <SafeAreaView style={styles.container}>

      {/* Food Image */}
      {item && (
        <Image style={styles.image} source={item.image} />
      )}

      {/* Delivery Info */}
      <View style={styles.rightContainer}>
        <Image
          style={styles.icon}
          source={require("../../assets/images/sharp-verified.png")}
        />
        <Text style={styles.deliveryTime}>35-40 mins</Text>
      </View>

      {/* Confirmation Text */}
      <Text style={styles.orderConfirmed}>Order Confirmed!</Text>
      <View>
            <Image style={{width:260, height:60, marginTop:10}} source={require('../../assets/images/lottie delivery.png')}  />
          </View>

      {/* ORDER TRACKER */}
      <View style={styles.trackerContainer}>

        <View style={styles.line} />
        <View
          style={[
            styles.activeLine, 
            { width: currentStep === 1 ? "0%" : currentStep === 2 ? "40%" : "100%" },
          ]}
        />

        <View style={styles.steps}>

          {/* Step 1 */}
          <View style={styles.step}>
            <View style={[styles.circle, currentStep >= 1 && styles.activeCircle]}>
              <Image style={{width:24, height:24}} source={require('../../assets/images/order.png')}/>
            </View>
            <Text style={styles.label}>Order{"\n"}Received</Text>
          </View>
         

          {/* Step 2 */}
          <View style={styles.step}>
            <View style={[styles.circle, currentStep >= 2 && styles.activeCircle]}>
            <Image style={{width:24, height:24}} source={require('../../assets/images/cooking.png')}/>
            </View>
            <Text style={styles.label}>Cooking{"\n"}Started</Text>
          </View>

          {/* Step 3 */}
          <View style={styles.step}>
            <View style={[styles.circle, currentStep >= 3 && styles.activeCircle]}>
            <Image style={{width:24, height:24}} source={require('../../assets/images/delivery.png')}/>
            </View>
            <Text style={styles.label}>Out for{"\n"}Delivery</Text>
          </View>

        </View>

      </View>

      <TouchableOpacity style={styles.btn} >
         <Ionicons name="location-outline" size={24} color="white" />
        <Text style={styles.btnText}>Track Order</Text>
      </TouchableOpacity>
      
      <Pressable onPress={GotoHome}>
         <Text style={styles.backhomeText}>Back Home</Text>
      </Pressable>






    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 30,
  },

  image: {
    width: 280,
    height: 180,
    borderRadius: 12,
    resizeMode: "contain",
  },

  rightContainer: {
    marginTop: -40,
    marginLeft: 200,
    alignItems: "center",
  },

  icon: {
    width: 34,
    height: 34,
  },

  deliveryTime: {
    fontSize: 12,
    marginTop: 4,
    color: "#555",
    fontWeight: "600",
  },

  orderConfirmed: {
    fontFamily:'MontserratSemiBold',
    marginTop: 20,
    fontSize: 32,
    fontWeight: "600",
  },

  trackerContainer: {
    marginTop: 40,
    width: "80%",
  },

  line: {
    position: "absolute",
    top: 25,
    left: 40,
    right: 40,
    height: 4,
    backgroundColor: "#ddd",
  },

  activeLine: {
    position: "absolute",
    top: 25,
    left: 40,
    height: 4,
    backgroundColor: "#FF8C00",
  },

  steps: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },

  step: {
    alignItems: "center",
  },

  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },

  activeCircle: {
    borderWidth:2,
    borderColor:'#FFFFFF',
    backgroundColor: "#FF8C00",
  },

  label: {
    fontFamily:'MontserratMedium',
    textAlign: "center",
    fontSize: 12,
    fontWeight:'500',
  },
  btn:{
    marginTop:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:6,
    backgroundColor:'#FE8300',
    paddingVertical:15,
    borderRadius:10,
    width:'70%',
  },

  btnText:{
    fontSize:16,
    fontWeight:'600',
    color:'#FFFFFF',
    fontFamily:'MontserratSemiBold'
  },

  backhomeText:{
    marginTop:20,
    fontSize:16,
    fontWeight:'600',
    fontFamily:'MontserratSemiBold'

  },
 
  

});