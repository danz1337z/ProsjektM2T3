
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
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
    <Button type="button" class="button" onclick="showUnderAction()">Back&#11013;</button>
    <h2>Action Thriller</h2>
    <h4>${movieHtml}</h4>
    
    </center>
    `;
    Covid.innerHTML = html;
}
