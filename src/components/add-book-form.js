import React from 'react'
import Button from './button'
import {firebase_updateData} from '../firebase'

const AddBookForm = (props) => {

    const book = props.book? props.book : null
    const quotes = book? book.quotes.join('\n\n') : ''

    const getDateString = (date) => {
        if (typeof date === 'string') {
            return date
        }
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
        const id = document.controller.db.add(book)
        document.controller.updateSortedBooks()
        props.updateLastBookId()
        document.controller.renderMessage('Книга записана в базу', 'green')
        firebase_updateData()
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
                    required
                />
            </label>
            <label className='add-form__row'>
                <span>Автор</span>
                <input
                    className='add-form__input input'
                    type='text'
                    name='author'
                    defaultValue={book? book.author : ''}
                    required
                />
            </label>
            <label className='add-form__row'>
                <span>Дата прочтения</span>
                <input
                    className='add-form__input add-form__input--date input'
                    type='date'
                    name='dateOfReading'
                    defaultValue={book? getDateString(book.dateOfReading) : ''}
                    required
                />
            </label>
            <label className='add-form__row'>
                <span>Главная мысль</span>
                <input
                    className='add-form__input add-form__input--small-text input'
                    type='text'
                    name='mainIdea'
                    defaultValue={book? book.mainIdea : ''}
                    required
                />
            </label>
            <label className='add-form__row'>
                <span>Цитаты</span>
                <textarea
                    className='add-form__textarea'
                    name='quotes'
                    placeholder='Если цитат больше одной, между ними оставлять пустую строку'
                    defaultValue={quotes}
                    required
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