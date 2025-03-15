// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2TFCMhs4ERnb1H5gNmjQpPafQt3Np9p0",
  authDomain: "gym-registration-form.firebaseapp.com",
  projectId: "gym-registration-form",
  storageBucket: "gym-registration-form.firebasestorage.app",
  messagingSenderId: "934045932466",
  appId: "1:934045932466:web:cae537555580c8e2c6a2ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database= getDatabase(app)

export{database};
export default app;