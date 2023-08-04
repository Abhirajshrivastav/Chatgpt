// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyBIWeX6oC7WZsgzrCqYMxkJUeiNvLUcJL8",
        authDomain: "chatgpt-reactjs-native.firebaseapp.com",
        projectId: "chatgpt-reactjs-native",
        storageBucket: "chatgpt-reactjs-native.appspot.com",
        messagingSenderId: "914275074287",
        appId: "1:914275074287:web:c67ccd06ff8e3f88bedb1a"
      };
      
      // Initialize Firebase
      return initializeApp(firebaseConfig);
}


// Your web app's Firebase configuration