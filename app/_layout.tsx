import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

import CustomSplashScreen from "@/Component/CustomSplashScreen/CustomSplashScreen";
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import { useEffect, useState } from "react";
import { CartProvider } from "@/context/CartContext";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [splash, setSplash] = useState(true);

  const  [loaded, error] = useFonts({
    PoppinsRegular: Poppins_400Regular,
    PoppinsMedium: Poppins_500Medium,
    Poppins_700Bold: Poppins_700Bold,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsExtraBold: Poppins_800ExtraBold,

    MontserratRegular: Montserrat_400Regular,
    MontserratMedium: Montserrat_500Medium,
    MontserratBold: Montserrat_700Bold,
    MontserratSemiBold: Montserrat_600SemiBold,
    MontserratExtraBold: Montserrat_800ExtraBold
  })

  useEffect(() => {
    if(loaded || error ){
      SplashScreen.hideAsync()
    }
  }, [loaded, error]);

  useEffect(() => {
    if(loaded){
     setTimeout(()=> setSplash(false), 5000)
    }
  }, [loaded]);

  if(splash)
    return(
  <CustomSplashScreen/>
  )



  return (
    <CartProvider>

    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="welcomeSplashScreen" />
      
    </Stack>
    </CartProvider>
  );
}
