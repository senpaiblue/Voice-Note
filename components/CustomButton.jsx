import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({handleClick,title,containerStyle,titleStyle}) => {
  return (
    <TouchableOpacity className={containerStyle} onPress={handleClick}>
      <Text className={titleStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CustomButton
