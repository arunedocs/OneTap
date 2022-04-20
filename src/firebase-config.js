import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRiHZu2zel72X0j3V4E944nKXdkc5bQLs",
  authDomain: "one-tap-aacd4.firebaseapp.com",
  projectId: "one-tap-aacd4",
  storageBucket: "one-tap-aacd4.appspot.com",
  messagingSenderId: "914215331144",
  appId: "1:914215331144:web:67171e366795b6150b7f7d",
  measurementId: "G-7J66NC83TJ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
