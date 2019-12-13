import React from 'react'
import {db} from '../data'
import AddBookForm from './add-book-form'
import Button from './button'

const EditBookForm = (props) => {

    let book = db[props.bookId]
    
    const deleteBook = () => {
        delete db[props.bookId] // not work
    }

    const editBook = (e) => {
        e.preventDefault()
        book = Object.assign(book, e.target) // not work
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
                submitHandler={editBook}
            />

        </section>
    )
}

export default EditBookForm