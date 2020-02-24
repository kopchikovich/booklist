import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
    apiKey: "AIzaSyB6ntiWothPk_sUSCzNXutEXlWvzHa6OtI",
    authDomain: "booklist-55b52.firebaseapp.com",
    databaseURL: "https://booklist-55b52.firebaseio.com",
    projectId: "booklist-55b52",
    storageBucket: "booklist-55b52.appspot.com",
    messagingSenderId: "968048237404",
    appId: "1:968048237404:web:41fc31aba0c1e3336c7f99"
});

//changing db here | test <-> users
const firebase_db = firebase.firestore();
const user = firebase_db.doc('test/kopchikovich');

const printError = (error) => {
    console.log(error.code + ' : ' + error.message);
    document.controller.renderMessage(`${error.code} : ${error.message}`, 'red');
}

const firebase_signIn = (email, password) => {
    localStorage.clear();
    return firebase.auth().signInWithEmailAndPassword(email, password);
}

const firebase_signOut = () => {
    firebase.auth().signOut().then(() => {
        console.log('Sign out');
        document.controller.renderMessage(`До свидания`, 'green');
        localStorage.clear();
    }).catch(printError);
}

const firebase_getData = (appContext) => {
    return user.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const cloudBooks = JSON.parse(userData.books);
            const localBooks = document.controller.db.open();
            const newDb = Object.assign(localBooks, cloudBooks);
    
            document.controller.db.save(newDb);
            document.controller.updateSortedBooks();
            if (appContext) {
                appContext.setState({
                    screen: 'book',
                    bookId: document.controller.sortedBooks[0].id,
                    lastBookId: document.controller.sortedBooks[0].id
                })
            }
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

export {firebase_signIn, firebase_signOut, firebase_getData, firebase_updateData}