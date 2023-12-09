// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGfT8kV09qvCYz0xkEOfidg59OBMpHc9M",
  authDomain: "ecommerce-488f4.firebaseapp.com",
  projectId: "ecommerce-488f4",
  storageBucket: "ecommerce-488f4.appspot.com",
  messagingSenderId: "939254716671",
  appId: "1:939254716671:web:5dfc4ed1591ec0ef10d4ca",
  measurementId: "G-K4JNSJ8DWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
