import * as React from 'react';
import { View, Button, Text, ScrollView, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { router } from 'expo-router';

export default function App() {
  const speak = () => {
    const thingToSay = '1';
    Speech.speak(thingToSay);
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{height:"100%"}}>
        <View className="flex-1 items-center justify-center">
          <View className="flex w-full p-8 flex-col items-center justify-center">
            <Text className="text-4xl font-rbold text-primary">
            Voice Notes
            </Text>
            <Text className="text-lg font-regular text-secondary-300">
            Make notes in a much easier way .
            </Text>
            <Image source={images.notes}
            className="w-48 h-48"
            resizeMode='contain'
            />
            <CustomButton containerStyle="w-full h-14 mt-4 items-center justify-center bg-primary-100 border border-primary-200 rounded-xl" title="Get Started" titleStyle="font-bold text-lg text-primary" handleClick={()=>router.push("/sign-up")}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


