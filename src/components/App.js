import React, {Component} from 'react'
import Header from './header'
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: '',
            search: ''
        }
    }

    render() {
        return (
            <div className='app'>
                <Header searchHandler={this.searchHandler.bind(this)}/>
                <Main search={this.state.search}/>
            </div>
        )
    }

    searchHandler(search) {
        this.setState({
            search
        })
    }
}

export default App