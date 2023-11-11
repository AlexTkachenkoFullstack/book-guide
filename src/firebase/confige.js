// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIqDGOJm1yZ3R5a2lTGyxH37krVB3lxg4",
    authDomain: "books-a96dc.firebaseapp.com",
    databaseURL: "https://books-a96dc-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "books-a96dc",
    storageBucket: "books-a96dc.appspot.com",
    messagingSenderId: "603072508530",
    appId: "1:603072508530:web:74c296160f190475ed08eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

