import React from 'react'
import Book from './book'
import BookList from './booklist'
import User from './user'
import LoginForm from './login-form'
import AddBookForm from './add-book-form'
import EditBookForm from './edit-book-form'

const Main = (props) => {

    const bookScreen = (
        <Book
            bookId={props.state.bookId ? props.state.bookId : props.state.lastBookId}
            booksDb={props.booksDb}
            sortedBooks={props.sortedBooks}
            lastBookId={props.state.lastBookId}
            switchBookToOlder={props.switchBookToOlder}
            switchBookToNewer={props.switchBookToNewer}
        />
    )
    const bookListScreen = (
        <BookList
            state={props.state}
            openBook={props.openBook}
        />
    )
    const userScreen = (
        <User
            lastBookId={props.state.lastBookId}
            switchTheme={props.switchTheme}
            lightTheme={props.state.lightTheme}
            logout={props.logout}
        />
    )
    const loginScreen = (
        <LoginForm
            login={props.login}
        />
    )
    const addBookScreen = (
        <AddBookForm
            booksDb={props.booksDb}
            openBook={props.openBook}
        />
    )
    const editBookScreen = (
        <EditBookForm
            bookId={props.state.bookId}
            booksDb={props.booksDb}
            openBook={props.openBook}
            openBookListScreen={props.openBookListScreen}
        />
    )

    const {screen} = props.state;
    let renderScreen = null;

    switch (screen) {
        case 'book':
            renderScreen = bookScreen; break;
        case 'booklist':
            renderScreen = bookListScreen; break;
        case 'user':
            renderScreen = userScreen; break;
        case 'login':
            renderScreen = loginScreen; break;
        case 'add-book':
            renderScreen = addBookScreen; break;
        case 'edit-book':
            renderScreen = editBookScreen; break;
        default:
            renderScreen = bookListScreen; break;
    }

    return (
        <main className='app__main main'>

            {renderScreen}

        </main>
    )
}

export default Main