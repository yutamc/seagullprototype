import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBrp9VW9kA3YS3ScAblUq1QCs5u9_QghU",
  authDomain: "seagull-2831f.firebaseapp.com",
  projectId: "seagull-2831f",
  storageBucket: "seagull-2831f.appspot.com",
  messagingSenderId: "71459813246",
  appId: "1:71459813246:web:207d7341561bcfa536652f",
  measurementId: "G-805BYYFFWS"
})

const auth = firebase.auth();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, storage, db };