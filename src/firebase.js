// step1 npm i firebase
// step2 import firebase from 'firestore'
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBCAmu_lRX7ZbHcg_pOhwp8BDZBQDDwqB8',
  authDomain: 'discord-jmr-clone.firebaseapp.com',
  projectId: 'discord-jmr-clone',
  storageBucket: 'discord-jmr-clone.appspot.com',
  messagingSenderId: '489741473472',
  appId: '1:489741473472:web:aced0ca25875db8da03f25',
};
// step3: Initialize firebaseApp
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// console.log('firebasedb->>>', db);
const auth = firebase.auth();
// for GOOGLE auth
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;