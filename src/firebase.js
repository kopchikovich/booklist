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
const firebase_db = firebase.firestore();

//changing db here | test <-> users
const user = firebase_db.doc('test/kopchikovich');

const printError = (error) => {
    console.log(error.code + ' : ' + error.message);
    document.controller.renderMessage(`${error.code} : ${error.message}`, 'red');
}

const firebase_signIn = (email, password) => {
    localStorage.clear();

    // sign in

    firebase_getData();
}

const firebase_signOut = () => {
    localStorage.clear();
    
    // sign out
}

const firebase_getData = () => {
    user.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const cloudBooks = JSON.parse(userData.books);
            const localBooks = document.controller.db.open();
            const newDb = Object.assign(localBooks, cloudBooks);
    
            document.controller.db.save(newDb);
            document.controller.updateSortedBooks();
            firebase_updateData();
        }
    }).catch(printError);
}

const firebase_updateData = () => {
    user.update({
        books: localStorage.getItem('books')
    }).then(() => {
        document.controller.renderMessage('База книг синхронизирована', 'green');
    }).catch(printError);
}