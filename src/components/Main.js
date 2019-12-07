import React from 'react'
import Book from './book'
import BookList from './booklist'
import User from './user'

const Main = (props) => {

    const {screen} = props.state;
    const book = <Book bookId={props.state.bookId} />;
    const booklist = <BookList openBook={props.openBook} />
    const userScreen = <User lastBookId={props.state.lastBookId} switchTheme={props.switchTheme} lightTheme={props.state.lightTheme} />

    return (
        <main className='app__main main'>

            {screen === 'book'? book : null}

            {screen === 'search'? booklist: null}

            {screen === 'user'? userScreen: null}

        </main>
    )
}

export default Main