import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDzpK8sCJwSb2QJPtYjmLwiPz1f2P5hn9I",
  authDomain: "bilal-2416d.firebaseapp.com",
  projectId: "bilal-2416d",
  storageBucket: "bilal-2416d.appspot.com",
  messagingSenderId: "740130869838",
  appId: "1:740130869838:web:5bf1204071c6925a46691f",
  measurementId: "G-B64R1ES9NJ"};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };
