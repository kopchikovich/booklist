import React from 'react'
import {db} from '../data'
import AddBookForm from './add-book-form'
import Button from './button'

const EditBookForm = (props) => {

    let book = db[props.bookId]
    
    const deleteBook = () => {
        props.booksDb.delete(props.bookId)
        document.controller.renderMessage('Книга удалена')
        props.openBookListScreen()
    }

    const editBook = (e) => {                              // НАДО ПРОТЕСТИРОВАТЬ!
        e.preventDefault()
        const form = e.target.elements
        const quotes = form.quotes.value.split('\n\n')

        const book = {
            title: form.title.value,
            author: form.author.value,
            dateOfReading: form.dateOfReading.value,
            mainIdea: form.mainIdea.value,
            quotes
        }
        props.booksDb.edit(book, props.bookId)
        document.controller.renderMessage('Книга отредактирована', 'green')
        props.openBook(null, props.bookId)
    }

    return (
        <section>

            <Button
                className='button button--warning'
                title='Удалить книгу'
                onClickHandler={deleteBook}
            />

            <AddBookForm
                book={book}
                submitHandler={editBook.bind(this)}
            />

        </section>
    )
}

export default EditBookForm