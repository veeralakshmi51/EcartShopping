// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxB4vyYBBkJqoFUGutAYBtnxiOX5MZoUE",
  authDomain: "ecartshopping-900f1.firebaseapp.com",
  projectId: "ecartshopping-900f1",
  storageBucket: "ecartshopping-900f1.firebasestorage.app",
  messagingSenderId: "399601679914",
  appId: "1:399601679914:web:3832d74017eac4f3ebcd53",
  measurementId: "G-V1CD87Y6QP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);