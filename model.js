const model = {
    // tilstand app
    app: {
        innhold: '',
        currentpage: "Film Velger",
        currentuser: "Benjamin",
        antallFavoritter: 0,
        antallHidet: 0,
    },
    // inputs til hver side
    inputs: {
        // inputs til startside
        startpage: {
            login: "",
            pwd: "",
        },
        // inputs favoritter
        favoritter: [],
        // inputs til uønsket
        hide: [],
        // inputs til random
        random: [],
        // bilde
        bilde: [],

    },

    //data

    users: [
        { name: "Benjamin", pwd: "Benjamin" },
    ],

    categories: [
        {
            action: [],
            komedie: [],
            romantikk: [],
            skrekk: [],
            scifi: [],
            krim: [],
            thriller: [],
            drama: [],
            fantasy: [],


        }
    ],

    /* subCategories: [
         {}
     ],
 */
    movies: [
        {
            id: 1,
            title: 'Spiderman (2002)',
            Netflix: 'https://www.netflix.com/watch/60004481?source=35',
            Viaplay: 'https://viaplay.no/watching?path=%2Ffilmer%2Fspider-man-2002',
            picture: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg',
        },
        {
            id: 2,
            title: 'Amazing spiderman',
            Viaplay: 'https://viaplay.no/watching?path=%2Fstore%2Fthe-amazing-spider-man-2012',
            Netflix: 'https://www.netflix.com/watch/70208599?source=35',
            picture: 'https://musicart.xboxlive.com/7/66241200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        },
    ],

    series: [
        {
            id: 1,
            title: 'The mentalist season 1',
            Blockbuster: 'https://blockbuster.no/tv-serier/the-mentalist',
            picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/The_Mentalist_-_The_Complete_1st_Season.jpg/220px-The_Mentalist_-_The_Complete_1st_Season.jpg',
        },
        {
            id: 2,
            title: 'The mentalist season 2',
            Blockbuster: 'https://blockbuster.no/tv-serier/the-mentalist',
            picture: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Mentalist_-_The_Complete_2nd_Season.jpg',
        },
    ],




};
