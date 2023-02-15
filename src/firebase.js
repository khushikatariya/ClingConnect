// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBlHF500skkDBJqHKmTLEX9bizJtOVcRrg",
    authDomain: "clingconnect-a48f1.firebaseapp.com",
    projectId: "clingconnect-a48f1",
    storageBucket: "clingconnect-a48f1.appspot.com",
    messagingSenderId: "737876987461",
    appId: "1:737876987461:web:cb9fc322c3e32e412d9d2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);