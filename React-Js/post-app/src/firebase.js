import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDOO4acKPvKfn9P56hm1JLt_-Okvs_L7zk",
  authDomain: "list-post.firebaseapp.com",
  databaseURL: "https://list-post.firebaseio.com",
  projectId: "list-post",
  storageBucket: "list-post.appspot.com",
  messagingSenderId: "163254736181",
  appId: "1:163254736181:web:a0255e2907297d4b83a87c",
  measurementId: "G-C1DSTHKC95"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

export { db };