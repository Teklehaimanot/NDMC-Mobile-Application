import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {
  REACT_APP_apikey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_messagingSenderId,
  REACT_APP_appId,
  REACT_APP_measurementId,
} from "@env";

const firebaseConfig = {
  apiKey: REACT_APP_apikey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  messagingSenderId: REACT_APP_messagingSenderId,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
