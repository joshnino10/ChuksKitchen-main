import Email from "@/Component/Email/Email";
import PhoneNumber from "@/Component/PhoneNumber/PhoneNumber";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [activeTab, setActiveTab] = useState("Phone Number");

  const router = useRouter()

  const gotoLogin = ()=>{
    router.replace('/(auth)/login')
  }

  const tabs = [
    { id: "1", tab: "Phone Number" },
    { id: "2", tab: "Email" },
  ];

  return (
    <SafeAreaView style={styles.container}>
   
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/small product logo.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>Join Chucks Kitchen</Text>
        <Text style={styles.subTitle}>
          Experience authentic Nigeria homemade meals delivered to your door.
        </Text>
      </View>

    
      <View style={styles.tabContainer}>
        {tabs.map((item) => {
          const isActive = activeTab === item.tab;

          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.tabButton,
                isActive && styles.activeTabButton,
              ]}
              onPress={() => setActiveTab(item.tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  isActive && styles.activeTabText,
                ]}
              >
                {item.tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

    
      <View style={styles.content}>
        <Animated.View
          key={activeTab}
          entering={FadeInRight.duration(300)}
          exiting={FadeOutLeft.duration(300)}
        >
          {activeTab === "Phone Number" && <PhoneNumber/>}
          {activeTab === "Email" && <Email/>}
        
        </Animated.View>
      </View>

      <View style={styles.diverContainer}>
        <View  style={styles.divider}/>
        < Text style={styles.continuewithText}>OR CONTINUE WITH</Text>
        <View  style={styles.divider}/>

      </View>
        <View style={{flexDirection:"row", alignSelf: "center", alignItems:'center', marginTop:40, gap:40 }}>
          <TouchableOpacity style={styles.logoCircle}>
            <Image style={styles.Accountlogo} source={require('../../assets/images/google.png')}/>
            
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoCircle}>
            <Image  style={styles.Accountlogo}source={require('../../assets/images/apple-logo.png')}/>
          
          </TouchableOpacity>
        </View>

        <View style={{
          marginTop:50,
          flexDirection:'row',
          alignSelf:'center',
        }}>
          <Text style={styles.lableText}>Already have an account? </Text>
          <TouchableOpacity onPress={gotoLogin}>
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>

        </View>





    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
    backgroundColor: "#FFFFFF",
  },

  header: {
   
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    width: 88,
    height: 63,
    resizeMode: "contain",
  },

  title: {
    fontFamily: 'MontserratSemiBold',
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },

  subTitle: {
    fontFamily: 'MontserratMedium',
    color: "#8D8781",
    textAlign: "center",
    fontSize: 14,
    marginTop: 10,
  },

  tabContainer: {

    flexDirection: "row",
    backgroundColor: "#F5F5F5",
    borderRadius: 12,
    marginTop: 40,
    padding: 5,
  },

  tabButton: {
    flex: 1,
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 10,
  },

  activeTabButton: {
    backgroundColor: "#FFFFFF",
  
  },

  tabText: {
    fontFamily: 'MontserratMedium',
    color: "#8D8781",
    fontSize: 16,
    fontWeight:'500',
    textTransform: "capitalize",
  },

  activeTabText: {
    fontFamily: 'MontserratMedium',
    fontSize:16,
    color: "#000000",
    fontWeight: "600",
  },

  content: {
    marginTop: 40,
    minHeight: 60,
  },

  placeholderText: {
    fontSize: 16,
    color: "#333",
  },

  diverContainer:{
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'

  },

  divider:{
    width: 109,
    height:2,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 8,

  },
  continuewithText:{
    fontFamily:'MontserratMedium',
    color:'#D3D3D3',
    fontSize:12
  },

  Accountlogo:{
    width:27,
    height:27,
  },

  logoCircle:{
    borderWidth:1,
    borderColor:'#D3D3D3',
    height:44,
    width:64,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
 
  },

  lableText:{
    fontFamily: 'MontserratMedium',
    color:'#D3D3D3',
    fontSize:12,
    fontWeight:'500'
  },

  loginText:{
    fontFamily: 'MontserratBold',
    color:'#FE8300',
    fontSize:12,
    fontWeight:'700'

  }
  

  

});