import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuZFHmhXg-p1KJ_ykEY30FFT3i_4Us5ek",
    authDomain: "ecom-site-b1043.firebaseapp.com",
    projectId: "ecom-site-b1043",
    storageBucket: "ecom-site-b1043.appspot.com",
    messagingSenderId: "692875906983",
    appId: "1:692875906983:web:0109c92e0587851eeab082"
})


const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};