function icon() {
    document.body.classList.toggle("dark-theme")
}


//Funksjon som legger til favoritt serie
function addSerie(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.series[index].title);
    model.app.favPics.push(model.series[index].picture);
    model.app.netflixLinker.push(model.series[index].Netflix);
    model.app.hboLinker.push(model.series[index].hbo);
    model.app.viaplayLinker.push(model.series[index].Viaplay);
    series();
}
//Funksjon som legger til favoritt film
function addFavoritt(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    model.app.favPics.push(model.movies[index].picture);
    model.app.netflixLinker.push(model.movies[index].Netflix);
    model.app.hboLinker.push(model.movies[index].hbo);
    model.app.viaplayLinker.push(model.movies[index].Viaplay);
    movie();
}
//Funksjon som legger til favoritt random
function addTilfeldig(index) {
    if (model.app.favOs.includes(model.movies[index].title) == true) return
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    model.app.favPics.push(model.movies[index].picture);
    model.app.netflixLinker.push(model.movies[index].Netflix);
    model.app.hboLinker.push(model.movies[index].hbo);
    model.app.viaplayLinker.push(model.movies[index].Viaplay);
    alert("Adda til fav xoxo")
}
//Funksjon som skjuler film
function hideMovie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    model.app.hidePics.push(model.movies[index].picture);
    model.movies.splice(index, 1);
    movie();
}
//Funksjon som skjuler serie
function hideSerie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.series[index].title);
    model.app.favPics.push(model.series[index].picture);
    model.series.splice(index, 1);
    series();
}
//Funksjon som skjuler random
function hideRandom(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    random();
}
//Funksjon som fjerner favoritter
function slett(index) {
    model.app.favOs.splice(index, 1);
    model.app.favPics.splice(index, 1);
    model.app.netflixLinker.splice(index, 1);
    model.app.hboLinker.splice(index, 1);
    model.app.viaplayLinker.splice(index, 1);
    model.app.antallFavoritter--;
    favs();

}
//Funksjon som gjennoppretter skjult innhold
function gjennopprett(index) {
    model.app.antallHidet--;
    model.app.hide.splice(index, 1);
    skjult();

}
// Div funksjoner
function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("random")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
}


//Show / Hide Pwd på minside
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

let activeIds = [1, 2]
let serviceList = [{
    "id": 201,
    "title": "a"
},
{
    "id": 202,
    "title": "a"
},
{
    "id": 203,
    "title": "c"
},
{
    "id": 204,
    "title": "d"
},
{
    "id": 205,
    "title": "e"
},
{
    "id": 1,
    "title": "Spoderman"
}];



function spin() {
    let random = Math.floor(Math.random() * model.movies.length);
    let displayMovie = ""
    displayMovie = `
    <center>
    <h2>${model.movies[random].title}</h2>
    <img class="bilde2" src="${model.movies[random].picture}"</img>
    <br>
    <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${model.movies[random].id - 1})">
    <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
    <br>
    ${Netflix = model.movies[random].Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.movies[random].Netflix}');">` : ''}
    ${hbo = model.movies[random].hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.movies[random].hbo}');">` : ''}
    ${viaplay = model.movies[random].viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.movies[random].viaplay}');">` : ''}
    <br>
    <br>
    ${youtube = model.movies[random].youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.movies[random].youtube}');">` : ''}
    ${googleplay = model.movies[random].googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.movies[random].googleplay}');">` : ''}
    ${appleTV = model.movies[random].appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.movies[random].appletv}');">` : ''}
    ${amazon = model.movies[random].amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.movies[random].amazon}');">` : ''}
    ${tv2 = model.movies[random].tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.movies[random].tv2}');">` : ''}
    ${disney = model.movies[random].disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.movies[random].disney}');">` : ''}
    ${discovery = model.movies[random].discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${model.movies[random].discovery}');">` : ''}
    </center>

    `;

    html = `
    ${showmeny()}
    <center>
    <h3> Trykk på hjulet for å finne en tilfeldig film</h3>
    <img src="spinning-shit.png" class="spinner" onclick = "spin()">
    <br><br>
    </center>
    ${displayMovie}
    `;

    Covid.innerHTML = html;
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function spin2() {
    let random = Math.floor(Math.random() * model.series.length);
    let displaySerie = ""
    displaySerie = `
    <center>
    <h2>${model.series[random].title}</h2>
    <img class="bilde2" src="${model.series[random].picture}"</img>
    <br>
    <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${model.series[random].id - 1})">
    <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${model.series[random].id - 1})">
    <br>
    ${Netflix = model.series[random].Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.series[random].Netflix}');">` : ''}
    ${hbo = model.series[random].hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.series[random].hbo}');">` : ''}
    ${viaplay = model.series[random].viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.series[random].viaplay}');">` : ''}
    <br>
    <br>
    ${youtube = model.series[random].youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.series[random].youtube}');">` : ''}
    ${googleplay = model.series[random].googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.series[random].googleplay}');">` : ''}
    ${appleTV = model.series[random].appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.series[random].appletv}');">` : ''}
    ${amazon = model.series[random].amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.series[random].amazon}');">` : ''}
    ${tv2 = model.series[random].tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.series[random].tv2}');">` : ''}
    ${disney = model.series[random].disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.series[random].disney}');">` : ''}
    ${discovery = model.series[random].discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${model.series[random].discovery}');">` : ''}
    </center>

    `;

    html = `
    ${showmeny()}
    <center>
    <h3> Trykk på hjulet for å finne en tilfeldig serie</h3>
    <img src="spinning-shit.png" class="spinner" onclick = "spin2()">
    <br><br>
    </center>
    ${displaySerie}
    `;

    Covid.innerHTML = html;
}

