import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp(JSON.parse(import.meta.env.VITE_FIREBASE_CONFIG));

export const firestoreDatabase = getFirestore();

export const firebaseImageStorage = getStorage(firebaseApp);
