import React from 'react'
import Button from './button'

const AddBookForm = (props) => {

    return (
        <form className='add-form'>
            <label className='add-form__row'>
                <span>Название</span>
                <input className='add-form__input input' type='text' />
            </label>
            <label className='add-form__row'>
                <span>Автор</span>
                <input className='add-form__input input' type='text' />
            </label>
            <label className='add-form__row'>
                <span>Дата прочтения</span>
                <input className='add-form__input add-form__input--date input' type='date' />
            </label>
            <label className='add-form__row'>
                <span>Обложка</span>
                <input className='add-form__input add-form__input--file' type='file' />
            </label>
            <label className='add-form__row'>
                <span>Главная мысль</span>
                <input className='add-form__input input' type='text' />
            </label>
            <label className='add-form__row'>
                <span>Цитаты</span>
                <textarea className='add-form__textarea' placeholder='Если цитат больше одной, между ними оставлять пустую строку' />
            </label>
            <Button className='add-form__submit' title='Записать' />
        </form>
    )
}

export default AddBookForm