import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "Your API Key",
  authDomain: "Your Domain",
  projectId: "Your project Id",
  storageBucket: "Your Storage Bucket",
  messagingSenderId: "Your Mesageng sender id",
  appId: "your app id ",
  measurementId: "your mesurment id",
  databaseURL: "your database url",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
