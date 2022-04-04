function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

function random() {
    let html = `
    ${showmeny()}
    <br>
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
                <button id="banner__button" onclick="addTilfeldig()">&#10084;</button>
            </div>
            <p id="banner__description"></p>
            <p id="banner__link"></p>
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
            var banner__link = document.getElementById("banner__link");
            banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
            banner__desc.innerText = truncate(setMovie.overview, 200);
            banner_title.innerText = setMovie.original_title;
            banner__link.innerText = setMovie.id;
            console.log(setMovie.original_title);
            return setMovie.original_title;
        })
    appDiv.innerHTML = html;
}
