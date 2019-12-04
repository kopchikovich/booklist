class Book {
    constructor(title, author, img, dateOfReading, mainIdea, quotes) {
        this.title = title;
        this.author = author;
        this.img = img;
        this.dateOfReading = dateOfReading;
        this.mainIdea = mainIdea;
        this.quotes = quotes;
    }
}

const db = [
    new Book(
        'Краткие ответы на большие вопросы',
        'Стивен Хокинг',
        null,
        new Date(2019, 10, 20),
        'Творите будущее',
        ['Так что не забывайте смотреть не только под ноги, но и на звезды. Старайтесь искать смысл в том, что вы видите, и думать о том, как и почему существует Вселенная. Будьте любознательны. Какой бы трудной ни казалась жизнь, вы всегда можете что-то сделать и чего-то добиться. Главное – никогда не сдаваться. Дайте волю воображению. Творите будущее.']
    ),
    new Book()
]