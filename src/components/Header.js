import React from 'react'
import SearchInput from './search-input'
import Button from './button'

const Header = (props) => {
    const searchInput = <SearchInput searchHandler={props.searchHandler} className='header__search-input search-input' />
    const listButton = <Button onClickHandler={props.openSearchScreen} title='list' className='header__button button' />
    return (
        <header className='app__header header'>
            {props.screen === 'search' ? searchInput : listButton}
            <Button className='header__button button button--percon-icon' onClickHandler={props.openUserScreen} />
        </header>
    )
}

export default Header