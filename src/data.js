class Book {
    constructor(id, title, author, img, dateOfReading, mainIdea, quotes) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.img = img;
        this.dateOfReading = dateOfReading;
        this.mainIdea = mainIdea;
        this.quotes = quotes;
    }
}

const db = {
    '1308s6wd1': new Book(
        '1308s6wd1',
        'Принципы. Жизнь и работа',
        'Рэй Далио',
        null,
        new Date(2019, 9, 12),
        'Ставить четкие цели и достигать их',
        ['1. Ставьте перед собой четкие цели. 2. Выявите проблемы, стоящие у вас на пути, и не миритесь с ними. 3. Проанализируйте эти проблемы, чтобы понять причины. 4. Разработайте план, который поможет вам справиться с проблемами. 5. Делайте все необходимое, чтобы воплотить свой план и получить результат.',
        'Чтобы научиться принимать наиболее эффективные решения и набраться смелости это делать, нужно: а) добиваться осуществления своих целей; б) терпеть неудачи и анализировать их, придерживаясь принципа абсолютной непредубежденности; в) меняться/развиваться, чтобы вырабатывать в себе новые способности и справляться со страхом.']
    ),
    '9324fdsf1': new Book(
        '9324fdsf1',
        'Краткие ответы на большие вопросы',
        'Стивен Хокинг',
        null,
        new Date(2019, 10, 20),
        'Творите будущее',
        ['Так что не забывайте смотреть не только под ноги, но и на звезды. Старайтесь искать смысл в том, что вы видите, и думать о том, как и почему существует Вселенная. Будьте любознательны. Какой бы трудной ни казалась жизнь, вы всегда можете что-то сделать и чего-то добиться. Главное – никогда не сдаваться. Дайте волю воображению. Творите будущее.']
    ),
    'psad51sso': new Book(
        'psad51sso',
        'Метро 2035',
        'Дмитрий Глуховский',
        null,
        new Date(2019, 11, 8),
        'Хоть и умереть, но наверху',
        ['А как нашим человеком еще управлять? Его все время отвлекать надо. Обуздывать. Канализировать, так сказать. Идею ему подкладывать какую-нибудь. Религию или идеологию. Врагов ему придумывать все время. Не живется ему без врагов! Он без врагов теряется! Не может себя сам определить. Ничего про себя не знает.']
    )
}

export default db;