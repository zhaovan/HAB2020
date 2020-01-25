import firebase from 'firebase'
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyC_ucIHx1YHn89SPbjiqYKOTKJfcKFSFMc",
    authDomain: "brownhack2020.firebaseapp.com",
    databaseURL: "https://brownhack2020.firebaseio.com",
    projectId: "brownhack2020",
    storageBucket: "brownhack2020.appspot.com",
    messagingSenderId: "541192191889",
    appId: "1:541192191889:web:cd2eef176181a519cf6430",
    measurementId: "G-G7QVF4HHQV"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
export const db = firebase.firestore();