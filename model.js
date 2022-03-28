
const model = {
    // tilstand app

    app: {
        innhold: '',
        currentpage: "Film Velger",
        currentuser: "Benjamin",
        currentepost: "epost@.no",
        antallFavoritter: 0,
        favOs: [],
        antallHidet: 0,
        hide: [],

    },
    // inputs til hver side
    inputs: {
        // inputs til startside
        startpage: {
            login: "",
            pwd: "",
        },
        inputDropdown: "Action",


    },

    //data

    users: [
        { id: 1, name: "Benjamin", pwd: "Benjamin", },
    ],

    categories: [
        { categoryName: "Action", underCategory1: "Action-komedi", underCategory2: "Action-drama", categoryId: 1 },
        { categoryName: "Komedie", categoryId: 2 },
        { categoryName: "Romantikk", categoryId: 3 },
        { categoryName: "Skrekk", categoryId: 4 },
        { categoryName: "Scifi", categoryId: 5 },
        { categoryName: "Krim", categoryId: 6 },
        { categoryName: "Thriller", categoryId: 7 },
        { categoryName: "Drama", categoryId: 8 },
        { categoryName: "Fantasy", categoryId: 9 },
        { categoryName: "Dokumentar", categoryId: 10 },

    ],
    hiddenMovies: [
        { userId: 1, listOfHiddenMovies: [1, 2] },
    ],
    favoritter: [
        { userId: 1, listOfFavoritter: [1, 2] },
    ],

    movies: [
        {
            id: 1,
            categoryId: [1, 2],
            title: 'Spiderman (2002)',
            Netflix: 'https://www.netflix.com/watch/60004481?source=35',
            Viaplay: 'https://viaplay.no/watching?path=%2Ffilmer%2Fspider-man-2002',
            picture: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Spider-Man2002Poster.jpg',
        },
        {
            id: 2,
            title: 'Amazing spiderman (2012)',
            Viaplay: 'https://viaplay.no/watching?path=%2Fstore%2Fthe-amazing-spider-man-2012',
            Netflix: 'https://www.netflix.com/watch/70208599?source=35',
            picture: 'https://musicart.xboxlive.com/7/66241200-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
        },
        {
            id: 3,
            categoryId: [7, 8],
            title: ' The Irishman (2019)',
            Netflix: 'https://www.netflix.com/no-en/title/80175798',
            picture: 'https://img.reelgood.com/content/movie/3fd8039c-d96c-4461-b74a-81176d354369/poster-342.webp',
        },
        {
            id: 4,
            categoryId: [1, 8],
            title: ' Dangal (2016)',
            Netflix: 'https://www.netflix.com/no-en/title/80166185',
            picture: 'https://img.reelgood.com/content/movie/bb9fd0a5-f53e-4496-bd29-3d1d8841ac06/poster-780.webp',
        },
        {
            id: 5,
            categoryId: [1, 6, 8],
            title: ' The Dark Knight (2008)',
            Netflix: 'https://www.netflix.com/title/70079583',
            picture: 'https://img.reelgood.com/content/movie/d6822b7b-48bb-4b78-ad5e-9ba04c517ec8/poster-780.webp',
        },
        {
            id: 6,
            categoryId: [6, 8],
            title: ' The Shawshank Redemption (1994)',
            Netflix: 'https://www.netflix.com/title/70005379',
            picture: 'https://img.reelgood.com/content/movie/900bc451-e61f-48db-96c7-32b6635a3f75/poster-780.webp',
        },
        {
            id: 7,
            categoryId: [2, 3],
            title: " To All the Boys I've Loved Before(2018)",
            Netflix: 'https://www.netflix.com/no-en/title/802031470',
            picture: 'https://img.reelgood.com/content/movie/4acf4872-4ef9-49ab-a0f5-38de5320293b/poster-780.webp',
        },
        {
            id: 8,
            categoryId: [1, 5, 8],
            title: ' Okja (2017)',
            Netflix: 'https://www.netflix.com/no-en/title/80091936',
            picture: 'https://img.reelgood.com/content/movie/5c6eaf8d-51cf-43e3-a719-c92ab17a8b4c/poster-780.webp',
        },
        {
            id: 9,
            categoryId: [8],
            title: " Winter on Fire: Ukraine's Fight for Freedom(2015)",
            Netflix: 'https://www.netflix.com/no-en/title/80031666',
            picture: 'https://img.reelgood.com/content/movie/fe82fcad-2a49-4693-88b0-4a9409e6093a/poster-780.webp',
        },
        {
            id: 10,
            categoryId: [2, 8],
            title: ' The Ballad of Buster Scruggs (2018)',
            Netflix: 'https://www.netflix.com/no-en/title/80200267',
            picture: 'https://img.reelgood.com/content/movie/95b8725b-99cb-4a40-81ec-e8291e107845/poster-780.webp',
        },
        {
            id: 11,
            categoryId: [7, 8],
            title: " The Trial of the Chicago 7 (2020)",
            Netflix: 'https://www.netflix.com/no-en/title/81043755',
            picture: 'https://img.reelgood.com/content/movie/81c90bc7-e0c0-4f9d-baf4-4d0805978559/poster-780.webp',
        },
        {
            id: 12,
            categoryId: [8],
            title: " Mudbound (2017) ",
            Netflix: 'https://www.netflix.com/no-en/title/80175694',
            picture: 'https://img.reelgood.com/content/movie/709a5390-0573-41ae-bb27-2e47c4b6ae36/poster-780.webp',
        },
        {
            id: 13,
            categoryId: [10],
            title: " Fyre (2019)",
            Netflix: 'https://www.netflix.com/no-en/title/81035279',
            picture: 'https://img.reelgood.com/content/movie/581e8a50-7bd3-44ed-888e-3de46a90270b/poster-780.webp',
        },
        {
            id: 14,
            categoryId: [10],
            title: " Virunga (2014)",
            Netflix: 'https://www.netflix.com/no-en/title/80009431',
            picture: 'https://img.reelgood.com/content/movie/fd354729-276b-43df-abb8-79a5bef58016/poster-780.webp',
        },
        {
            id: 15,
            categoryId: [7, 8],
            title: " The Platform (2019)",
            Netflix: 'https://www.netflix.com/no-en/title/81128579',
            picture: 'https://img.reelgood.com/content/movie/c1380796-003e-4770-bc78-5dd6a42a8fbf/poster-780.webp',
        },
        {
            id: 16,
            categoryId: [8],
            title: " Django Unchained (2012)",
            Netflix: 'https://www.netflix.com/no-en/title/70230640',
            picture: 'https://img.reelgood.com/content/movie/d4f90bf6-4d74-42a9-aba8-39a205a0e0b6/poster-780.webp',
        },
        {
            id: 17,
            categoryId: [2, 10],
            title: "Jim & Andy: The Great Beyond- Featuring a Very Special, Contractually Obligated Mention of Tony Clifton (2017)",
            Netflix: 'https://www.netflix.com/no-en/title/80209608',
            picture: 'https://img.reelgood.com/content/movie/e353c93b-78cd-4890-9456-c1c6f45600bf/poster-780.webp',
        },
        {
            id: 18,
            categoryId: [1, 7, 8],
            title: "Léon: The Professional (1994)",
            Netflix: 'https://www.netflix.com/no-en/title/7880857',
            picture: 'https://img.reelgood.com/content/movie/86ca05e0-4d59-4864-b95b-905659df4a25/poster-780.webp',
        },
        {
            id: 19,
            categoryId: [6, 8],
            title: "Black Friday (2004)",
            Netflix: 'https://www.netflix.com/no-en/title/70077720',
            picture: 'https://img.reelgood.com/content/movie/f6846cf0-8487-4df2-8fc8-0665fa1523f9/poster-780.webp',
        },
        {
            id: 20,
            categoryId: [6, 8],
            title: "The Green Mile (1999)",
            Netflix: 'https://www.netflix.com/title/60000417',
            picture: 'https://img.reelgood.com/content/movie/c0feaf4b-6d45-49fd-8697-53e283c7267b/poster-780.webp',
        },
        {
            id: 21,
            categoryId: [1, 6],
            title: "Batman Begins (2005)",
            Netflix: 'https://www.netflix.com/title/70021642',
            picture: 'https://img.reelgood.com/content/movie/8de5e9be-ec40-4687-9b01-be1af3ace1d7/poster-780.webp',
        },
        {
            id: 22,
            categoryId: [8],
            title: " The Boy Who Harnessed the Wind (2019)",
            Netflix: 'https://www.netflix.com/no-en/title/80200047',
            picture: 'https://img.reelgood.com/content/movie/11a73b1f-c936-4801-b208-59351bedca09/poster-780.webp',
        },
        {
            id: 23,
            categoryId: [1],
            title: "Baby Driver (2017)",
            Netflix: 'https://www.netflix.com/no-en/title/80142090',
            picture: 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_FMjpg_UX1000_.jpg',
        },
        {
            id: 24,
            categoryId: [1],
            title: "Baby Driver (2017)",
            Netflix: 'https://www.netflix.com/no-en/title/80142090',
            picture: 'https://m.media-amazon.com/images/M/MV5BMjM3MjQ1MzkxNl5BMl5BanBnXkFtZTgwODk1ODgyMjI@._V1_FMjpg_UX1000_.jpg',
        },


    ],

    series: [
        {
            id: 1,
            title: 'The Mentalist Season 1',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/The_Mentalist_-_The_Complete_1st_Season.jpg/220px-The_Mentalist_-_The_Complete_1st_Season.jpg',
        },
        {
            id: 2,
            title: 'The Mentalist Season 2',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/7/7a/The_Mentalist_-_The_Complete_2nd_Season.jpg',
        },
        {
            id: 3,
            title: 'The Mentalist Season 3',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/3/35/The_Mentalist_-_The_Complete_3rd_Season.jpg',
        },
        {
            id: 4,
            title: 'The Mentalist Season 4',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/0/03/The_Mentalist_-_The_Complete_4th_Season.jpg',
        },
        {
            id: 5,
            title: 'The Mentalist Season 5',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/2/2c/The_Mentalist_-_The_Complete_5th_Season.jpg',
        },
        {
            id: 6,
            title: 'The Mentalist Season 6',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/f/f6/The_Mentalist_-_The_Complete_6th_Season.jpg',
        },
        {
            id: 7,
            title: 'The Mentalist Season 7',
            hbo: 'https://play.hbomax.com/page/urn:hbo:page:GYCVhjQCBs6KfnwEAAAAL:type:series',
            picture: 'https://upload.wikimedia.org/wikipedia/en/f/f4/The_Mentalist_-_The_7th_and_Final_Season.jpg',
        },
    ],




};