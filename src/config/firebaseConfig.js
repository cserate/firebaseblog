// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

//import for firestore
import {getFirestore} from 'firebase/firestore'

//import for authentication
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjknSgL_osOKk3hAfF-vZakgu_N0eK2YY",
  authDomain: "fir-blog-737bb.firebaseapp.com",
  projectId: "fir-blog-737bb",
  storageBucket: "fir-blog-737bb.appspot.com",
  messagingSenderId: "481790780307",
  appId: "1:481790780307:web:a3d517c9365af9ec913e66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//set up database "hook" and export it
export const db = getFirestore(app)

//activate authentication
export const auth = getAuth(app)