
// function series() {
//     let Netflix = '';
//     let hbo = '';
//     let viaplay = '';
//     let youtube = '';
//     let googleplay = '';
//     let appleTv = '';
//     let amazon = '';
//     let tv2 = '';
//     let disney = '';
//     let discovery = '';
//     let html = `
//     ${showmeny()}
//     <center>
//     <h1> Serier </h1>
//     <h3> Trykk på hjulet for å finne en tilfeldig serie</h3>
//     <img src="spinning-shit.png" class="spinner" onclick = "spin2()">
//     <br><br>
//     </center>
//     `;

//     model.series.map(serie => html += ` <div class="cell">
//     <center>
//     <img class="bilde" src="${serie.picture}"><br>
//     <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addSerie(${serie.id - 1})">
//     <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideSerie(${serie.id - 1})">
//     <br>
//     <b>Tittel: ${serie.title}</b><br>
//     ${Netflix = serie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${serie.Netflix}');">` : ''}
//     ${hbo = serie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" heigth="44" onclick="openInNewTab('${serie.hbo}');">` : ''}
//     ${viaplay = serie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${serie.viaplay}');">` : ''}
//     ${youtube = serie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${serie.youtube}');">` : ''}
//     ${googleplay = serie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${serie.googleplay}');">` : ''}
//     ${appleTV = serie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${serie.appletv}');">` : ''}
//     ${amazon = serie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${serie.amazon}');">` : ''}
//     ${tv2 = serie.tv2 != '' ? `<input class="btn" type="image" src="/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${serie.tv2}');">` : ''}
//     ${disney = serie.disney != '' ? `<input class="btn" type="image" src="/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${serie.disney}');">` : ''}
//     ${discovery = serie.discovery != '' ? `<input class="btn" type="image" src="/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${serie.discovery}');">` : ''}
//     </center>
//     </div>`).join(' ')
//     Covid.innerHTML = html;
// }
// function openInNewTab(url) {
//     window.open(url, '_blank').focus();
// }


function series() {
    html =/*html*/ `
    ${showmeny()}
    <center>
    <br>
    <h1> Serier </h1>
    <h3> Trykk på hjulet for å finne en tilfeldig serie</h3>
    <br>
    <img src="spinning-shit.png" class="spinner" onclick = "spin2()">
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

    html += printSeries();

    Covid.innerHTML = html;
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function printSeries() {
    let html = "";

    for (let i = 0; i < model.series.length; i++) {
        html += `
        <div class="flyttFavo">
       <div class="cell">
       <center>
       <img class="bilde" src="${model.series[i].picture}"><br>
       <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addSerie(${i})">
       <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideSerie(${i})">
       <br>
       <b>${model.series[i].title}</b><br>
       ${Netflix = model.series[i].Netflix != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.series[i].Netflix}');">` : ''}
       ${hbo = model.series[i].hbo != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.series[i].hbo}');">` : ''}
       ${viaplay = model.series[i].viaplay != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.series[i].viaplay}');">` : ''}
       ${youtube = model.series[i].youtube != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.series[i].youtube}');">` : ''}
       ${googleplay = model.series[i].googleplay != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.series[i].googleplay}');">` : ''}
       ${appleTV = model.series[i].appletv != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.series[i].appletv}');">` : ''}
       ${amazon = model.series[i].amazon != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.series[i].amazon}');">` : ''}
       ${tv2 = model.series[i].tv2 != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.series[i].tv2}');">` : ''}
       ${disney = model.series[i].disney != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.series[i].disney}');">` : ''}
       ${discovery = model.series[i].discovery != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/dicovery.png" width="94" height="69" onclick="openInNewTab('${model.series[i].discovery}');">` : ''}
       </center>
       </div>
       </div>
       `

    }
    return html;
}