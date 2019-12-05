import React, {Component} from 'react'
import SearchInput from './search-input'
import Button from './button'

class Header extends Component {

    render() {
        const searchInput = <SearchInput searchHandler={this.props.searchHandler} className='header__search-input search-input' />
        const button = <Button onClickHandler={this.props.switchScreen} title='list' className='header__button button' />
        return (
            <header className='app__header header'>
                {this.props.screen === 'search' ? searchInput : button}
                <Button className='header__button button button--percon-icon' />
            </header>
        )
    }
}

export default Header