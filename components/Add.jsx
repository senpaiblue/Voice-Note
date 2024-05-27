import { Image, Text, View } from "react-native";
import React from "react";
import { icons } from "../constants";

const Add = () => {
  return (
      <View className="w-full h-48 relative border border-primary-200 bg-primary-100 rounded-xl p-16 flex items-center justify-center">
        <View className="flex flex-col absolute justify-center items-center">
          <Image
            source={icons.add}
            className="w-12 h-12"
            resizeMode="contain"
          />
          <Text className="text-primary font-rmedium text-lg">New note</Text>
        </View>
      </View>
  );
};

export default Add;
