// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLtbB32rW1PyYUXCkrniWsY13N-WVYesw",
  authDomain: "expense-tracker-reactjs-401e5.firebaseapp.com",
  projectId: "expense-tracker-reactjs-401e5",
  storageBucket: "expense-tracker-reactjs-401e5.appspot.com",
  messagingSenderId: "754808652407",
  appId: "1:754808652407:web:0ba1e2ffb3b86f67c13c72",
  measurementId: "G-9MVJRQX4DK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const analytics = getAnalytics(app);

//firebase login
//firebase init
// firebase deploy
