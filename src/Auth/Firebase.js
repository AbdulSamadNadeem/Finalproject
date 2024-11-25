import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword ,GoogleAuthProvider ,signInWithPopup ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAiQuZ9iQvExSVuIgOX5Kcaz3zFD5diGQA",
  authDomain: "final-project-e11b9.firebaseapp.com",
  projectId: "final-project-e11b9",
  storageBucket: "final-project-e11b9.firebasestorage.app",
  messagingSenderId: "509204642353",
  appId: "1:509204642353:web:5819dc3a8fad51c2ad7310"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export{auth , createUserWithEmailAndPassword , GoogleAuthProvider , signInWithPopup , provider ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut }