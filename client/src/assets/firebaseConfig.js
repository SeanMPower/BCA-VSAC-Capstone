import firebase from 'firebase/app';
import "firebase/auth";
//import 'firebase/databse'

const firebaseConfig = {
  apiKey: "AIzaSyBvMd-DHS4YI-8xGDYpA_0uJ2CQXZcSGlQ",
  authDomain: "bca-vsac-capstone.firebaseapp.com",
  databaseURL: "https://bca-vsac-capstone.firebaseio.com",
  projectId: "bca-vsac-capstone",
  storageBucket: "bca-vsac-capstone.appspot.com",
  messagingSenderId: "264763983177",
  appId: "1:264763983177:web:678b4109f6bb6c5ff9c698",
  measurementId: "G-3KTCHEEP6W"
};

const fireApp = firebase.initializeApp(firebaseConfig)
const fireAuth = firebase.auth
// const myData = fireApp.database()
// const googleProvider = new firebase.auth.GoogleAuthProvider()

export { fireApp, fireAuth }
