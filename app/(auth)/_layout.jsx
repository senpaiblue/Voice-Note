import { Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="sign-in"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="sign-up"
        options={{
          headerShown:false,
        }}/>
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default _layout;
