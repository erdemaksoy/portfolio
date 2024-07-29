import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkEeSRIevaNi6ZCZFkvNLXaBkVKX_II3M",
  authDomain: "portfolio-159bf.firebaseapp.com",
  projectId: "portfolio-159bf",
  storageBucket: "portfolio-159bf.appspot.com",
  messagingSenderId: "399037896450",
  appId: "1:399037896450:web:5ef948f90db072dbb1141b",
  measurementId: "G-68SF1VKGKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const useAnalytics = (analyticsInstance: typeof analytics) => {
  console.log("Analytics instance:", analyticsInstance);
};

useAnalytics(analytics);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
