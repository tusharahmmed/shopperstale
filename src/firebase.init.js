// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQdNEgJ44zaCBD2OMXiqu4nCARHf7fYMA",
  authDomain: "shoppers-tale.firebaseapp.com",
  projectId: "shoppers-tale",
  storageBucket: "shoppers-tale.appspot.com",
  messagingSenderId: "431230494638",
  appId: "1:431230494638:web:a66609126f98be9e3f0a3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;