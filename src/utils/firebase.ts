// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIXgQVJn8aj9mSjHlFpm2Iu3MfWmVm-Uw",
  authDomain: "netflixgpt-32a9e.firebaseapp.com",
  projectId: "netflixgpt-32a9e",
  storageBucket: "netflixgpt-32a9e.firebasestorage.app",
  messagingSenderId: "1081394547071",
  appId: "1:1081394547071:web:0c20af8a0d30e172f1f24a",
  measurementId: "G-2VS18JKHDB"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();