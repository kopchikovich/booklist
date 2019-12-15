import React from 'react'
import Button from './button'
import {db, sortedBooks} from '../data'

const Book = (props) => {

    const book = db[props.bookId]
    const dateOfReading = book.dateOfReading.toDateString();
    const quotes = book.quotes.map((item, i) => {
        return <li key={i}>"{item}"</li>
    });

    const isBorderBook = (checkingBookId, bookId) => {
        if (checkingBookId === bookId) {
            return true
        }
        return false
    };

    return  (
        <section>

            <article className='book'>
                <img className='book__cover' src={book.img? book.img : 'img/empty.jpg'} alt='book cover' />
                <p className='book__title'>"{book.title}"</p>
                <p className='book__author'>{book.author}</p>
                <p className='book__text book__date'>Прочитано: {dateOfReading}</p>
                <p className='book__text book__text--line'>Главная мысль: {book.mainIdea}</p>
                <p className='book__text book__text--left'>Цитаты:</p>
                <ul className='book__text'>{quotes}</ul>
            </article>

            <div className='controls'>
                <Button
                    className='controls__button'
                    title='<'
                    onClickHandler={props.switchBookToNewer}
                    disabled={isBorderBook(props.lastBookId, props.bookId)}
                />
                <Button
                    className='controls__button'
                    title='>'
                    onClickHandler={props.switchBookToOlder}
                    disabled={isBorderBook(sortedBooks[sortedBooks.length-1].id, props.bookId)}
                />
            </div>

        </section>
    )
}

export default Book