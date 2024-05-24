import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
import { useFonts } from "expo-font";

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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown:false}}/>
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
