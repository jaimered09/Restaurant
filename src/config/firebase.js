// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import "firebase/compat/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASPcTgzTJcDZlN-vFFtYwDSx6OFjrvAuw",
  authDomain: "pollos-hnos.firebaseapp.com",
  projectId: "pollos-hnos",
  storageBucket: "pollos-hnos.appspot.com",
  messagingSenderId: "149754741774",
  appId: "1:149754741774:web:18f0d895fcc436c66ce85f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore()