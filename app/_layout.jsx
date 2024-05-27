import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";
import GlobalProvider from "../context/GlobalProvider";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "Ranade-Bold": require("../assets/font/Ranade-Bold.ttf"),
    "Ranade-Light": require("../assets/font/Ranade-Light.ttf"),
    "Ranade-Medium": require("../assets/font/Ranade-Medium.ttf"),
    "Ranade-Regular": require("../assets/font/Ranade-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <GlobalProvider>
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown:false}}/>
      <Stack.Screen name="(tabs)" options={{ headerShown:false}}/>
    </Stack>
    </GlobalProvider>
  );
};

export default _layout;

const styles = StyleSheet.create({});
