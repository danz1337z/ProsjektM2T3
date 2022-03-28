// api key  from TMDB 
const api = "api_key=9c01bc51e3095c9d889d05989bec36d1";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=NO&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
    fetchActionMovies2: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`,
    fetchActionMovies3: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=3&with_watch_monetization_types=flatrate`,
    fetchActionMovies4: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=4&with_watch_monetization_types=flatrate`,
    fetchActionMovies5: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate`,
    fetchActionMovies6: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=6&with_watch_monetization_types=flatrate`,
    fetchActionMovies7: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=7&with_watch_monetization_types=flatrate`,
    fetchActionMovies8: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=8&with_watch_monetization_types=flatrate`,
    fetchActionMovies9: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=9&with_watch_monetization_types=flatrate`,
    fetchActionMovies10: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=10&with_watch_monetization_types=flatrate`,
    fetchActionMovies11: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=11&with_watch_monetization_types=flatrate`,
    fetchActionMovies12: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=12&with_watch_monetization_types=flatrate`,
    fetchActionMovies13: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=13&with_watch_monetization_types=flatrate`,
    fetchActionMovies14: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=14&with_watch_monetization_types=flatrate`,
    fetchActionMovies15: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=15&with_watch_monetization_types=flatrate`,
    fetchActionMovies16: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=16&with_watch_monetization_types=flatrate`,
    fetchActionMovies17: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=17&with_watch_monetization_types=flatrate`,
    fetchActionMovies18: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=18&with_watch_monetization_types=flatrate`,
    fetchActionMovies19: `${base_url}/discover/movie?${api}&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=19&with_watch_monetization_types=flatrate`,
    fetchActionMovies20: `${base_url}/discover/movie?${api}&with_genres=28&with_genres=28&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=20&with_watch_monetization_types=flatrate`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchMovies: `${base_url}/genre/movie/list?${api}&language=en-US`,
};
// used to truncate the string 
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchActionMovies)
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
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.original_title;
    })

// top rated 
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        const headrow = document.getElementById("headrow");
        const row = document.createElement("div");
        row.className = "row";
        headrow.appendChild(row);
        const title = document.createElement("h2");
        title.className = "row__title";
        title.innerText = "Action Movies";
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
fetch(requests.fetchActionMovies11)
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
fetch(requests.fetchActionMovies12)
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
fetch(requests.fetchActionMovies13)
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
fetch(requests.fetchActionMovies14)
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
fetch(requests.fetchActionMovies15)
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
fetch(requests.fetchActionMovies16)
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
fetch(requests.fetchActionMovies17)
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
fetch(requests.fetchActionMovies18)
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
fetch(requests.fetchActionMovies19)
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
fetch(requests.fetchActionMovies20)
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

function refresh() {
    window.location.reload("Refresh")
}