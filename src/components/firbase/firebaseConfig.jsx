// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk5TXsD4IYMrPkBCMRMbznSlYJj2xj6hY",
  authDomain: "ayzus-53ae2.firebaseapp.com",
  projectId: "ayzus-53ae2",
  storageBucket: "ayzus-53ae2.firebasestorage.app",
  messagingSenderId: "349691121934",
  appId: "1:349691121934:web:2b977ecb738571179a475f",
  measurementId: "G-WFJDG2FPJ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);