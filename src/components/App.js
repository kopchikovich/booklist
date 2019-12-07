import React, {Component} from 'react'
import Header from './header'
import Main from './main'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screen: 'search',
            search: '',
            bookId: '1308s6wd1'
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
                    search={this.state.search}
                    screen={this.state.screen}
                    bookId={this.state.bookId}
                    openBook={this.openBook.bind(this)}
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
            screen: 'book'
        })
    }

    openUserScreen() {
        this.setState({
            screen: 'user'
        })
    }
}

export default App