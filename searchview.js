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
let tv2 = '';
let disney = '';
let discovery = '';


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
            <li>${resultat.title} </li><br>
            <img class="bilde" src="${resultat.picture}">
            ${Netflix = resultat.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${resultat.Netflix}');">` : ''}
            ${hbo = resultat.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${resultat.hbo}');">` : ''}
            ${viaplay = resultat.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${resultat.viaplay}');">` : ''}
            ${youtube = resultat.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${resultat.youtube}');">` : ''}
            ${googleplay = resultat.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${resultat.googleplay}');">` : ''}
            ${appleTV = resultat.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${resultat.appletv}');">` : ''}
            ${amazon = resultat.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${resultat.amazon}');">` : ''}
            ${tv2 = resultat.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${resultat.tv2}');">` : ''}
            ${disney = resultat.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${resultat.disney}');">` : ''}
            ${discovery = resultat.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${resultat.discovery}');">` : ''}
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
            <li>${resultat.title}</li><br>
            <img class="bilde" src="${resultat.picture}">
            ${Netflix = resultat.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${resultat.Netflix}');">` : ''}
            ${hbo = resultat.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${resultat.hbo}');">` : ''}
            ${viaplay = resultat.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${resultat.viaplay}');">` : ''}
            ${youtube = resultat.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${resultat.youtube}');">` : ''}
            ${googleplay = resultat.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${resultat.googleplay}');">` : ''}
            ${appleTV = resultat.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${resultat.appletv}');">` : ''}
            ${amazon = resultat.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${resultat.amazon}');">` : ''}
            ${tv2 = resultat.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${resultat.tv2}');">` : ''}
            ${disney = resultat.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${resultat.disney}');">` : ''}
            ${discovery = resultat.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${resultat.discovery}');">` : ''}
           
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
