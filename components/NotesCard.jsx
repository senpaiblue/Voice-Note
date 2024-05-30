import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { icons, images } from "../constants";
import { deletePost } from "../lib/appwrite";
import { router } from "expo-router";

const NotesCard = ({ note: { id, title, note, date } }) => {
  const handleDelete = async () => {
    try {
      await deletePost(id);
      console.log("Post deleted successfully");
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };
  const truncatedTitle = truncateText(title, 8);
  const truncatedNote = truncateText(note, 32);
  return (
    <TouchableOpacity onPress={()=>router.push(`/noteInfo?id=${id}&title=${title}&note=${note}&date=${date}`)} className="w-[47%] px-[16px] rounded-lg mb-4 py-[12px] bg-secondary-100 border border-secondary-200">
      <View className="w-full flex flex-col gap-2">
        <View className=" w-full flex flex-row items-center justify-between">
          <Text className="text-lg font-rmedium text-black-100">
            {truncatedTitle}
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
          {truncatedNote}
        </Text>

        <Image source={images.default1} className="w-full h-8" />

        <Text className="text-sm font font-rmedium text-black-200">{date}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotesCard;
