// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_-iot3ylzsxYAWMMbuAFMYoXmVV_pGwU",
    authDomain: "utsho-photo-studio.firebaseapp.com",
    projectId: "utsho-photo-studio",
    storageBucket: "utsho-photo-studio.appspot.com",
    messagingSenderId: "619039307373",
    appId: "1:619039307373:web:e554db2200731413803164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;