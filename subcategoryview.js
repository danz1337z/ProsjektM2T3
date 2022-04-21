
//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-KOMEDIE----------------------------------------\\
//----------------------------------------------------------------------------------------------------------------\\

function actionkomedie() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(2)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Komedie</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-DRAMA----------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function actiondrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-FANTASY----------------------------------------\\
//----------------------------------------------------------------------------------------------------------------\\

function actionfantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(9) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
    ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
    ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
    ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action-Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-ROMANTIKK----------------------------------------\\
//------------------------------------------------------------------------------------------------------------------\\

function actionromantikk() {
    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(3)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Romantikk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-SKREKK----------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function actionskrekk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(4)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Skrekk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-SCIFI----------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function actionscifi() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(5)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Scifi</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-KRIM----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function actionkrim() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(6)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Krim</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ACTION-THRILLER----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function actionthriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(1) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderAction()">&#11013;Tilbake</button>
    <h2>Action Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-ACTION----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function komedieaction() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(1)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Action</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-DRAMA----------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function komediedrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-FANTASY----------------------------------------\\
//----------------------------------------------------------------------------------------------------------------\\

function komediefantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-FANTASY----------------------------------------\\
//----------------------------------------------------------------------------------------------------------------\\

function komedieromantikk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(3)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Romantikk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-SKREKK----------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function komedieskrekk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(4)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Skrekk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-SCIFI----------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function komediescifi() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(5)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Scifi</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-KRIM----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function komediekrim() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(6)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Krim</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KOMEDIE-THRILLER----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function komediethriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(2) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKomedie()">&#11013;Tilbake</button>
    <h2>Komedie Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-ACTION----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function romantikkaction() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(1)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Action</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-DRAMA----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function romantikkdrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-FANTASY----------------------------------------\\
//------------------------------------------------------------------------------------------------------------------\\

function romantikkfantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-KOMEDIE----------------------------------------\\
//------------------------------------------------------------------------------------------------------------------\\

function romantikkkomedie() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Komedie</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-SKREKK----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function romantikkskrekk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(4)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Skrekk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-SCIFI----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function romantikkscifi() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(5)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Scifi</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-KRIM----------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function romantikkkrim() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(6)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Krim</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier ROMANTIKK-THRILLER----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------------\\

function romantikkthriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(3) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderRomantikk()">&#11013;Tilbake</button>
    <h2>Romantikk Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-ACTION----------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function skrekkaction() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(1)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Action</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-DRAMA----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function skrekkdrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-FANTASY----------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function skrekkfantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-ROMANTIKK----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------------\\

function skrekkromantikk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(3)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Romantikk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-KOMEDIE----------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function skrekkKomedie() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(2)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Komedie</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-SCIFI----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function skrekkscifi() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(5)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Scifi</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-KRIM----------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\

function skrekkkrim() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(6)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Krim</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SKREKK-THRILLER----------------------------------------\\
//----------------------------------------------------------------------------------------------------------------\\

function skrekkthriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(4) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderSkrekk()">&#11013;Tilbake</button>
    <h2>Skrekk Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-ACTION----------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function scifiaction() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(1)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Action</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-DRAMA---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function scifidrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}
//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-FANTASY---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function scififantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-ROMANTIKK---------------------------------------\\
//---------------------------------------------------------------------------------------------------------------\\

function scifiromantikk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(3)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Romantikk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-KOMEDIE---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function scifiKomedie() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(2)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Komedie</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-SKREKK---------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\

function scifiskrekk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(4)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Skrekk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-KRIM---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function scifikrim() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(6)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Krim</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//------------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-THRILLER---------------------------------------\\
//--------------------------------------------------------------------------------------------------------------\\

function scifithriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-ACTION----------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\

function krimaction() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(1)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Action</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-DRAMA----------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function krimdrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-FANTASY---------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\

function krimfantasy() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(9)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Fantasy</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-ROMANTIKK---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function krimromantikk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(3)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Romantikk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-KOMEDIE---------------------------------------\\
//------------------------------------------------------------------------------------------------------------\\

function krimkomedie() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(2)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Komedie</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-SKREKK---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function krimskrekk() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(4)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Skrekk</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-SCIFI---------------------------------------\\
//----------------------------------------------------------------------------------------------------------\\

function krimscifi() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(5)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Scifi</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//-----------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier KRIM-THRILLER---------------------------------------\\
//-------------------------------------------------------------------------------------------------------------\\

function krimthriller() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(6) && movie.categoryId.includes(7)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderKrim()">&#11013;Tilbake</button>
    <h2>Krim Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

//--------------------------------------------------------------------------------------------\\
//----------------------------------------DU STOPPA HER----------------------------------------\\
//----------------------------------------------------------------------------------------------\\

//---------------------------------------------------------------------------------------------------------\\
//----------------------------------------Underkategorier SCIFI-DRAMA---------------------------------------\\
//-----------------------------------------------------------------------------------------------------------\\

function scifidrama() {

    const actionComedyMovies = model.movies.filter(movie => (movie.categoryId.includes(5) && movie.categoryId.includes(8)));

    let movieHtml = "";
    actionComedyMovies.forEach(movie =>
        movieHtml += `<div class="cell">
        <center>
        <img class="bilde" src="${movie.picture}"><br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
        <br>
        <b>Tittel: ${movie.title}</b><br>
        ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
        ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
        ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
        ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
        ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
        ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
        ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
        ${tv2 = movie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${movie.tv2}');">` : ''}
        ${disney = movie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${movie.disney}');">` : ''}
        ${discovery = movie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${movie.discovery}');">` : ''}
        </center>
        </div>`
    );

    html = `
    ${showmeny()}
    <center>
    <br><br>
    <Button type="button" class="buttis" onclick="showUnderScifi()">&#11013;Tilbake</button>
    <h2>Scifi Drama</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}

