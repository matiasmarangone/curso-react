import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWO6GYOJajZVAuwf1b_cjWEXyCcVvSBvU",
  authDomain: "quickbuy-a994b.firebaseapp.com",
  projectId: "quickbuy-a994b",
  storageBucket: "quickbuy-a994b.appspot.com",
  messagingSenderId: "593877880912",
  appId: "1:593877880912:web:559a47b33398367b0b0155",
  measurementId: "G-7C30RCL1PT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;