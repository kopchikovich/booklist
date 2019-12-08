import React from 'react'
import SearchInput from './search-input'
import Button from './button'

const Header = (props) => {

    const {screen} = props
    const searchInput = <SearchInput  className='header__search-input input' key='search-inpt' searchHandler={props.searchHandler} />
    const listButton = <Button className='header__button button' key='list-btn' title='list' onClickHandler={props.openSearchScreen} />
    const userButton = <Button className='header__button button button--percon-icon' key='user-btn' onClickHandler={props.openUserScreen} />

    return (
        <header className='app__header header'>

            {screen === 'login'? null : screen === 'search'? [searchInput, userButton] : [listButton, userButton]}

        </header>
    )
}

export default Header