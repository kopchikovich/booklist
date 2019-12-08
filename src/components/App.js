import React, {Component} from 'react'
import Header from './header'
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'book',
            search: '',
            bookId: '',
            lastBookId: 'psad51sso',
            lightTheme: false
        }
    }

    render() {
        return (
            <div className='app'>
                <Header 
                    searchHandler={this.searchHandler.bind(this)}
                    openSearchScreen={this.openSearchScreen.bind(this)}
                    openUserScreen={this.openUserScreen.bind(this)}
                    screen={this.state.screen}
                />
                <Main 
                    state={this.state}
                    openBook={this.openBook.bind(this)}
                    switchTheme={this.switchTheme.bind(this)}
                />
            </div>
        )
    }

    searchHandler(search) {
        this.setState({
            search
        })
    }

    openSearchScreen() {
        this.setState({
            screen: 'search'
        })
    }

    openBook(e) {
        this.setState({
            bookId: e.target.value,
            screen: 'book',
            search: ''
        })
    }

    openUserScreen() {
        this.setState({
            screen: 'user',
            search: ''
        })
    }

    switchTheme() {
        const root = document.querySelector('html')
        if (!this.state.lightTheme) {
            root.style.setProperty('--main-bg-color', '#ddd')
            root.style.setProperty('--main-color', '#333')
            this.setState({
                lightTheme: true
            })
        } else {
            root.style.setProperty('--main-bg-color', '#333')
            root.style.setProperty('--main-color', '#ddd')
            this.setState({
                lightTheme: false
            })
        }
    }
}

export default App