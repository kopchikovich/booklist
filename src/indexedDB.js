import {db, sortedBooks} from './data'

const makeIDB = () => {
    if (!window.indexedDB) {
        console.log('Ваш браузер не поддерживат стабильную версию IndexedDB');
    }

    let idb = null;
    // обращение к существующей базе или создание новой
    const request = window.indexedDB.open('booklist', 1);
    // обработка ошибки запроса
    request.onerror = (e) => {
        console.log(e);
    }
    // обработка успешного запроса
    request.onsuccess = (e) => {
        // сохранение ссылки на базу
        idb = e.target.result;
        // обработка ВСЕХ всплывающих ошибок в базе
        idb.onerror = (e) => {
            console.log('Database error: ' + e.target.errorCode);
        }
    }

    request.onupgradeneeded = (e) => {
        const idb = e.target.result;

        const objectStore = idb.createObjectStore('books', { keyPath: 'id' });
        objectStore.createIndex('title', 'title', { unique: true });
        objectStore.createIndex('author', 'author', { unique: false });

        for (let i in sortedBooks) {
            objectStore.add(sortedBooks[i]);
        }
    }

    setTimeout(() => {
        let transaction = idb.transaction(["books"], "readwrite").objectStore('books').delete('9324fdsf1');
        console.log(transaction);
    }, 2000);

}

export default makeIDB