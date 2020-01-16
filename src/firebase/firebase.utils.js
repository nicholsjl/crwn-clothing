import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCOvAhHQKDP5RkPpe0rjUEEtBEK4K6Pt2s',
  authDomain: 'crwn-db-ad498.firebaseapp.com',
  databaseURL: 'https://crwn-db-ad498.firebaseio.com',
  projectId: 'crwn-db-ad498',
  storageBucket: 'crwn-db-ad498.appspot.com',
  messagingSenderId: '278509322607',
  appId: '1:278509322607:web:1ff2035d196373cf97e89a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
