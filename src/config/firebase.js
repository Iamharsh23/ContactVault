// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ1La6L5upMo94GZYMPQaaGXxS9mOOKVQ",
  authDomain: "vite-contact-40c6a.firebaseapp.com",
  projectId: "vite-contact-40c6a",
  storageBucket: "vite-contact-40c6a.appspot.com",
  messagingSenderId: "801166924421",
  appId: "1:801166924421:web:f57714375b26489b05e7ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);