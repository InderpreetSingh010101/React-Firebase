import firebase from "firebase/app";
import "firebase/firestore"
// step 1
import "firebase/auth"

let firebaseConfig = {
    apiKey: "AIzaSyAv0gvKI1dI-R4hfHFBHv9rF9Hvn5S5iEM",
    authDomain: "reeals.firebaseapp.com",
    projectId: "reeals",
    storageBucket: "reeals.appspot.com",
    messagingSenderId: "29676771005",
    appId: "1:29676771005:web:f3abf683524aa3e0f989d4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
// step 2
export const auth = firebase.auth()
// step 3 firebase console; enable google login in auth panel

// step 4
let provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)
// export default firebase;

let provider1 = new firebase.auth.FacebookAuthProvider()
export const signInWithFacebook = ()=> auth.signInWithPopup(provider1)


let provider2 = new firebase.auth.GithubAuthProvider()
export const signInWithGithub = ()=> auth.signInWithPopup(provider2)
export default firebase;