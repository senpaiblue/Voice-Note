import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({handleClick,title,containerStyle,titleStyle,isLoading}) => {
  return (
    <TouchableOpacity className={`${containerStyle} ${isLoading ? "opacity-50":""}`} onPress={handleClick}>
      <Text className={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
