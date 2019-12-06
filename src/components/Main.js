import React, {Component} from 'react'
import Book from './book'

class Main extends Component {
    
    render() {
        return (
            <main className='app__main main'>
                {this.props.search}
                <Book bookId='1308s6wd1' />
            </main>
        )
    }
}

export default Main