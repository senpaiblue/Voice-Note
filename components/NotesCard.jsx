import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "../constants";

const NotesCard = ({ title, desicription, date }) => {
  return (
    <View className="flex flex-row items-start justify-center">
      <View className="w-[47%] px-[16px] rounded-lg mb-4 py-[12px] bg-secondary-100 border border-secondary-200">
        <View className="flex flex-col gap-2">
          <Text className="text-lg font-rmedium text-black-100">{title}</Text>
          <Text className="text-sm font-rregular text-secondary">
            {desicription}
          </Text>
          <Image source={images.default1} className="w-full h-8" />
          <Text className="text-sm font font-rmedium text-black-200">
            {date}
          </Text>
        </View>
      </View>


      <View className="w-[47%] px-[16px] ml-4 rounded-lg mb-4 py-[12px] bg-secondary-100 border border-secondary-200">
        <View className="flex flex-col gap-2">
          <Text className="text-lg font-rmedium text-black-100">{title}</Text>
          <Text className="text-sm font-rregular text-secondary">
            {desicription}
          </Text>
          <Text className="text-sm font font-rmedium text-black-200">
            {date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotesCard;
