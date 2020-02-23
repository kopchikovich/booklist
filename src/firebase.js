import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB6ntiWothPk_sUSCzNXutEXlWvzHa6OtI",
    authDomain: "booklist-55b52.firebaseapp.com",
    databaseURL: "https://booklist-55b52.firebaseio.com",
    projectId: "booklist-55b52",
    storageBucket: "booklist-55b52.appspot.com",
    messagingSenderId: "968048237404",
    appId: "1:968048237404:web:41fc31aba0c1e3336c7f99"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);