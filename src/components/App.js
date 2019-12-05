import React, {Component} from 'react'
import Header from './header'
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'book',
            search: ''
        }
    }

    render() {
        return (
            <div className='app'>
                <Header 
                    searchHandler={this.searchHandler.bind(this)}
                    switchScreen={this.switchScreen.bind(this)}
                    screen={this.state.screen}
                />
                <Main search={this.state.search}/>
            </div>
        )
    }

    searchHandler(search) {
        this.setState({
            search
        })
    }

    switchScreen() {
        switch (this.state.screen) {
            case 'search':
                this.setState({
                    screen: 'book'
                })
                break
            case 'book':
                this.setState({
                    screen: 'search'
                })
                break
            default:
                this.setState({
                    screen: 'search'
                })
                break
        }
    }
}

export default App