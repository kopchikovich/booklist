import React from 'react'
import {db} from '../data'
import Checkbox from './checkbox'
import Button from './button'

const User = (props) => {

    const lastBookTitle = db[props.lastBookId].title
    const totalRead = Object.keys(db).length

    return (
        <article className="user">
            <p className='user__text user__name'>kopchikovich</p>
            <p className='user__text user__last-book'>Последняя прочитанная книга: {lastBookTitle}</p>
            <p className='user__text user__total-read'>Всего прочитано: {totalRead}</p>
            <p className='user__text user__switch-theme'>Светлая тема 
                <Checkbox className='user__checkbox' onChangeHandler={props.switchTheme} isChecked={props.lightTheme} />
            </p>
            <Button className='user__button-exit' title='Выйти из аккаунта' onClickHandler={props.exit} />
        </article>
    )
}

export default User