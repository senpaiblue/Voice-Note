import {Image, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { icons } from '../constants';

const FormField = ({title,placeholder,InputStyle,handleChangeText,titleStyle,containerStyle,value}) => {
  const[showPassword,setPassword]=useState(false);
  return (
    <View className={`mb-4 ${containerStyle}`}>
      <Text className={titleStyle}>{title}</Text>
      <TextInput
      className={InputStyle}
      value={value}
      placeholder={placeholder}
      placeholderTextColor="#64748B"
      onChange={handleChangeText}
      secureTextEntry={title==="Password" && !showPassword}
      />
      {title === "Password" && ( 
        <TouchableOpacity onPress={()=>setPassword(!showPassword)}>
         <Image source={!showPassword ? icons.visible:icons.closed} 
         className="w-6 h-6"
         />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default FormField
