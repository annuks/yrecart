import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYcwR3fkx2gCLKuHd00URu6f68fuHxonY",
  authDomain: "carts-92f3c.firebaseapp.com",
  projectId: "carts-92f3c",
  storageBucket: "carts-92f3c.appspot.com",
  messagingSenderId: "1004002399540",
  appId: "1:1004002399540:web:81896ebb9554a129fac161"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export const firestore = firebase.firestore();
// export default firebase;  
export const appFirebase = initializeApp(firebaseConfig);