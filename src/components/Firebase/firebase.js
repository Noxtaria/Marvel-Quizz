import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDd1yRG59q3o_2sXiMlHDZP_mHml2Af6n0",
    authDomain: "marvel-quizz-6615f.firebaseapp.com",
    projectId: "marvel-quizz-6615f",
    storageBucket: "marvel-quizz-6615f.appspot.com",
    messagingSenderId: "376152000350",
    appId: "1:376152000350:web:3086577856d006e23271cf"
  };


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);