import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDQqD2sh0k3XiPiWQtvitVDj__6n1TqjkU",
  authDomain: "quiz-dev1.firebaseapp.com",
  projectId: "quiz-dev1",
  storageBucket: "quiz-dev1.appspot.com",
  messagingSenderId: "995879506699",
  appId: "1:995879506699:web:112d5b1133b96fcdf5480e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
