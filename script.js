// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXYiuEEW4ugaAQmFAFtJsGzDHIbCo6cs0",
  authDomain: "anisglobalsystem.firebaseapp.com",
  projectId: "anisglobalsystem",
  storageBucket: "anisglobalsystem.firebasestorage.app",
  messagingSenderId: "610504571659",
  appId: "1:610504571659:web:f08ae477c617f18be0800e",
  measurementId: "G-TXTH94JCM5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
