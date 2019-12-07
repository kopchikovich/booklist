import React from 'react'
import Book from './book'
import BookList from './booklist'

const Main = (props) => {
    
    const {screen, search, bookId} = props;
    const book = <Book bookId={bookId} />;
    const booklist = <BookList openBook={props.openBook} />

    return (
        <main className='app__main main'>

            {screen === 'book'? book : null}

            {screen === 'search'? booklist: null}

        </main>
    )
}

export default Main