import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {sortedBooks} from './data'



render(<App lastBookId={sortedBooks[0].id} />, document.getElementById('root'));