// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4yD_0jiEKi75UdUOW2_aWDG2_R2f-zyg",
  authDomain: "simple-projects-97f7a.firebaseapp.com",
  projectId: "simple-projects-97f7a",
  storageBucket: "simple-projects-97f7a.firebasestorage.app",
  messagingSenderId: "846631669745",
  appId: "1:846631669745:web:1257317cb3158f94813e50"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);