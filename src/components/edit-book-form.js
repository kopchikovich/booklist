import React from 'react'
import {db} from '../data'
import AddBookForm from './add-book-form'
import Button from './button'

const EditBookForm = (props) => {

    const book = db[props.bookId]
    
    const deleteBook = () => {
        delete db[props.bookId]
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
                submitHandler={null}
            />

        </section>
    )
}

export default EditBookForm