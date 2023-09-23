// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgEI5WeSQgONabtn9bbTc-VOPdFzlKOWE",
  authDomain: "miecommerce-b.firebaseapp.com",
  projectId: "miecommerce-b",
  storageBucket: "miecommerce-b.appspot.com",
  messagingSenderId: "87787261557",
  appId: "1:87787261557:web:c2d7b85cdbe92dbda2f23c"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)