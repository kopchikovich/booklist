import React from 'react'
import Book from './book'
import BookList from './booklist'
import User from './user'

const Main = (props) => {
    
    const {screen, search, bookId} = props;
    const book = <Book bookId={bookId} />;
    const booklist = <BookList openBook={props.openBook} />
    const userScreen = <User lastBookId={props.lastBookId} switchTheme={props.switchTheme} lightTheme={props.lightTheme} />

    return (
        <main className='app__main main'>

            {screen === 'book'? book : null}

            {screen === 'search'? booklist: null}

            {screen === 'user'? userScreen: null}

        </main>
    )
}

export default Main