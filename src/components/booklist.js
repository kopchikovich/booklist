import React from 'react'
import db from '../data'

const books = Object.values(db);

const BookList = (props) => {
    const list = books.map((book, i) => {
        return (
            <li key={i} className="booklist__book">
                <button onClick={props.openBook} value={book.id}>"{book.title}" {book.author}</button>
            </li>
        )
    })
    return (
        <ul className="booklist">
            {list}
        </ul>
    )
}

export default BookList