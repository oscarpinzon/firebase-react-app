// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: "todo-app-8ca3a.firebaseapp.com",
  projectId: "todo-app-8ca3a",
  storageBucket: "todo-app-8ca3a.appspot.com",
  messagingSenderId: "821733301818",
  appId: "1:821733301818:web:b362a1eefd052aeb7b5f03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);