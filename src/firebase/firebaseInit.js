import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC9RHS5RWAz3gMINIqCb7h63NX9E49pvQE',
  authDomain: 'bubblegoosev1.firebaseapp.com',
  projectId: 'bubblegoosev1',
  storageBucket: 'bubblegoosev1.appspot.com',
  messagingSenderId: '239744388320',
  appId: '1:239744388320:web:d0b8f1cdc39e6411c5d485',
};

initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.Fieldvalue.serverTimestamp;

// export { timestamp };
export const db = getFirestore();
