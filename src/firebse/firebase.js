// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTQsKoV-hWMETTbAa_MEZLHXN-zSQ3zWE",
  authDomain: "nanny-a18ca.firebaseapp.com",
  projectId: "nanny-a18ca",
  storageBucket: "nanny-a18ca.appspot.com",
  messagingSenderId: "826111812261",
  appId: "1:826111812261:web:95bcb588050fb00c83e34c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

