// api key  from TMDB 
const api = "api_key=9c01bc51e3095c9d889d05989bec36d1";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// sjanger id
// {"genres":[{"id":28,"name":"Action"},
// {"id":12,"name":"Adventure"},
// // {"id":16,"name":"Animation"},
// {"id":35,"name":"Comedy"},
// {"id":80,"name":"Crime"},
// // {"id":99,"name":"Documentary"},
// {"id":18,"name":"Drama"},
// {"id":10751,"name":"Family"},
// // {"id":14,"name":"Fantasy"},
// {"id":36,"name":"History"},
// {"id":27,"name":"Horror"},
// // {"id":10402,"name":"Music"},
// {"id":9648,"name":"Mystery"},
// {"id":10749,"name":"Romance"},
// // {"id":878,"name":"Science Fiction"},
// {"id":10770,"name":"TV Movie"},
// {"id":53,"name":"Thriller"},
// // {"id":10752,"name":"War"},
// {"id":37,"name":"Western"}]}

// requests for movies data 
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=NO&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies2: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`,
    fetchActionMovies3: `${base_url}/discover/movie?${api}&with_genres=12&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies4: `${base_url}/discover/movie?${api}&with_genres=16&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies5: `${base_url}/discover/movie?${api}&with_genres=35&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies6: `${base_url}/discover/movie?${api}&with_genres=80&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies7: `${base_url}/discover/movie?${api}&with_genres=99&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies8: `${base_url}/discover/movie?${api}&with_genres=18&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies9: `${base_url}/discover/movie?${api}&with_genres=10751&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies10: `${base_url}/discover/movie?${api}&with_genres=14&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies11: `${base_url}/discover/movie?${api}&with_genres=36&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies12: `${base_url}/discover/movie?${api}&with_genres=27&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies13: `${base_url}/discover/movie?${api}&with_genres=10402&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies14: `${base_url}/discover/movie?${api}&with_genres=9648&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies15: `${base_url}/discover/movie?${api}&with_genres=10749&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies16: `${base_url}/discover/movie?${api}&with_genres=878&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies17: `${base_url}/discover/movie?${api}&with_genres=10770&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies18: `${base_url}/discover/movie?${api}&with_genres=53&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies19: `${base_url}/discover/movie?${api}&with_genres=10752&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies20: `${base_url}/discover/movie?${api}&with_genres=37&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
    fetchMovies: `${base_url}/genre/movie/list?${api}&language=en-US`,
};
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function random() {
    let html = `
    ${showmeny()}
    <center>
        <h1> Velkommen ${model.app.currentuser}!</h1>
        <h3> Trykk på hjulet for å finne en tilfeldig film / serie </h3>
        <img src="spinning-shit.png" class="spinner" onclick = "random()"> 
        <br><br>
        <!-- banner -->
    <header id="banner">
        <div id="banner__contents">
            <h1 id="banner__title"></h1>
            <div id="banner__buttons">
                <button id="banner__button">Play</button>
                <button id="banner__button" onclick="addFavoritt()">&#10084;</button>
            </div>
            <p id="banner__description"></p>
        </div>
        <div id="banner__fadeBottom"></div>
    </header>
        </center>
        <div class="rand" id="random"></div>
    `;

    fetch(requests.fetchPopular)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.results);
            // every refresh the movie will be change
            const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
            console.log(setMovie);
            var banner = document.getElementById("banner");
            var banner_title = document.getElementById("banner__title");
            var banner__desc = document.getElementById("banner__description");
            banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
            banner__desc.innerText = truncate(setMovie.overview, 200);
            banner_title.innerText = setMovie.original_title;
        })
    appDiv.innerHTML = html;
}

function refresh() {
    window.location.reload("Refresh")
}

function movie() {
    let html = ``;
    html += `
    ${showmeny()}
    <h1> Filmer </h1>
    <!-- row -->
    <div id="headrow">
    <div class="row">
    <h2 class="row__title"></h2>
    <div class="row__posters">
    <h3 class="movie_title"></h3>
    </div>
    </div>
    </div>
    `;

    fetch(requests.fetchActionMovies)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });

    fetch(requests.fetchActionMovies2)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies3)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies4)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies5)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies6)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies7)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies8)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies9)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });
    fetch(requests.fetchActionMovies10)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });

    appDiv.innerHTML = html;
}

function series() {
    let html = `
    ${showmeny()}
    <h1> Serier </h1>
    <!-- row -->
    <div id="headrow">
    <div class="row">
    <h2 class="row__title"></h2>
    <div class="row__posters">
    <h3 class="movie_title"></h3>
    </div>
    </div>
    </div>
    `;

    fetch(requests.fetchNetflixOrignals)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });



    appDiv.innerHTML = html;
}