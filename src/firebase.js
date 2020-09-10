import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdRRMHCt9ZgPh1bXnCz2WED-c286Z55Ik",
  authDomain: "rebuild-f71a0.firebaseapp.com",
  databaseURL: "https://rebuild-f71a0.firebaseio.com",
  projectId: "rebuild-f71a0",
  storageBucket: "rebuild-f71a0.appspot.com",
  messagingSenderId: "1080701170150",
  appId: "1:1080701170150:web:ad98fc0fdc7e6d6532a627",
  measurementId: "G-0YQ9SG34MR",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
//firebase database^^
const auth = firebase.auth();
//gives variable to handle all the signing in

export { db, auth };
