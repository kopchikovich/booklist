import React from 'react'
import AddBookForm from './add-book-form'
import Button from './button'
import {firebase_updateData} from '../firebase'

const EditBookForm = (props) => {

    let book = document.controller.db.open()[props.bookId]
    
    const deleteBook = () => {
        document.controller.db.delete(props.bookId)
        document.controller.updateSortedBooks()
        document.controller.renderMessage('Книга удалена')
        props.updateLastBookId()
        props.openBookListScreen()
        firebase_updateData()
    }

    const editBook = (e) => {
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
        document.controller.db.edit(book, props.bookId)
        document.controller.updateSortedBooks()
        document.controller.renderMessage('Книга отредактирована', 'green')
        props.updateLastBookId()
        props.openBook(null, props.bookId)
        firebase_updateData()
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