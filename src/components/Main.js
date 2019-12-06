import React from 'react'
import Book from './book'

const Main = (props) => {
    return (
        <main className='app__main main'>
            {props.search}
            <Book bookId='1308s6wd1' />
        </main>
    )
}

export default Main