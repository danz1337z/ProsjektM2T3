function random() {

    html =/*html*/ `
    ${showmeny()}

    <center>
    <h1> Velkommen ${model.inputs.startpage.login}!</h1>
    <h3> Trykk på hjulet for å finne en tilfeldig film / random </h3>
    <img src="spinning-shit.png" class="spinner" onclick = "random()">
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

    let random = Math.floor(Math.random() * model.movies.length);

    model.movies.map(movie => html += `
    <center>
    <img class="bilde2" src="${movie.picture}"><br>
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
    </center>
    `).join(' ');
    Covid.innerHTML = html;
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}








//     let Netflix = '';
//     let hbo = '';
//     let viaplay = '';
//     let youtube = '';
//     let googleplay = '';
//     let appleTv = '';
//     let amazon = '';

//     let html = `
//     ${showmeny()}
//     <center>
//         <h1> Velkommen ${model.inputs.startpage.login}!</h1>
//         <h3> Trykk på hjulet for å finne en tilfeldig film / random </h3>
//         <img src="spinning-shit.png" class="spinner" onclick = "spin()">
//         <br><br>
//         </center>
//         <div class="rand" id="random"></div>
//     `;
//     Covid.innerHTML = html;
// }
// function spin() {
//     let random = Math.floor(Math.random() * model.movies.length);

//     model.movies.map(random => html += ` <div class="cell">
//     <center>
//     <img class="bilde" src="${movie.picture}"><br>
//     <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
//     <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
//     <br>
//     <b>Tittel: ${random.title}</b><br>
//     ${Netflix = random.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
//     ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
//     ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
//     ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
//     ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
//     ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
//     ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
//     </center>
//     </div>`).join(' ')

//     //for (let i = 0; i < model.movies.length; i++) {
//     // document.getElementById("random").innerHTML = `
//     //     <center>
//     //     <img class= "bilde2" src="${model.movies[random].picture}">
//     //     <h3> ${model.movies[random].title}</h3>
//     //     <br>
//     //     <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${random})">
//     //     <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern-r" onclick="hideRandom(${random})">

//     //     ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
//     //     ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
//     //     ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
//     //     ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
//     //     ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
//     //     ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
//     //     ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
//     //    </center>
//     //     `;

//     //}
// }

// //<img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt-r" onclick="addTilfeldig(${random})">

// /* <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${random})">
//         <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern-r" onclick="hideRandom(${random})"> */

//         // <Button onclick="openInNewTab('${model.movies[random].Netflix}');"> Se den på Netflix</Button>
//         // <Button onclick="openInNewTab('${model.movies[random].hbo}');"> Se den på HBO Max</Button>
