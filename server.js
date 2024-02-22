// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLeW7gmw6VZLpBO444eTHN6SNBkvYX3_8",
  authDomain: "thabiso-matsaba--1708435506926.firebaseapp.com",
  projectId: "thabiso-matsaba--1708435506926",
  storageBucket: "thabiso-matsaba--1708435506926.appspot.com",
  messagingSenderId: "88831671622",
  appId: "1:88831671622:web:62821d41984e7efcd4f947",
  measurementId: "G-J743WWGDXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);