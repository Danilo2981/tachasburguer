// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATJW4yu3WtMfJkGcM5cl1KrVNa_qDS5OM",
  authDomain: "tachas-burguer.firebaseapp.com",
  projectId: "tachas-burguer",
  storageBucket: "tachas-burguer.appspot.com",
  messagingSenderId: "908828389149",
  appId: "1:908828389149:web:0093bc5b15264ec9e9bbf4"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db }