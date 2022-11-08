// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeFirestore} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0trUdRWf2IjiPzcCSSOYUCAbj0fGWqLc",
  authDomain: "testproject202213.firebaseapp.com",
  projectId: "testproject202213",
  storageBucket: "testproject202213.appspot.com",
  messagingSenderId: "1042281443437",
  appId: "1:1042281443437:web:d837373ed39455bb690f64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = initializeFirestore(app,{
    experimentalForceLongPolling:true,
})

export default app
export {db}