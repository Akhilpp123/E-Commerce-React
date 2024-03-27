//firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB_vGF8_HCKtWxe9dIGHMtvd8kbaCqfp4k",
    authDomain: "e-learning-93e12.firebaseapp.com",
    projectId: "e-learning-93e12",
    storageBucket: "e-learning-93e12.appspot.com",
    messagingSenderId: "907406566798",
    appId: "1:907406566798:web:1bdd6c27466decd0dcb0df"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
