import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAHeQudbFiG8rJowmdI1SzKBAqY_s76c2c",
    authDomain: "goldenetherland.firebaseapp.com",
    databaseURL: "https://goldenetherland.firebaseio.com",
    projectId: "goldenetherland",
    storageBucket: "goldenetherland.appspot.com",
    messagingSenderId: "1011339274142",
    appId: "1:1011339274142:web:b190bbf0d3538b0341188f",
    measurementId: "G-59E8S0X67Q"
});

export default app;