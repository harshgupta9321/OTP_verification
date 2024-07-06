// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMQn2-eECHGE_DIGUUOGZkHPRZkHz8y08",
  authDomain: "otp-project-bcef9.firebaseapp.com",
  projectId: "otp-project-bcef9",
  storageBucket: "otp-project-bcef9.appspot.com",
  messagingSenderId: "648714752959",
  appId: "1:648714752959:web:abacccfe3d1527b0cb870a",
  measurementId: "G-FZPPEGGHVH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)