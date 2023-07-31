import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES , images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import PageContainer from '../components/PageContainer'

const Welcome = () => {
  return (
   <SafeAreaView style={{flex: 1 , backgroundColor: COLORS.white}}>
    <StatusBar style='light'/>
    <PageContainer>
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <Image 
        source={images.logo}
        style={{
          height: 120,
          width: 120,
          marginBottom: 22
        }}
        />
        <Text style={{
          ...FONTS.h4,
          color: COLORS.black,
          margin
        }}>
          Welcome to Chatgpt
        </Text>
      </View>
    </PageContainer>
   </SafeAreaView>
  )
}

export default Welcome;