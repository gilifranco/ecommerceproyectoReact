// Import the functions you need from the SDKs you need
//import "dotenv/config"
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "ecommercerproyecto.firebaseapp.com",
  projectId: "ecommercerproyecto",
  storageBucket: "ecommercerproyecto.appspot.com",
  messagingSenderId: "995779866425",
  appId: "1:995779866425:web:e60910ccffc5283004c2e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)