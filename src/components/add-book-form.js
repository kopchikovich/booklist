import React from 'react'
import Button from './button'

const AddBookForm = (props) => {

    const book = props.book? props.book : null
    const date = book? book.dateOfReading : null
    const quotes = book? book.quotes.join('\n\n') : ''

    const getDateString = (date) => {
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        if (month < 10) month = `0${month}`
        if (day < 10) day = `0${day}`

        return `${year}-${month}-${day}`
    }

    const addBook = (e) => {
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
        let id = props.booksDb.add(book)
        document.controller.renderMessage('Книга записана в базу', 'green')
        props.openBook(null, id)
    }

    return (
        <form className='add-form' onSubmit={props.submitHandler? props.submitHandler : addBook}>
            <label className='add-form__row'>
                <span>Название</span>
                <input
                    className='add-form__input input'
                    type='text'
                    name='title'
                    defaultValue={book? book.title : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Автор</span>
                <input
                    className='add-form__input input'
                    type='text'
                    name='author'
                    defaultValue={book? book.author : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Дата прочтения</span>
                <input
                    className='add-form__input add-form__input--date input'
                    type='date'
                    name='dateOfReading'
                    defaultValue={book? getDateString(date) : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Главная мысль</span>
                <input
                    className='add-form__input add-form__input--small-text input'
                    type='text'
                    name='mainIdea'
                    defaultValue={book? book.mainIdea : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Цитаты</span>
                <textarea
                    className='add-form__textarea'
                    name='quotes'
                    placeholder='Если цитат больше одной, между ними оставлять пустую строку'
                    defaultValue={quotes}
                />
            </label>
            <Button
                className='add-form__submit'
                title='Записать'
            />
        </form>
    )
}

export default AddBookForm