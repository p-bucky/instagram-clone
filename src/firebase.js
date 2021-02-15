import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyAgrq7SAI_bMqS0d96Si729da4RpZIlo",
    authDomain: "instagram-clone-62130.firebaseapp.com",
    databaseURL: "https://instagram-clone-62130-default-rtdb.firebaseio.com",
    projectId: "instagram-clone-62130",
    storageBucket: "instagram-clone-62130.appspot.com",
    messagingSenderId: "657160331890",
    appId: "1:657160331890:web:9c4a539499ce4ed4a598eb",
    measurementId: "G-EYQS3PS44H"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };