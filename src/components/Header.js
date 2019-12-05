import React, {Component} from 'react'
import SearchInput from './search-input'

class Header extends Component {
    
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <header className='app__header header'>
                <SearchInput searchHandler={this.props.searchHandler} />
            </header>
        )
    }
}

export default Header