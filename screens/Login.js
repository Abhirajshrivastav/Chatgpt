import { View, Text } from 'react-native'
import React, { useCallback, useReducer } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import PageContainer from '../components/PageContainer'
import { Image } from 'react-native'
import Input from '../components/Input';
import Button from '../components/Button';
import { reducer } from "../utils/reducers/formReducer";
import { validateInput } from '../utils/actions/formActions'

const initialState = {
  inputValus: {
    email: "",
    password: ""
  },
  inputValidities:{
    email: false,
    password: false,
  },
  formIsValid: false,
}

const Login = () => {

  const[formState, dispatchFormState] = useReducer(reducer, initialState);

  const inputChangeHandler = useCallback((inputId,inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult: result, inputValue})
  }, [dispatchFormState])

  return (
   <SafeAreaView 
   style={{flex: 1, backgroundColor: COLORS.white}}
   >
<PageContainer>
  <View style={{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 22
  }}>
    <Image 
        source={images.logo}
        style={{
          height: 120,
          width: 120,
          marginBottom: 22
        }}
        />
        <Text style={{...FONTS.h4,
        color: COLORS.black,
        marginVertical: 8
        }}>
          Login to your account
        </Text>
         <Input 
          inInputChanged={inputChangeHandler}
          errorText={formState.inputValidities['email']}
      id="email"
      placeholder="Enter your email"
      placeholderTextColor={COLORS.text}
        />
        <Input 
        inInputChanged={inputChangeHandler}
        errorText={formState.inputValidities['password']}
       id="password"
       placeholder="Enter your password"
       placeholderTextColor={COLORS.text}
        />
         <Button
            title="Login"
            filled
             style={{
                width: SIZES.width - 44,
                marginBottom: SIZES.padding,
                 marginVertical: 8,
             }}
                    />  
  </View>
</PageContainer>
   </SafeAreaView>
  )
}

export default Login;