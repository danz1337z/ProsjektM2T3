
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
        { categoryName: "Action", categoryId: 1 },
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
    undercategories: [
        { categoryName: "Action", underCategory: "Action-Komedie", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Drama", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Fantasy", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Romantikk", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Skrekk", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Scifi", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Krim", categoryId: 1 },
        { categoryName: "Action", underCategory: "Action-Thriller", categoryId: 1 },
    ],
    undercategories2: [
        { categoryName: "Komedie", underCategory: "Komedie-Komedie", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Drama", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Fantasy", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Romantikk", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Skrekk", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Scifi", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Krim", categoryId: 2 },
        { categoryName: "Komedie", underCategory: "Komedie-Thriller", categoryId: 2 },
    ],
    undercategories3: [
        { categoryName: "Romantikk", underCategory: "Romantikk-Komedie", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Drama", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Fantasy", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Romantikk", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Skrekk", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Scifi", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Krim", categoryId: 3 },
        { categoryName: "Romantikk", underCategory: "Romantikk-Thriller", categoryId: 3 },
    ],
    undercategories4: [
        { categoryName: "Skrekk", underCategory: "Skrekk-Komedie", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Drama", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Fantasy", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Romantikk", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Skrekk", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Scifi", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Krim", categoryId: 4 },
        { categoryName: "Skrekk", underCategory: "Skrekk-Thriller", categoryId: 4 },
    ],
    undercategories5: [
        { categoryName: "Scifi", underCategory: "Scifi-Komedie", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Drama", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Fantasy", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Romantikk", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Skrekk", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Scifi", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Krim", categoryId: 5 },
        { categoryName: "Scifi", underCategory: "Scifi-Thriller", categoryId: 5 },
    ],
    undercategories6: [
        { categoryName: "Krim", underCategory: "Krim-Komedie", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Drama", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Fantasy", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Romantikk", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Skrekk", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Scifi", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Thriller", categoryId: 6 },
        { categoryName: "Krim", underCategory: "Krim-Thriller", categoryId: 6 },

    ],
    undercategories7: [
        { categoryName: "Thriller", underCategory: "Thriller-Komedie", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Drama", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Fantasy", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Romantikk", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Skrekk", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Scifi", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Thriller", categoryId: 7 },
        { categoryName: "Thriller", underCategory: "Thriller-Thriller", categoryId: 7 },
    ],
    undercategories8: [
        { categoryName: "Drama", underCategory: "Drama-Komedie", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Drama", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Fantasy", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Romantikk", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Skrekk", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Scifi", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Thriller", categoryId: 8 },
        { categoryName: "Drama", underCategory: "Drama-Thriller", categoryId: 8 },

    ],
    undercategories9: [
        { categoryName: "Fantasy", underCategory: "Fantasy-Komedie", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Drama", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Fantasy", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Romantikk", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Skrekk", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Scifi", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Thriller", categoryId: 9 },
        { categoryName: "Fantasy", underCategory: "Fantasy-Thriller", categoryId: 9 },

    ],
    undercategories10: [
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Komedie", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Drama", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Fantasy", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Romantikk", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Skrekk", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Scifi", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Thriller", categoryId: 10 },
        { categoryName: "Dokumentar", underCategory: "Dokumentar-Thriller", categoryId: 10 },

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
            title: "Man On Fire (2004)",
            Netflix: 'https://www.netflix.com/no-en/title/60034560',
            picture: 'https://img.reelgood.com/content/movie/cb888f28-75ae-4af0-97d5-d37f8867d036/poster-780.webp',
        },
        {
            id: 25,
            categoryId: [1],
            title: "Colombiana (2011)",
            Netflix: 'https://www.netflix.com/no-en/title/70178640',
            picture: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSBXOsHe0nLGrX8UBiUjv1rYXDW9A4viuyB7eDhRgitfY2mvETD',
        },
        {
            id: 26,
            categoryId: [1],
            title: "The Adam Project (2022)",
            Netflix: 'https://www.netflix.com/no-en/title/81309354',
            picture: 'https://img.reelgood.com/content/movie/bb7a0795-1e7d-4ded-9254-e8f07c0ef0dd/poster-780.webp',
        },
        {
            id: 27,
            categoryId: [1],
            title: "The Italian Job (2003)",
            Netflix: 'https://www.netflix.com/no-en/title/60027706',
            picture: 'https://img.reelgood.com/content/movie/e469bf99-2961-46a4-88a9-d56890509f6b/poster-780.webp',
        },
        {
            id: 28,
            categoryId: [1],
            title: "Kill Bill: Vol. 1 (2003)",
            Netflix: 'https://www.netflix.com/no-en/title/60031236',
            picture: 'https://img.reelgood.com/content/movie/459663e3-b56f-457c-89a2-591274f6e491/poster-780.webp',
        },
        {
            id: 29,
            categoryId: [1],
            title: "Kill Bill: Vol. 2 (2004)",
            Netflix: 'https://www.netflix.com/no-en/title/60032563',
            picture: 'https://img.reelgood.com/content/movie/49f3fc3b-d934-4640-bae0-85f54e881732/poster-780.webp',
        },
        {
            id: 30,
            categoryId: [1],
            title: "The Marksman (2021)",
            Netflix: 'https://www.netflix.com/no-en/title/81404853',
            picture: 'https://img.reelgood.com/content/movie/0cf7439d-d0fa-41db-ae7a-aa78a3eb0e70/poster-780.webp',
        },
        {
            id: 31,
            categoryId: [1],
            title: "Irresistible (2020)",
            Netflix: 'https://www.netflix.com/no-en/title/81249604',
            picture: 'https://img.reelgood.com/content/movie/406bc309-727e-4437-8e06-b00b156b7517/poster-780.webp',
        },
        {
            id: 32,
            categoryId: [1],
            title: "Boulevard des assassins (1982)",
            Netflix: 'https://www.netflix.com/no-en/title/81441754',
            picture: 'https://img.reelgood.com/content/movie/56d55a30-29ef-4bc9-8d62-030925b64deb/poster-780.webp',
        },
        {
            id: 33,
            categoryId: [1],
            title: "Crash Pad (2017)",
            Netflix: 'https://www.netflix.com/no-en/title/80211995',
            picture: 'https://img.reelgood.com/content/movie/96974c0b-df1a-4fdb-97fc-9964daf3b6ea/poster-780.webp',
        },
        {
            id: 34,
            categoryId: [1],
            title: "le chanteur de mexico (1965)",
            Netflix: 'https://www.netflix.com/no-en/title/81409353',
            picture: 'https://m.media-amazon.com/images/M/MV5BZWQ4NDZmNzgtYzZjYy00YjcyLTgwOGUtYmJhZDJmYmRhODc4XkEyXkFqcGdeQXVyNTcyMjMxMDA@._V1_.jpg',
        },
        {
            id: 35,
            categoryId: [1],
            title: "Flying Scot (1958)",
            Netflix: 'https://www.netflix.com/no-en/title/81409424',
            picture: 'https://upload.wikimedia.org/wikipedia/en/1/1e/%22The_Flying_Scot%22_%281957%29.jpg',
        },
        {
            id: 36,
            categoryId: [1],
            title: "French Fried Vacation 3 (2006)",
            Netflix: 'https://www.netflix.com/no-en/title/81409340',
            picture: 'https://img.reelgood.com/content/movie/340aafc0-80ad-4a7f-98fc-936b26fc98f3/poster-780.webp',
        },
        {
            id: 37,
            categoryId: [1],
            title: "It's Great to Be Young (1956)",
            Netflix: 'https://www.netflix.com/no-en/title/81409563',
            picture: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRft0RhfJz7jx807Ak1_D2nya4R6PzrMw2nUEILKPBu9dJYHCNT',
        },
        {
            id: 38,
            categoryId: [1],
            title: "Je veux tout (1999)",
            Netflix: 'https://www.netflix.com/no-en/title/81441803',
            picture: 'https://img.reelgood.com/content/movie/8019cec5-1b62-426b-a9e5-71cfee5a89ed/poster-780.webp',
        },
        {
            id: 39,
            categoryId: [1],
            title: "Le capitaine Fracasse (1943)",
            Netflix: 'https://www.netflix.com/no-en/title/81409356',
            picture: 'https://m.media-amazon.com/images/M/MV5BYTQxNjEyZmEtYjdkNi00NzMwLWI2MTgtMzk5YzRiZjNhZjIwXkEyXkFqcGdeQXVyMzI5NDcxNzI@._V1_FMjpg_UX1000_.jpg',
        },
        {
            id: 40,
            categoryId: [1],
            title: "Max og Léons spinnville reise (2016)",
            Netflix: 'https://www.netflix.com/no-en/title/81409217',
            picture: 'https://img.reelgood.com/content/movie/53a6d06c-4854-4f60-8fd9-45a4c3a24c1a/poster-780.webp',
        },
        {
            id: 41,
            categoryId: [1],
            title: "Mon Ami Le Traitre (1988)",
            Netflix: 'https://www.netflix.com/no-en/title/81409510',
            picture: 'https://pics.filmaffinity.com/mon_ami_le_traitre-510188047-large.jpg',
        },
        {
            id: 42,
            categoryId: [6, 8],
            title: " Windfall (2022)",
            Netflix: 'https://www.netflix.com/no-en/title/81483895',
            picture: 'https://img.reelgood.com/content/movie/0a2bb0a6-f0db-4164-b286-2a88370b6ef1/poster-780.webp',
        },
        {
            id: 50,
            categoryId: [5, 8],
            title: " Blade Runner 2049 (2017)",
            Netflix: 'https://www.netflix.com/title/80185760',
            primeVideo: 'https://www.amazon.com/gp/video/detail/amzn1.dv.gti.34af74ff-1897-37c0-1a65-a705f4eab2b3?tag=reelgood060d-20',

            picture: 'https://img.reelgood.com/content/movie/433166eb-9404-44c2-b749-8b5d2a1e580a/poster-780.webp',
        },
        {
            id: 43,
            categoryId: [1, 2],
            title: " Shrek 2 (2004)",
            Netflix: 'https://www.netflix.com/no-en/title/60034572',
            picture: 'https://img.reelgood.com/content/movie/34cacd51-cd68-4cfd-8f1c-4fec873f6313/poster-780.webp',
        },
        {
            id: 44,
            categoryId: [],
            title: " ",
            Netflix: 'https://www.netflix.com/no-en/title/70301344',
            picture: '',
        },
        {
            id: 45,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 46,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 47,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 48,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 49,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 51,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
        },
        {
            id: 52,
            categoryId: [],
            title: " ",
            Netflix: '',
            picture: '',
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