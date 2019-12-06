import React from 'react'
import db from '../data'

const Book = (props) => {
    const book = db[props.bookId];
    const dateOfReading = book.dateOfReading.toDateString();
    const quotes = book.quotes.map((item, i) => {
        return <li key={i}>{item}</li>
    });
    return  (
        <article>
            <img src={book.img? book.id : 'img/empty.jpg'} alt='book cover'/>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <p>{dateOfReading}</p>
            <p>{book.mainIdea}</p>
            <ul>{quotes}</ul>
        </article>
    )
}

export default Book