import React, {Component} from 'react'
import Header from './header'
import Main from './main'
import {sortedBooks} from '../data'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'login',
            search: '',
            bookId: props.lastBookId,
            lastBookId: props.lastBookId,
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
                    switchBookToOlder={this.switchBookToOlder.bind(this)}
                    switchBookToNewer={this.switchBookToNewer.bind(this)}
                    switchTheme={this.switchTheme.bind(this)}
                    login={this.login.bind(this)}
                    logout={this.logout.bind(this)}
                />
            </div>
        )
    }

    openBook(e) {
        this.setState({
            bookId: e.target.value,
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

    searchHandler(search) {
        this.setState({
            search
        })
    }

    switchBookToOlder() {
        const newBook = sortedBooks[sortedBooks.findIndex((el) => {
            return el.id === this.state.bookId
        }) + 1].id
        this.setState({
            bookId: newBook
        })
    }

    switchBookToNewer() {
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
        if (form.email.value === '1@2.3' && form.password.value === '123') {
            this.setState({
                screen: 'book'
            })
        } else {
            form.classList.add('shake')
            setTimeout(() => {
                form.classList.remove('shake')
            }, 300);
        }
    }

    logout() {
        this.setState({
            screen: 'login'
        })
    }
}

export default App