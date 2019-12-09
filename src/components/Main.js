import React from 'react'
import Book from './book'
import BookList from './booklist'
import User from './user'
import LoginForm from './login-form'
import AddBookForm from './add-book-form'

const Main = (props) => {

    const {screen} = props.state;
    const book = <Book bookId={props.state.bookId ? props.state.bookId : props.state.lastBookId} />;
    const booklist = <BookList state={props.state} openBook={props.openBook} />
    const userScreen = <User lastBookId={props.state.lastBookId} switchTheme={props.switchTheme} lightTheme={props.state.lightTheme} exit={props.exit} />
    const loginScreen = <LoginForm login={props.login} />
    const addBookScreen = <AddBookForm />

    return (
        <main className='app__main main'>

            {screen === 'book'? book : null}

            {screen === 'search'? booklist : null}

            {screen === 'user'? userScreen : null}

            {screen === 'login'? loginScreen : null}

            {screen === 'add-book'? addBookScreen : null}

        </main>
    )
}

export default Main