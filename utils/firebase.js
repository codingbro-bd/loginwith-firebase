import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBobybA_NKrRNqzyoIj2olWXofk1jjtQzs",
  authDomain: "fir-login-fa39b.firebaseapp.com",
  projectId: "fir-login-fa39b",
  storageBucket: "fir-login-fa39b.appspot.com",
  messagingSenderId: "498701180858",
  appId: "1:498701180858:web:dbc89c04861dbacd290783",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
