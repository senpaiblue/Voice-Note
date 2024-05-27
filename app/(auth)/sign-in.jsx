import { Alert, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import { Link } from 'expo-router'
import { icons } from '../../constants'
import CustomButton from '../../components/CustomButton'
import { signIn } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const signin = () => {
  const { setUser, setIsLogged } = useGlobalContext();

  const [isSubmit, setSubSubmit] = useState(false);
  const [form, setform] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all the fields");
    }
    setSubSubmit(true);
    try {
      await signIn(form.email, form.password);
      const result = await getCurrentUser();
      setUser(result);
      setIsLogged(true);

      Alert.alert("Sucess", "User signed in");
      router.replace("/home");
    } catch (error) {
      Alert.alert("error.message");
    } finally {
      setSubSubmit(false);
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
    <ScrollView contentContainerStyle={{ height: "100%" }}>
      <Image
        source={icons.left}
        className="w-6 h-6 absolute mt-6 mx-4"
        resizeMode="contain"
      />
      <Text className="text-xl text-center mt-6 font-rbold text-black-200">
        Sign In
      </Text>
      <View className="flex flex-col px-4 pt-8">
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setform({ ...form, email: e })}
          textStyle="text-sm text-rregular"
          placeholder="Enter your name"
          Input="text-base font-rbold flex-1"
          containerStyle="bg-white focus:bg-secondary-100 px-4 py-2 rounded-xl focus:border-secondary border-2 border-secondary-200 w-full flex flex-col"
        />
        <FormField
          title="Passwword"
          value={form.password}
          handleChangeText={(e) => setform({ ...form, password: e })}
          textStyle="text-sm text-rregular"
          placeholder="Enter your name"
          Input="text-base font-rbold flex-1"
          containerStyle="bg-white focus:bg-secondary-100 px-4 py-2 rounded-xl focus:border-secondary border-2 border-secondary-200 w-full flex flex-col"
        />
        <CustomButton
          containerStyle="w-full h-14 mt-4 items-center justify-center bg-primary-100 border border-primary-200 rounded-xl"
          title="Sign Up"
          titleStyle="font-bold text-lg text-primary"
          handleClick={submit}
          isLoading={isSubmit}
        />
        <View className="flex flex-row justify-center items-center pt-5">
          <Text className="font-rmedium text-sm text-secondary-300">Don't have an account?</Text>
          <Link href="/sign-up" className="text-lg font-rbold text-primary"> Sign Up</Link>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  )
}

export default signin
