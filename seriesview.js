
function series() {
    let Netflix = '';
    let hbo = '';
    let viaplay = '';
    let youtube = '';
    let googleplay = '';
    let appleTv = '';
    let amazon = '';
    let html = `
    ${showmeny()}
    <center>
    <h1> Serier </h1>
    <h3> Trykk på hjulet for å finne en tilfeldig serie</h3>
    <img src="spinning-shit.png" class="spinner" onclick = "spin2()">
    <br><br>
    </center>
    `;

    model.series.map(serie => html += ` <div class="cell">
    <center>
    <img class="bilde" src="${serie.picture}"><br>
    <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addSerie(${serie.id - 1})">
    <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideSerie(${serie.id - 1})">
    <br>
    <b>Tittel: ${serie.title}</b><br>
    ${Netflix = serie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${serie.Netflix}');">` : ''}
    ${hbo = serie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" heigth="44" onclick="openInNewTab('${serie.hbo}');">` : ''}
    ${viaplay = serie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${serie.viaplay}');">` : ''}
    ${youtube = serie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${serie.youtube}');">` : ''}
    ${googleplay = serie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${serie.googleplay}');">` : ''}
    ${appleTV = serie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${serie.appletv}');">` : ''}
    ${amazon = serie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${serie.amazon}');">` : ''}
    </center>
    </div>`).join(' ')
    Covid.innerHTML = html;
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}