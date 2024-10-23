import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import {React, useState} from 'react'
import { icons } from '../constants';

const FormField = ({
    title, 
    value, 
    placeHolder,
    otherStyles,
    handleChangeText
}) => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 border-gray-200 w-full h-16 px-4 bg-white-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput 
        value={value} 
        className="flex-1 text-black font-psemibold text-base"
        placeHolder={placeHolder}
        placeHolderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword} />

        {title === 'Password' && 
        (<TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain"/>
        </TouchableOpacity>)
        }
      </View>
    </View>
  )
}

export default FormField