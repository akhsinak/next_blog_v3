// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-v2-b91ed.firebaseapp.com",
  projectId: "next-blog-v2-b91ed",
  storageBucket: "next-blog-v2-b91ed.appspot.com",
  messagingSenderId: "1086004619425",
  appId: "1:1086004619425:web:b4aad33868b977861468e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);