/**
 * Firebase Data
 * embryo comes with built in firebase database features
 * You Need To Add Your Firsebase App Account Details Here
 */
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/storage';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAHeQudbFiG8rJowmdI1SzKBAqY_s76c2c",
  authDomain: "goldenetherland.firebaseapp.com",
  databaseURL: "https://goldenetherland.firebaseio.com",
  projectId: "goldenetherland",
  storageBucket: "goldenetherland.appspot.com",
  messagingSenderId: "1011339274142",
  appId: "1:1011339274142:web:b190bbf0d3538b0341188f",
  measurementId: "G-59E8S0X67Q"
};
firebase.initializeApp(config);

export default firebase;