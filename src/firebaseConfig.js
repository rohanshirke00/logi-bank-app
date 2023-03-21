// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAlLwhn-QbzPGL35jrk4bMk3npA9KBQemQ",
  authDomain: "my-project-db-24cbf.firebaseapp.com",
  projectId: "my-project-db-24cbf",
  storageBucket: "my-project-db-24cbf.appspot.com",
  messagingSenderId: "600041543304",
  appId: "1:600041543304:web:d194cc1538afdd3510313d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);