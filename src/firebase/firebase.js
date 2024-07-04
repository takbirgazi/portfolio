// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRvJzdNzrhss_G4JXPbS2rpCAGJB0naqA",
  authDomain: "portfolio-da28b.firebaseapp.com",
  projectId: "portfolio-da28b",
  storageBucket: "portfolio-da28b.appspot.com",
  messagingSenderId: "625988705046",
  appId: "1:625988705046:web:eceb6b0207b255a4be0e37",
  measurementId: "G-6X5DKY8MXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default analytics;