import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCI51rvh7WjvG2Um4OFALysFy464VnTz5g",
  authDomain: "wyzr-aa2c4.firebaseapp.com",
  projectId: "wyzr-aa2c4",
  storageBucket: "wyzr-aa2c4.appspot.com",
  messagingSenderId: "729751729120",
  appId: "1:729751729120:web:54fa539e800b0e5efa7185",
  measurementId: "G-17CSXTWGB9",
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
