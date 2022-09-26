import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBUY-SBvuUnKQOofB-R8Rzj2SYPH3eu33Y",
    authDomain: "carhere-fa688.firebaseapp.com",
    projectId: "carhere-fa688",
    storageBucket: "carhere-fa688.appspot.com",
    messagingSenderId: "797369445435",
    appId: "1:797369445435:web:9d83ffb197bc80211a801e",
    measurementId: "G-ERNSB5NC3W"
};

export function FirebaseInit(){
    const app = initializeApp(firebaseConfig);
}

