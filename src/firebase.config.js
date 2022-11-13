import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCteU9WS013pB99S7c_wCWdjYX6B5uDuhM",
  authDomain: "gear5-adea5.firebaseapp.com",
  projectId: "gear5-adea5",
  storageBucket: "gear5-adea5.appspot.com",
  messagingSenderId: "1490312258",
  appId: "1:1490312258:web:ada8692359e6afdd7021db",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
