import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeiU6AU5-85vzaHEkSurHGLNcyl12SoAo",
  authDomain: "e-commerce-5716f.firebaseapp.com",
  projectId: "e-commerce-5716f",
  storageBucket: "e-commerce-5716f.appspot.com",
  messagingSenderId: "955631992042",
  appId: "1:955631992042:web:6e63dc287d6615c290ab93",
  measurementId: "G-2FJS48428D",
};

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();

export default app;
