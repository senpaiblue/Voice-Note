import React from "react";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const _layout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="home"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
        name="create"
        options={{
          headerShown:false,
        }}/>
      </Stack>
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  );
};

export default _layout;
