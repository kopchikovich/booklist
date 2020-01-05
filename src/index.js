import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import {sortedBooks} from './data'
import makeIDB from './indexedDB'

makeIDB();
render(<App lastBookId={sortedBooks[0].id} />, document.getElementById('root'));