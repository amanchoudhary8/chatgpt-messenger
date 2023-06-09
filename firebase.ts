import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAPFpszEGISWMZ8QAQRwAKQhlnapl3Hv4",
    authDomain: "chatgpt-messenger-1.firebaseapp.com",
    projectId: "chatgpt-messenger-1",
    storageBucket: "chatgpt-messenger-1.appspot.com",
    messagingSenderId: "746445153322",
    appId: "1:746445153322:web:4c16595fbefb6e9ff98f53"
  };
  
  // Initialize Firebase
  const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db}