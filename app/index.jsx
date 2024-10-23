
import {React, useContext} from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import { Link, Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';
import { UserContext } from './UserContext';

export default function App() {
    const user = useContext(UserContext);

  return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View className="w-full justify-center items-center min-h-[85vh] px-4" >
                    <Image 
                        source={images.logo} 
                        className="w-[130px] h-[84px]" 
                        resizeMode="contain"
                    />
                    <Image 
                        source={images.cards}
                        className="max-w-[380px] w-full h-[300px]"
                        resizeMode="contain"
                    />

                    <View className="relative mt-5 ">
                        <Text className="text-3xl text-black font-bold text-center ">
                            Medical Education on demand with <Text className="text-secondary-200">EduSwarm</Text>
                            <Text> {user?.email || ""} </Text>
                        </Text>
                        <Image 
                        source={images.path} 
                        className="w-[136px] h-[15px] absolute -bottom-2 -right-1" 
                        resizeMode="contain"/>
                    </View>

                    <Text 
                    className="text-sm font-pregular text-gray-100 mt-7 text-center">
                        Start your learning journey today
                    </Text>
                    <CustomButton 
                    title="Continue with Email" 
                    handlePress={() => { router.push('/sign-in') }} 
                    containerStyles="w-full mt-7"
                    />
                </View>
            </ScrollView>
            <StatusBar backgroundColor='#161622' style='light' />
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
