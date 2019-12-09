import React from 'react'
import SearchInput from './search-input'
import Button from './button'

const Header = (props) => {

    const {screen} = props
    const searchInput = <SearchInput  className='header__search-input input' key='search-inpt' searchHandler={props.searchHandler} />
    const listButton = <Button className='header__button button' key='list-btn' title='booklist' onClickHandler={props.openSearchScreen} />
    const addButton = <Button className='header__button button button--add' key='add-btn' title='+' onClickHandler={props.openAddBookScreen} />
    const userButton = <Button className='header__button button button--percon-icon' key='user-btn' onClickHandler={props.openUserScreen} />

    return (
        <header className='app__header header'>

            {screen === 'login'? null : screen === 'search'? [searchInput, addButton, userButton] : [listButton, addButton, userButton]}

        </header>
    )
}

export default Header