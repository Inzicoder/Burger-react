import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAYZN8dCsEWFZXDULFY8T5MVz8uYnBk-dE",
    authDomain: "myburger-c33da.firebaseapp.com",
    projectId: "myburger-c33da",
    storageBucket: "myburger-c33da.appspot.com",
    messagingSenderId: "77581579521",
    appId: "1:77581579521:web:e15d2714ce1e69b2d4d700",
    measurementId: "G-YPMS6E01WM"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'});

  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase