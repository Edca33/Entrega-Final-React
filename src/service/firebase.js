// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUWZFAeQWurio96k74J5l8qsUrgh_n-2k",
  authDomain: "finally-44bdb.firebaseapp.com",
  projectId: "finally-44bdb",
  storageBucket: "finally-44bdb.appspot.com",
  messagingSenderId: "658286996325",
  appId: "1:658286996325:web:9d667b9bc2865a527b8f8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)