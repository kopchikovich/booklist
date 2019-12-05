import React, {Component} from 'react'

class SearchInput extends Component {

    constructor(props) {
        super(props)

        this.onChangeHandler = this.onChangeHandler.bind(this)
    }

    onChangeHandler(e) {
        this.props.searchHandler(e.target.value)
    }

    render() {
        return (
            <input
                className='header__search'
                type='search'
                placeholder='search'
                onChange={this.onChangeHandler}/>
        )
    }
}

export default SearchInput