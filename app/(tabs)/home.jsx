import {
  FlatList,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Add from "../../components/Add";
import { router } from "expo-router";
import NotesCard from "../../components/NotesCard";
import useAppWrite from "../../lib/useAppWrite";
import { getAllPosts } from "../../lib/appwrite";

const home = () => {
  const { data: posts, refetch } = useAppWrite(getAllPosts);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    //re call videos -> if any new videos appeard
    await refetch();
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="w-full px-4 pt-5">
        <View className="w-full">
          <Text className="font-rbold text-2xl text-black">Voice Notes</Text>
          <Text className-="font-rregular text-lg text-gray-100">
            Faster Note Making
          </Text>
        </View>
        <View className="w-full flex flex-col">
          <View className=" py-4 justify-center items-center">
            <FlatList
              data={posts}
              keyExtractor={(item) => item.$id}
              renderItem={({ item }) => (
                <NotesCard
                note={item}
                />
              )}
              ListHeaderComponent={() => (
                <TouchableOpacity
                  className="w-full pb-8"
                  onPress={() => router.replace("/create")}
                >
                  <Add />
                </TouchableOpacity>
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default home;
