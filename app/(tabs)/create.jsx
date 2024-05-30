import {
  Image,
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { createNote } from "../../lib/appwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import Voice from "@react-native-voice/voice";

const create = () => {
  const { user } = useGlobalContext();
  const [uploading, setuploading] = useState(false);
  const [notes, setnotes] = useState({
    title: "",
    description: "",
    thumbnail: null,
  });

  const [started, setstarted] = useState(false);
  const [ended, setended] = useState(false);
  const [recognizing, setrecognizing] = useState(false);
  const [result, setresult] = useState([]);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    console.log(e);
    setstarted(true);
  };

  const onSpeechEnd = (e) => {
    console.log(e);
    setended(true);
  };

  const onSpeechResults = (e) => {
    console.log(e);
    setresult(e.value);
  };

  const startRecognizing = async () => {
    try {
      await Voice.start("en-US");
      setstarted(false);
      setended(false);
      setrecognizing(true);
      setresult([]);
    } catch (error) {
      console.log("error is from start",error);
    }
  }

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      await Voice.destroy();
      setstarted(false);
      setended(false);
      setrecognizing(false);
      setresult([]);
    } catch (error) {
      console.log("error is from stop",error);
    }
  };

  const submit = async () => {
    if (!notes.title || !notes.description) {
      return Alert.alert("Please fill all the fields");
    }
    setuploading(false);
    try {
      await createNote({
        ...notes,
        userId: user.$id,
      });
      Alert.alert("Successfull, Post uploaded successfully");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setnotes({
        title: "",
        description: "",
        thumbnail: null,
      });
    }
  };

  const openPicker = async (selectType) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        selectType == "image"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      if (selectType === "Image") {
        setnotes({ ...notes, thumbnail: result.assets[0] });
      }
      if (selectType === "video") {
        Alert.alert("Only Images!", "Videos are not allowed");
      }
    }
  };

   const voiceItems = result.map((item) => ({
     key: item,
     content: item,
   }));

   const combinedText =
     voiceItems.length > 0
       ? voiceItems.map((item) => item.content).join("\n") + "\n"
     : "";

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
            <TouchableOpacity
              className=" items-center justify-center w-12 h-12 rounded-full border border-primary-200 bg-primary-100 shadow-md"
              onPress={recognizing ? stopRecognizing : startRecognizing}
            >
              <Image
                source={icons.microPhone}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View className="w-full px-5 mt-8 ">
            <TextInput
              className="w-full h-24 font-rbold text-4xl mb-4"
              value={notes.title}
              placeholder="Enter title of note ..."
              placeholderTextColor={"#E4E7EC"}
              multiline
              onChangeText={(e) => setnotes({ ...notes, title: e })}
            />
            <TextInput
              className="w-full text-xl font-rmedium"
              value={voiceItems.length > 0 ? combinedText : notes.description}
              placeholder="This is where your note will be. It’ll be housed here. You’ll save your note here. Type your memories here. Write down your thoughts."
              placeholderTextColor={"#E4E7EC"}
              multiline
              onChangeText={(e) => setnotes({ ...notes, description: e })}
            />
          </View>
          <TouchableOpacity onPress={() => openPicker("Image")}>
            {notes.thumbnail ? (
              <Image
                source={{ uri: notes.thumbnail.uri }}
                className="w-full h-64 rounde-xl"
              />
            ) : (
              <View className="flex flex-row items-center justify-start mt-20">
                <Image
                  source={icons.addImage}
                  className="w-10 h-10 mr-4"
                  resizeMode="contain"
                />
                <Text className="font-rmedium text-xl text-[#98A2B3]">
                  Add Image
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => submit()}
          className="absolute bottom-6 right-6"
        >
          <View className="w-16 h-16 items-center justify-center bg-black-200 rounded-full relative">
            <Image
              source={icons.save}
              className="w-8 h-8 absolute inset-0 m-auto "
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default create;
