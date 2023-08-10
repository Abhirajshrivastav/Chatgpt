import { View, Text, Image, Alert , TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, FontAwesome, Ionicons } from '@expo/vector-icons'
import { Bubble, GiftedChat } from 'react-native-gifted-chat'

const Chat = ({navigation}) => {
  const [inputMessage, setInputMessage] = useState("")
  const [outputMessage,setOutputMessage] = useState("Result should be shown here")
  const [isTyping, setIsTyping] = useState(false)

  const [messages,setMessages] = useState([])

  const generateText = () => {

  }

  const renderMessage = (props) => {
    const {currentMessage} = props

    if (currentMessage.user._id === 1) {
      return (
        <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-end'
        }}
        >
          <Bubble 
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: COLORS.primary,
              marginRight: 12,
              marginVertical: 12,
            }
          }}

          textStyle={{
            right: {
              color: COLORS.white
            }
          }}
          />
        </View>
      )
    } else {
      return(
        <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start'
        }}
        >
          <Image 
          source={images.favicon}
          style={{
            height: 40,
            width: 40,
            borderRadius: 20,
            marginLeft: 8
          }}
          />
          <Bubble 
          {...props}
          wrapperStyle={{
            left: {
              backgroundColor: COLORS.secondaryWhite,
              marginLeft: 12,
            }
          }}

          textStyle={{
            left: {
              color: COLORS.white
            }
          }}
          />
        </View>
      )
    }

    return <Bubble {...props}/>
  }

  const handleInputText = (text) => {
    setInputMessage(text)
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: COLORS.white
    }}>
      <StatusBar style="auto" />
      <View style={{
        height: 60,
        backgroundColor: COLORS.secondaryWhite,
        position: "absolute",
        top: 4,
        right: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 22,
        width: SIZES.width,
        zIndex: 9999
        }}>
          <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            height: 40,
            width: 40 ,
            alignItems: 'center',
            justifyContent: 'center'
          }}
          >
            <MaterialIcons 
            name="keyboard-arrow-left"
            size={24}
            color={COLORS.black}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> console.log("Save Chat")}
          >
            <Ionicons
                        name="bookmark-outline"
                        size={24}
                        color={COLORS.text}
                    />
          </TouchableOpacity>
      </View>

      <View style={{
        flex: 1,
        justifyContent: "center"
      }}>
        <GiftedChat 
        message={messages}
        renderInputToolbar={() => {}}
        user={{_id: 1}}
        minInputToolbarHeight={0}
        renderMessage={renderMessage}
        isTyping={isTyping}
        />
      </View>

      <View style={{
        flexDirection: "row",
        backgroundColor: COLORS.white,
        paddingVertical: 8
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          marginLeft: 10,
          backgroundColor: "#F2F2F2",
          paddingVertical: 8,
          marginHorizontal: 12,
          borderRadius: 12
        }}>
          <TextInput
          value={inputMessage}
          onChangeText={handleInputText}
          placeholder="Enter a prompt"
          placeholderTextColor={COLORS.black}
          style={{
            color: COLORS.black,
            flex: 1,
            paddingHorizontal: 10
          }}
          />

          <TouchableOpacity 
          onPress={generateText}
          style={{
            padding: 6,
            borderRadius: 8,
            marginHorizontal: 12
          }}>
               <FontAwesome
                name="send-o"
                color={COLORS.primary}
                size={24}
              />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Chat