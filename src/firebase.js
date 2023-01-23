import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC89QD91FcDgeQyes-FgPkj52FgiMIjkAo",
    authDomain: "catalog-6cd5b.firebaseapp.com",
    projectId: "catalog-6cd5b",
    storageBucket: "catalog-6cd5b.appspot.com",
    messagingSenderId: "957595837161",
    appId: "1:957595837161:web:834f522b2ab512e8b54678",
    measurementId: "G-GMPBTPHY54"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();