import CustomButton from "@/Component/CustomButton/CustomButton";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerifyEmail() {
  const router = useRouter();
  const Email = "ugoben@example.com";

  const [pin, setpin] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [loading, setLoading] = useState(false); // ActivityIndicator state

  const goBack = () => router.back();

  const verifyOtp = () => {
    if (pin.length !== 4) {
      alert("Please enter the 4-digit code");
      return;
    }

    setLoading(true); // show spinner on button press

    setTimeout(() => {
      setLoading(false); // hide spinner after delay
      alert("OTP Verified!");
      router.replace("/(auth)/verificationsuccessful");
    }, 2000); // simulate API delay
  };

  const resendOtp = () => {
    alert("OTP resent!");
    setTimer(60);
    setCanResend(false);
    setpin(""); // clear OTP input
  };

  // Countdown timer effect
  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <SafeAreaView style={styles.container}>
     
     <View>

      <TouchableOpacity onPress={goBack}>
        <MaterialIcons name="arrow-back-ios" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.Content}>
        <Image
          source={require("../../assets/images/small product logo.png")}
          style={styles.logo}
          />
        <Text style={styles.title}>Verify Your Email 
        Address</Text>
        <Text style={styles.subtitle}>
          Enter the 4-digit code sent to
          <Text style={styles.number}> {Email}</Text>
        </Text>

        {/* OTP Input - Rounded */}
        <OtpInput
          value={pin}
          onTextChange={setpin}
          numberOfDigits={4}
          placeholder="•"
          theme={{
            containerStyle: {
              marginTop: 20,
              marginBottom: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            },
            pinCodeContainerStyle: {
              width: 51,
              height: 51,
              borderRadius: 20,
              justifyContent: "center",
              alignItems: "center",
            },
            pinCodeTextStyle: {
              fontSize: 20,
              textAlign: "center",
            },
            focusStickStyle: {
              borderColor: "#FE8300",
            },
          }}
          />

        {/* Resend OTP section */}
        <View style={styles.resendContainer}>
          <Text style={styles.resendText}>Didn’t receive the code? </Text>
          <TouchableOpacity disabled={!canResend} onPress={resendOtp}>
            <Text
              style={[
                styles.resendButton,
                { color: canResend ? "#4CAF50" : "#FE8300" },
              ]}
              >
              {canResend ? "Resend Code" : `Resend Code in 00:${timer}`}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Confirm Button / Activity Indicator */}
        <View style={{ marginTop: 20 }}>
          {loading ? (
            <ActivityIndicator size="large" color="#FE8300" />
          ) : (
            <CustomButton title="Confirm Code" onPress={verifyOtp} />
          )}
        </View>
       </View>
      </View>

      <View>
        <Text style={styles.SecureLabel}>Secure encrypted verification process</Text>
       </View>
      


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent:'space-between',
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "MontserratSemiBold",
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
  },
  subtitle: {
    fontFamily: "MontserratMedium",
    fontSize: 15,
    color: "#8D8781",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    marginBottom: 15,
    alignSelf: "center",
    width: 88,
    height: 63,
  },
  Content: {
    marginTop: 50,
    alignSelf: "center",
    width: "100%",
    paddingHorizontal: 20,
  },
  number: {
    fontFamily: "MontserratSemiBold",
    fontSize: 15,
    color: "#000",
    fontWeight: "600",
  },
  resendContainer: {
    alignSelf: "center",
    gap: 5,
    justifyContent: "center",
    marginTop: 15,
  },
  resendText: {
    fontFamily:'MontserratMedium',
    fontSize: 14,
    color: "#8D8781",
    fontWeight:'500',
  },
  resendButton: {
    fontFamily:'MontserratSemiBold',
    textAlign:'center',
    fontSize: 14,
    fontWeight: "600",
    color:'#FE8300'
  },

  SecureLabel:{
    fontFamily:'MonserratMedium',
    textAlign:'center',
    fontSize:14,
    color: '#D3D3D3'
    

  },
});