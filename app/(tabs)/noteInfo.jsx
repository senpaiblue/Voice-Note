import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons, images } from "../../constants";
import { deletePost } from "../../lib/appwrite";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const noteInfo = () => {
  const { id, title, note, date } = useLocalSearchParams();
  const handleDelete = async () => {
    try {
      await deletePost(id);
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full pt-5 px-4">
          <View className="flex flex-row items-center justify-between ">
            <TouchableOpacity onPress={() => router.replace("/home")}>
              <View className="flex flex-row items-center justify-start">
                <Image
                  source={icons.left}
                  className="w-8 h-8 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-rmedium text-xl">Back</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View className="w-full px-[16px] mt-8 rounded-lg mb-4 py-[12px] bg-secondary-100 border border-secondary-200">
            <View className="w-full flex flex-col gap-2">
              <View className=" w-full flex flex-row items-center justify-between">
                <Text className="text-lg font-rmedium text-black-100">
                  {title}
                </Text>
                <TouchableOpacity onPress={handleDelete}>
                  <Image
                    source={icons.deleteNote}
                    className="w-5 h-6 "
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>

              <Text className="text-sm font-rregular text-secondary">
                {note}
              </Text>

              <Image source={images.default1} className="w-full h-8" />

              <Text className="text-sm font font-rmedium text-black-200">
                {date}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default noteInfo;
