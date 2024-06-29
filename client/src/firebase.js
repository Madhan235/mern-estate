// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-3a016.firebaseapp.com",
  projectId: "mern-estate-3a016",
  storageBucket: "mern-estate-3a016.appspot.com",
  messagingSenderId: "598820253206",
  appId: "1:598820253206:web:5d01c8bfcd27a13681cf37"
};  

// Initialize Firebase
export const app = initializeApp(firebaseConfig);