import React from 'react'
import Book from './book'
import BookList from './booklist'
import User from './user'
import LoginForm from './login-form'
import AddBookForm from './add-book-form'

const Main = (props) => {

    const bookScreen = <Book bookId={props.state.bookId ? props.state.bookId : props.state.lastBookId} lastBookId={props.state.lastBookId} />;
    const bookListScreen = <BookList state={props.state} openBook={props.openBook} />;
    const userScreen = <User lastBookId={props.state.lastBookId} switchTheme={props.switchTheme} lightTheme={props.state.lightTheme} exit={props.exit} />;
    const loginScreen = <LoginForm login={props.login} />;
    const addBookScreen = <AddBookForm />;

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