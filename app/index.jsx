import * as React from 'react';
import { View, Button, Text, ScrollView, Image } from 'react-native';
import * as Speech from 'expo-speech';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { Redirect, router } from 'expo-router';
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  
  const { loading, isLogged } = useGlobalContext();
  if (!loading && isLogged) return <Redirect href="/home" />;
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
            <CustomButton containerStyle="w-full h-14 mt-4 items-center justify-center bg-primary border border-primary-200 rounded-xl" title="Get Started" titleStyle="font-bold text-lg text-white" handleClick={()=>router.push("/sign-in")}/>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


