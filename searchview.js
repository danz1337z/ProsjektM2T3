function search() {
    let html = /*html*/`
    ${showmeny()}
    <center>
    <h4>Søkeresultater:</h4>
    </center>
    <ul>
    ${grandioseTanker()}
    ${grandiosaTanker()}
    </ul>

   

`;
    Covid.innerHTML = html;
}

let Netflix = '';
let hbo = '';
let viaplay = '';
let youtube = '';
let googleplay = '';
let appleTv = '';
let amazon = '';


function grandioseTanker() {
    let html = '';
    let movies = model.movies;

    const searchText = model.search.text;
    if (searchText !== '') {
        movies = filterInnhold(searchText, movies);
    }
    for (let i = 0; i < movies.length; i++) {
        const resultat = movies[i];
        html += /*html*/`
            <li>${resultat.title} </li>
            <hr>
        `;
    }


    return html;
    Covid.innerHTML = html;
}

function filterInnhold(searchText, movies) {
    searchText = searchText.toLowerCase();
    let filteredList = [];
    for (let resultat of movies) {
        const title = resultat.title.toLowerCase();
        const Netflix = resultat.Netflix.toLowerCase();
        if (title.indexOf(searchText) != -1
            || Netflix.indexOf(searchText) != -1) {
            filteredList.push(resultat);
        }
    }
    return filteredList;

}

function grandiosaTanker() {
    let html = '';
    let series = model.series;

    const searchText = model.search.text;
    if (searchText !== '') {
        series = filterInnhold(searchText, series);
    }
    for (let i = 0; i < series.length; i++) {
        const resultat = series[i];
        html += /*html*/`
            <li>${resultat.title} ${resultat.Netflix}</li>
            <hr>
        `;
    }


    return html;
    Covid.innerHTML = html;
}

function filterInnhold(searchText, series) {
    searchText = searchText.toLowerCase();
    let filteredList = [];
    for (let resultat of series) {
        const title = resultat.title.toLowerCase();
        const Netflix = resultat.Netflix.toLowerCase();
        if (title.indexOf(searchText) != -1
            || Netflix.indexOf(searchText) != -1) {
            filteredList.push(resultat);
        }
    }
    return filteredList;

}
