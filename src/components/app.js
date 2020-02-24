import React, {Component} from 'react'
import Header from './header'
import Main from './main'
import * as firebase from "firebase/app"
import {firebase_signIn, firebase_signOut, firebase_getData} from '../firebase'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'login',
            search: '',
            bookId: document.controller.sortedBooks? document.controller.sortedBooks[0].id : document.controller.sortedBooks,
            lastBookId: document.controller.sortedBooks? document.controller.sortedBooks[0].id : document.controller.sortedBooks,
            lightTheme: false
        }
    }

    render() {
        return (
            <div className='app'>
                <Header 
                    screen={this.state.screen}
                    searchHandler={this.searchHandler.bind(this)}
                    openBookListScreen={this.openBookListScreen.bind(this)}
                    openUserScreen={this.openUserScreen.bind(this)}
                    openAddBookScreen={this.openAddBookScreen.bind(this)}
                    openEditBookScreen={this.openEditBookScreen.bind(this)}
                />
                <Main 
                    state={this.state}
                    openBook={this.openBook.bind(this)}
                    openBookListScreen={this.openBookListScreen.bind(this)}
                    updateLastBookId={this.updateLastBookId.bind(this)}
                    switchBookToOlder={this.switchBookToOlder.bind(this)}
                    switchBookToNewer={this.switchBookToNewer.bind(this)}
                    switchTheme={this.switchTheme.bind(this)}
                    login={this.login.bind(this)}
                    logout={this.logout.bind(this)}
                />
            </div>
        )
    }

    openBook(e, id) {
        this.setState({
            bookId: id? id : e.target.value,
            screen: 'book',
            search: ''
        })
    }

    openBookListScreen() {
        this.setState({
            screen: 'booklist'
        })
    }

    openUserScreen() {
        this.setState({
            screen: 'user',
            search: ''
        })
    }

    openAddBookScreen() {
        this.setState({
            screen: 'add-book',
            search: ''
        })
    }

    openEditBookScreen() {
        this.setState({
            screen: 'edit-book',
            search: ''
        })
    }

    updateLastBookId(id) {
        this.setState({
            lastBookId: document.controller.sortedBooks[0].id
        })
    }

    searchHandler(search) {
        this.setState({
            search
        })
    }

    switchBookToOlder() {
        const sortedBooks = document.controller.sortedBooks
        const newBook = sortedBooks[sortedBooks.findIndex((el) => {
            return el.id === this.state.bookId
        }) + 1].id
        this.setState({
            bookId: newBook
        })
    }

    switchBookToNewer() {
        const sortedBooks = document.controller.sortedBooks
        const newBook = sortedBooks[sortedBooks.findIndex((el) => {
            return el.id === this.state.bookId
        }) - 1].id
        this.setState({
            bookId: newBook
        })
    }

    switchTheme() {
        const root = document.querySelector('html')
        if (!this.state.lightTheme) {
            root.style.setProperty('--main-bg-color', '#ddd')
            root.style.setProperty('--main-color', '#333')
            this.setState({
                lightTheme: true
            })
        } else {
            root.style.setProperty('--main-bg-color', '#333')
            root.style.setProperty('--main-color', '#ddd')
            this.setState({
                lightTheme: false
            })
        }
    }

    login(e) {
        e.preventDefault()
        const form = e.target

        firebase_signIn(form.email.value, form.password.value).then(() => {
            console.log('Sign in')
            document.controller.renderMessage(`Пароль верен, идёт загрузка даннных...`, 'green')
            firebase_getData(this)
        }).catch((error) => {
            form.classList.add('shake')
            setTimeout(() => {
                form.classList.remove('shake')
            }, 300);
            console.log(error.code + ' : ' + error.message);
            document.controller.renderMessage(`${error.code} : ${error.message}`, 'red')
        })
    }

    logout() {
        firebase_signOut()
        this.setState({
            screen: 'login'
        })
    }

    isLogin() {
        return !!firebase.auth().currentUser
    }

    componentDidMount() {
        // check is login
        const CHECK_NUMBER = 10;
        const CHECK_INTERVAL = 1000;
        let checkCounter = 0;
        let loginCheckTimeout = setInterval(() => {
            if (this.isLogin()) {
                this.setState({
                    screen: 'book'
                })
            }
            checkCounter++;
            if (checkCounter >= CHECK_NUMBER || this.isLogin()) clearInterval(loginCheckTimeout);
        }, CHECK_INTERVAL);
    }
}

export default App