import React, {Component} from 'react'
import Header from './header'
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'search',
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
                    switchScreen={this.switchScreen.bind(this)}
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

    openBook(e) {
        this.setState({
            bookId: e.target.value,
            screen: 'book',
            search: ''
        })
    }

    openUserScreen() {
        this.setState({
            screen: 'user'
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