// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxM66exa0GnYCtZpihiwXj2oPdEBOouzk",
  authDomain: "frello-d9c18.firebaseapp.com",
  projectId: "frello-d9c18",
  storageBucket: "frello-d9c18.firebasestorage.app",
  messagingSenderId: "191755230299",
  appId: "1:191755230299:web:cb102639b79285b467337e",
  measurementId: "G-1N6BBB7JMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth()
const analytics = getAnalytics(app);
export const db=getFirestore(app)
export default {app,analytics}