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

    return (
        <form className='add-form' onSubmit={props.submitHandler}>
            <label className='add-form__row'>
                <span>Название</span>
                <input
                    className='add-form__input input'
                    type='text'
                    defaultValue={book? book.title : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Автор</span>
                <input
                    className='add-form__input input'
                    type='text'
                    defaultValue={book? book.author : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Дата прочтения</span>
                <input
                    className='add-form__input add-form__input--date input'
                    type='date'
                    defaultValue={book? getDateString(date) : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Обложка</span>
                <input
                    className='add-form__input add-form__input--file'
                    type='file'
                />
            </label>
            <label className='add-form__row'>
                <span>Главная мысль</span>
                <input
                    className='add-form__input add-form__input--small-text input'
                    type='text'
                    defaultValue={book? book.mainIdea : ''}
                />
            </label>
            <label className='add-form__row'>
                <span>Цитаты</span>
                <textarea
                    className='add-form__textarea'
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