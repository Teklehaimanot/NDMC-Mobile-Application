import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCVySNKwv1n04--5U6mpcCcGSPqjdkQY1c",
  authDomain: "ndmc-mobile-5a8b5.firebaseapp.com",
  projectId: "ndmc-mobile-5a8b5",
  storageBucket: "ndmc-mobile-5a8b5.appspot.com",
  messagingSenderId: "33019883460",
  appId: "1:33019883460:web:b6d45ee5b25cbd5cb8fe91",
  measurementId: "G-Q1H2W03RFN",
  databaseURL: "https://ndmc-mobile-default-rtdb.firebaseio.com/",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
