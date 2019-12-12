import React from 'react'
import SearchInput from './search-input'
import Button from './button'

const Header = (props) => {

    const {screen} = props
    const searchInput = <SearchInput  className='input header__search-input' key='search-inpt' searchHandler={props.searchHandler} />
    const listButton = <Button className='header__button header__button--list button' key='list-btn' title='booklist' onClickHandler={props.openBookListScreen} />
    const editButton = screen === 'book' && <Button className='controls__button controls__button--edit' key='edit-btn' title='edit' onClickHandler={null} />
    const addButton = <Button className='header__button button button--add' key='add-btn' title='+' onClickHandler={props.openAddBookScreen} />
    const userButton = <Button className='header__button button button--percon-icon' key='user-btn' onClickHandler={props.openUserScreen} />

    return (
        <header className='app__header header'>

            {screen === 'login'? null : screen === 'booklist'? [searchInput, addButton, userButton] : [listButton, editButton, addButton, userButton]}

        </header>
    )
}

export default Header