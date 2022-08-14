import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_MW_cHTJYjNhwJSSUqLCAxdYLkxBmIE4",
  authDomain: "cart-6969a.firebaseapp.com",
  projectId: "cart-6969a",
  storageBucket: "cart-6969a.appspot.com",
  messagingSenderId: "300369230640",
  appId: "1:300369230640:web:c613ec0e3d87eac6d566f5"
};
const app = initializeApp(firebaseConfig);

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
