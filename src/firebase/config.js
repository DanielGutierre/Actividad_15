import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAXHfkm3ss2nJrPuGmG2dePPGSpabx9o0c",
  authDomain: "actividad-15-d998b.firebaseapp.com",
  databaseURL: "https://actividad-15-d998b-default-rtdb.firebaseio.com",
  projectId: "actividad-15-d998b",
  storageBucket: "actividad-15-d998b.appspot.com",
  messagingSenderId: "99301731917",
  appId: "1:99301731917:web:557ef69321a1a60fd07604"
};


const db = initializeApp(firebaseConfig);

export default getDatabase(db);