// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYOEfLfDgNV_2Tx2Gx_66YBPMIhqqyVdo",
  authDomain: "react-project1-codex.firebaseapp.com",
  projectId: "react-project1-codex",
  storageBucket: "react-project1-codex.firebasestorage.app",
  messagingSenderId: "839465263576",
  appId: "1:839465263576:web:a69246031e7750a5de92ad",
  measurementId: "G-S36SBW3F6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;