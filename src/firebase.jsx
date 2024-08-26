// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ6DTsXE7IVuEkWEsrughc9xp7FvyWHKU",
  authDomain: "authentication-929ec.firebaseapp.com",
  projectId: "authentication-929ec",
  storageBucket: "authentication-929ec.appspot.com",
  messagingSenderId: "1010160854951",
  appId: "1:1010160854951:web:fcfdc45222767088cd3882",
  measurementId: "G-ZD3DTLEL25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}

export const analytics = getAnalytics(app);