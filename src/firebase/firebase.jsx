
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCKewHuU25rPYdb4JJuRp5M6QDDr7p5v4E",
  authDomain: "karnaappsgk.firebaseapp.com",
  projectId: "karnaappsgk",
  storageBucket: "karnaappsgk.appspot.com",
  messagingSenderId: "360340231981",
  appId: "1:360340231981:web:803c14af4426a66c9ea5a4",
  measurementId: "G-SB9Z9KRHSN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };








