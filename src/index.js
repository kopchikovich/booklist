import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import Db from './db'

// make controller for app
document.controller = {}

// add message api to controller
document.controller.renderMessage = (text, color) => {

    const makeMessage = (text, color) => {
        const message = document.createElement('div');
        const renderColor = color === 'green'? '#0a0' : '#a00';
        message.className = 'message';
        message.innerHTML = text;
        message.style.color = renderColor;
        return message;
    }

    const TOP_POSITION = 0;
    const TIMEOUT = 3000;
    const container = document.getElementById('message');
    const message = makeMessage(text, color);
    container.appendChild(message);

    // for animation
    setTimeout(() => {
        message.style.top = TOP_POSITION;
    }, 100);
    setTimeout(() => {
        container.removeChild(message);
    }, TIMEOUT);
}

// make or connect to db
const booksDb = new Db('books')
let sortedBooks = null
if (Object.keys(booksDb.open()).length > 0) {
    sortedBooks = booksDb.getSortedBooks();
}

render((
    <App
        lastBookId={sortedBooks? sortedBooks[0].id : sortedBooks}
        sortedBooks={sortedBooks}
        booksDb={booksDb}
    />
), document.getElementById('root'))