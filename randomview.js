function random() {

    html =/*html*/ `
    ${showmeny()}

    <center>
    <h1> Velkommen ${model.inputs.startpage.login}!</h1>
    <h3> Trykk på hjulet for å finne en tilfeldig film </h3>
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

    let random = Math.floor(Math.random() * model.movies.length);

    // model.movies.map(movie => html += `
    // <center>
    // <img class="bilde2" src="${movie.picture}"><br>
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
    // </center>
    // `).join(' ');

    Covid.innerHTML = html;
}

function spin() {
    let random = Math.floor(Math.random() * model.movies.length);
    let displayMovie = ""
    displayMovie = `
    <center>
    <h2>${model.movies[random].title}</h2>
    <h2>yoyo</h2>
    <img class="bilde2" src="${model.movies[random].picture}"</img>
    <br>
    <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${model.movies[random].id - 1})">
    <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${model.movies[random].id - 1})">
    <br>
    ${Netflix = model.movies[random].Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.movies[random].Netflix}');">` : ''}
    ${hbo = model.movies[random].hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.movies[random].hbo}');">` : ''}
    ${viaplay = model.movies[random].viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.movies[random].viaplay}');">` : ''}
    <br>
    <br>
    ${youtube = model.movies[random].youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.movies[random].youtube}');">` : ''}
    ${googleplay = model.movies[random].googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.movies[random].googleplay}');">` : ''}
    ${appleTV = model.movies[random].appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.movies[random].appletv}');">` : ''}
    <br>
    <br>
    ${amazon = model.movies[random].amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.movies[random].amazon}');">` : ''}
    ${tv2 = model.movies[random].tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.movies[random].tv2}');">` : ''}
    ${disney = model.movies[random].disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.movies[random].disney}');">` : ''}
    ${discovery = model.movies[random].discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${model.movies[random].discovery}');">` : ''}
    </center>

    `;

    html = `
    ${showmeny()}
    <center>
    <h1> Velkommen ${model.inputs.startpage.login}!</h1>
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





