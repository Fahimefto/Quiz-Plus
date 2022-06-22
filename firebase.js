import { initializeApp } from "firebase/app";
/// config firebase 

const app = initializeApp(firebaseConfig);

const firebaseConfig = {

    apiKey: process.env.REACT_APP_API_KEY,

    authDomain: process.env.REACT_APP_AUTH_DOM,

    projectId: process.env.REACT_APP_PROJECT_ID,

    storageBucket: process.env.REACT_APP_STORE_BUCK,

    messagingSenderId: process.env.REACT_APP_SENDER_ID,

    appId: process.env.REACT_APP_APP_ID

};
export default app;