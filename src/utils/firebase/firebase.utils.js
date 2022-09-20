import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
