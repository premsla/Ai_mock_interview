import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4PN1cnmluWqOfWUiyF7uD9V9W2kvFli4",
  authDomain: "prepwise-10c7a.firebaseapp.com",
  projectId: "prepwise-10c7a",
  storageBucket: "prepwise-10c7a.firebasestorage.app",
  messagingSenderId: "50936658736",
  appId: "1:50936658736:web:47b0041d01d8185ea866f5",
  measurementId: "G-DWGWHED5DY",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
