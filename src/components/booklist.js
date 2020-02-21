import React from 'react'

const BookList = (props) => {

    const {search} = props.state
    let booksToRender = props.sortedBooks

    if (search) {
        const regexp = new RegExp(`\\s${search}[а-я]?\\s|^${search}[а-я]?\\s|\\s${search}[а-я]?.$`, "gim")
        booksToRender = props.sortedBooks.filter((book) => {
            return book.title.search(regexp) !== -1 || book.author.search(regexp) !== -1
        })
    }

    const list = booksToRender.map((book, i) => {
        return (
            <li key={i} className="booklist__book">
                <button onClick={props.openBook} value={book.id}>"{book.title}" {book.author}</button>
            </li>
        )
    })

    return (
        <ul className="booklist">
            {list}
        </ul>
    )
}

export default BookList