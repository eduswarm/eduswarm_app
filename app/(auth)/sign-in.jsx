import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import {React, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        value: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {

    }

    console.log(form)

  return (
    <SafeAreaView
    className="bg-white h-full">
      <ScrollView >
        <View className="w-full justify-center h-full px-4 my-6">
            <Image 
            source={images.logo} 
            resizeMode="contain" 
            className="w-[115px] h-[35px]"
            />
            
            <Text className="text-2xl text-black text-semi-bold mt-10 font-psemibold">Log in to EduSwarm</Text>

            <FormField
                title="Email"
                value={form.email}
                otherStyles="mt-7"
                keyboardType="email-address"
                handleChangeText={(e) => {
                    setForm({
                        ...form,
                        email: e.value
                    })
                }}
            />

            <FormField
                title="Password"
                value={form.password}
                otherStyles="mt-7"
                handleChangeText={(e) => {
                    setForm({
                        ...form,
                        password: e.value
                    })
                }}
            />

            <CustomButton
            title="Sign In"
            containerStyles={'mt-4'}
            handlePress={submit}
            isLoading={isSubmitting} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})