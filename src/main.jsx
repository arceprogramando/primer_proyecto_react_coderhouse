import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0gAoo_bCXzFpPt6ac927tWpSyMLeeI-k",
  authDomain: "arce-eccomerce.firebaseapp.com",
  projectId: "arce-eccomerce",
  storageBucket: "arce-eccomerce.appspot.com",
  messagingSenderId: "590483058508",
  appId: "1:590483058508:web:25ea94ea53acc92671a9e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
