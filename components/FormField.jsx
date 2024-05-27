import { Image, Text, TextInput, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  placeholder,
  InputStyle,
  handleChangeText,
  titleStyle,
  containerStyle,
  value,...props
}) => {
  const [showPassword, setPassword] = useState(false);
  return (
    <View className={`mb-4 ${containerStyle}`}>
      <Text className={titleStyle}>{title}</Text>
      <View className="flex flex-row justify-between">
        <TextInput
          className={InputStyle}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#64748B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.visible : icons.closed}
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
