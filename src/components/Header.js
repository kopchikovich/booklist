import React, {Component} from 'react'

class Header extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            screen: ''
        }
    }
    render() {
        return (
            <header className='app__header header'>
                app header
            </header>
        )
    }
}

export default Header