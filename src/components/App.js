import React, {Component} from 'react'
import Header from '../components/Header'
import Main from '../components/Main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: ''
        }
    }

    render() {
        return (
            <div className='app'>
                <Header />
                <Main />
            </div>
        )
    }
}

export default App