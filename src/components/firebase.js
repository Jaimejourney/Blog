import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyA2JJKh5I6fz5HfQiKIcVFw8IgCR0b5ZEQ",
  authDomain: "blogarticle-a550e.firebaseapp.com",
  databaseURL: "https://blogarticle-a550e.firebaseio.com",
  projectId: "blogarticle-a550e",
  storageBucket: "blogarticle-a550e.appspot.com",
  messagingSenderId: "833525542442"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
export default firebase;