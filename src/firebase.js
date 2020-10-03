import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBHjZ6VH6tXi1KYMM-WOWUlW64xrFlI1Jo",
    authDomain: "capital-gardens.firebaseapp.com",
    databaseURL: "https://capital-gardens.firebaseio.com",
    projectId: "capital-gardens",
    storageBucket: "capital-gardens.appspot.com",
    messagingSenderId: "445715509420",
    appId: "1:445715509420:web:011fec56bc5033773eef09"
  };    


  firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();