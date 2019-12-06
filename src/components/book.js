import React from 'react'
import db from '../data'

const Book = (props) => {
    const book = db[props.bookId];
    const dateOfReading = book.dateOfReading.toDateString();
    const quotes = book.quotes.map((item, i) => {
        return <li key={i}>"{item}"</li>
    });
    return  (
        <article className='book'>
            <img
                className='book__cover'
                src={book.img? book.id : 'img/empty.jpg'} 
                alt='book cover'/>
            <p className='book__title'>"{book.title}"</p>
            <p className='book__author'>{book.author}</p>
            <p className='book__text book__date'>Прочитано: {dateOfReading}</p>
            <p className='book__text book__text--line'>Главная мысль: {book.mainIdea}</p>
            <p className='book__text book__text--left'>Цитаты:</p>
            <ul className='book__text'>{quotes}</ul>
        </article>
    )
}

export default Book