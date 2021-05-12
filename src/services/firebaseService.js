import firebase from 'firebase/app';
import "firebase/auth";

// Configuration
const firebaseConfig = {
  apiKey: "AIzaSyChUy6n7oOVmZ0Ou-ADn0TP5Prqv5fU1WU",
  authDomain: "holderfolio-4ce24.firebaseapp.com",
  projectId: "holderfolio-4ce24",
  storageBucket: "holderfolio-4ce24.appspot.com",
  messagingSenderId: "1013120247578",
  appId: "1:1013120247578:web:c831cc94aff5acc4256ea3",
  measurementId: "G-D1XL50QK5B"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth;

