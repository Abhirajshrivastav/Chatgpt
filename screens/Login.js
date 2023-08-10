import { View, Text } from 'react-native'
import React, { useCallback, useEffect, useReducer, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import PageContainer from '../components/PageContainer'
import { Image } from 'react-native'
import Input from '../components/Input';
import Button from '../components/Button';
import { reducer } from "../utils/reducers/formReducer";
import { validateInput } from '../utils/actions/formActions'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirebaseApp } from '../utils/firebaseHelper'


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

const Login = ({ navigation })  => {

  const[formState, dispatchFormState] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const inputChangeHandler = useCallback((inputId,inputValue) => {
    const result = validateInput(inputId, inputValue);
    dispatchFormState({inputId, validationResult: result, inputValue})
  }, [dispatchFormState])

  const loginHandler = async () => {
    const app = getFirebaseApp()
    const auth = getAuth(app)
    setIsLoading(true)

    try{
      const result = await signInWithEmailAndPassword(
        auth,
        formState.inputValues.email,
        formState.inputValues.password
      );
      if (result){
        setIsLoading(false)
        navigation.navigate('Home')
      }
    }catch(error){
      const errorCode = error.code;
      let message = "Something went wrong"

      if (
        errorCode === 'auth/wrong-password' ||
        errorCode === 'auth/user-not-found'
    ) {
        message = 'Wrong email or password'
    }

    setError(message)
    setIsLoading(false)
    }
  }

  // handle errors 
    useEffect(() => {
      if (error) {
          Alert.alert('An error occurred', error)
      }
  }, [error])

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
          onInputChanged={inputChangeHandler}
          errorText={formState.inputValidities['email']}
      id="email"
      placeholder="Enter your email"
      placeholderTextColor={COLORS.text}
        />
        <Input 
        onInputChanged={inputChangeHandler}
        errorText={formState.inputValidities['password']}
       id="password"
       placeholder="Enter your password"
       placeholderTextColor={COLORS.text}
        />
         <Button
            title="Login"
            filled
            isLoading={isLoading}
            onPress={loginHandler}
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