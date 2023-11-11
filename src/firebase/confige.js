// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "books-a96dc.firebaseapp.com",
    databaseURL: "https://books-a96dc-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "books-a96dc",
    storageBucket: "books-a96dc.appspot.com",
    messagingSenderId: "603072508530",
    appId: process.env.API_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

