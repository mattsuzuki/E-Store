import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAw0ZjhW6njoWG33FYReZ6R-b4WPCZ4CHI",
  authDomain: "shop-smart-db.firebaseapp.com",
  projectId: "shop-smart-db",
  storageBucket: "shop-smart-db.appspot.com",
  messagingSenderId: "796551885485",
  appId: "1:796551885485:web:d6304148d4f9d0180e8c24",
  measurementId: "G-5JHVF9V6V5",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleprovider = new GoogleAuthProvider();

googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleprovider);
export const signInWithGooogleRedirect = () =>
  signInWithRedirect(auth, googleprovider);

// Create DB
export const db = getFirestore();

// Use DB
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

//check if user data exists

// if user data does not exist
// create/ set document with data from userAuth in my collection
