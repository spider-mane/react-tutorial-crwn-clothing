import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDWIEzVaPc0ZS2ZPdLOAjM2TVtfn52Y4f8",
  authDomain: "crown-db-67af2.firebaseapp.com",
  databaseURL: "https://crown-db-67af2.firebaseio.com",
  projectId: "crown-db-67af2",
  storageBucket: "crown-db-67af2.appspot.com",
  messagingSenderId: "1089115514736",
  appId: "1:1089115514736:web:23392cbc7c6c0c7222d1b5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;