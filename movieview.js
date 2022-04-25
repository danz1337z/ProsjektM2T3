
function movie() {
    html =/*html*/ `
    ${showmeny()}
    <center>
    <br>
    <h1> Filmer </h1>
    <h3> Trykk på hjulet for å finne en tilfeldig film</h3>
    <br>
    <img src="spinning-shit.png" class="spinner" onclick = "spin()">
    <br><br>
    </center>
    `;

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

    html += prinMovies();
    // model.movies.map(movie => html += ` <div class="cell">
    // <center>
    // <img class="bilde" src="${movie.picture}"><br>
    // <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
    // <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
    // <br>
    // <b>Tittel: ${movie.title}</b><br>
    // ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
    // ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
    // ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
    // ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
    // ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
    // ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
    // ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
    // ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
    // ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
    // ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
    // </center>
    // </div>`).join(' ')
    Covid.innerHTML = html;
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function prinMovies() {
    let html = "";

    for (let i = 0; i < model.movies.length; i++) {
        html += `
        <div class="flyttFavo">
       <center> <div class="cell">
       <img class="bilde" src="${model.movies[i].picture}"><br>
       <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${i})">
       <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${i})">
       <br>
       <b>${model.movies[i].title}</b><br>
       ${Netflix = model.movies[i].Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.movies[i].Netflix}');">` : ''}
       ${hbo = model.movies[i].hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.movies[i].hbo}');">` : ''}
       ${viaplay = model.movies[i].viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.movies[i].viaplay}');">` : ''}
       ${youtube = model.movies[i].youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.movies[i].youtube}');">` : ''}
       ${googleplay = model.movies[i].googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.movies[i].googleplay}');">` : ''}
       ${appleTV = model.movies[i].appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.movies[i].appletv}');">` : ''}
       ${amazon = model.movies[i].amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.movies[i].amazon}');">` : ''}
       ${tv2 = model.movies[i].tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.movies[i].tv2}');">` : ''}
       ${disney = model.movies[i].disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.movies[i].disney}');">` : ''}
       ${discovery = model.movies[i].discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${model.movies[i].discovery}');">` : ''}
       </div> </center>
       </div>
       `

    }
    return html;
}