let Covid = document.getElementById('app');

function changePage(side) {
    model.app.currentpage = side;
    updateView();
}
updateView();

function updateView() {
    const side = model.app.currentpage;
    if (side == "Film Velger") login();
    if (side == "Kategorier") categories();
    if (side == "movie") movie();
    if (side == "series") series();
    if (side == "favs") favs();
    if (side == "random") random();
    if (side == "Min Side") minside();
    if (side == "search") search();
    if (side == "skjult") skjult();
    if (side == "startside") startside();
    if (side == "action-komedie") actionkomedie();

}

function login() {
    let html = `
    <br>
        <Center>
        <h1>${model.inputs.startpage.login}</h1>
        <input type = "text" onchange="model.inputs.startpage.login = this.value" placeholder ="User Name">
        <br><br>
        <input type = "password" onchange="model.inputs.startpage.pwd = this.value" placeholder ="Password">
        <br><br>
        <a href="#" class="neon-btn" onclick ="startside()">Login</a>
        </Center>
    `;
    Covid.innerHTML = html;
}

function showmeny() {
    let html = /*html*/`
    <div class="btn-group">
   
    <center>
    <Button type="button" class="button" onclick="changePage('Min Side')">Min Side</button>
    <Button type="button" class="button" onclick="changePage('Kategorier')">Kategorier</button>
    <Button type="button" class="button" onclick="changePage('movie')">Filmer</button>
    <Button type="button" class="button" onclick="changePage('series')">Serier</button>
    
   
    <input
    class="search-button" 
    placeholder=" Søk "
    type="text" 
    oninput="model.search.text=this.value"
    value="${model.search.text || ''}"
    />
    <Button type="button" class="search-button" onclick="changePage('search')">&#128269;</button>
    
    </center>
    


    `;
    return html;
}

// </div>
// <div class="inputContainer">
// <i class="fa fa-user icon"> </i>
// <input class="Field" type="text" placeholder="Søk" />
// </div>

function loggpå() {
    let html = `
    ${showmeny()}
    <h1>Velkommen ${model.inputs.startpage.login} </h1>`
    Covid.innerHTML = html;
}

function favs() {
    let html = `
    ${showmeny()}
    <h1> Dine favoritter </h1>
     `;
    for (let i = 0; i < model.app.favOs.length; i++) {
        html += `
        <img class="bilde" src="${model.app.favPics[i]}" alt="bilde"><br><br>
        ${model.app.favOs[i]}
        <br>
        <div class="btn">
        <Button onclick="openInNewTab('${model.app.netflixLinker[i]}');"> Se den på Netflix</Button>
        <Button onclick="openInNewTab('${model.app.hboLinker[i]}');"> Se den på Hbo</Button>
        <Button onclick="openInNewTab('${model.app.viaplayLinker[i]}');"> Se den på Viaplay</Button>
        <br><br>
        <button onclick="slett(${i})">Slett</button>
        <hr>
        </div>
        `};
    Covid.innerHTML = html;
}




function categories() {
    let html = `
${showmeny()}
    <h1> Kategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button onclick="showUnder()">${model.categories[i].categoryName} </button>`;
    }
    Covid.innerHTML = html;
}

function showUnder() {
    let html = `
    ${showmeny()}
    <h1> Underkategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button> ${model.categories[i].underCategory1}</button>`

    }

    Covid.innerHTML = html;
}

function skjult() {
    let html = `
    ${showmeny()}
    <h1> Skjult innhold </h1>
     `;
    for (let i = 0; i < model.app.hide.length; i++) {
        html += `
         <b>
        ${model.app.hide[i]}
        <button onclick="gjennopprett(${i})">Gjennopporett</button>
        </b>
        <hr>
        `};
    Covid.innerHTML = html;
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}


function actionkomedie() {
    let html = `
    ${showmeny()}
    <center>
    <h2>Action Komedie</h2>
    <h4>${model.movies[0].title}</h6>
    <h4>${model.movies[1].title}</h4>
    
    <div>${movie.id}</div>
    </center>

    
    
    
    `;

    let Netflix = '';
    let hbo = '';
    let viaplay = '';
    let youtube = '';
    let googleplay = '';
    let appleTv = '';
    let amazon = '';

    model.movies.map(movie => html += ` <div class="cell">
    <center>
    <img class="bilde" src="${movie.picture}"><br>
    <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${movie.id - 1})">
    <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${movie.id - 1})">
    <br>
    <b>Tittel: ${movie.title}</b><br>
    <b>Tittel: ${movie.categoryId}</b><br>
    ${Netflix = movie.Netflix != '' ? `<input class="btn" type="image" src="/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${movie.Netflix}');">` : ''}
    ${hbo = movie.hbo != '' ? `<input class="btn" type="image" src="/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${movie.hbo}');">` : ''}
    ${viaplay = movie.viaplay != '' ? `<input class="btn" type="image" src="/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${movie.viaplay}');">` : ''}
    ${youtube = movie.youtube != '' ? `<input class="btn" type="image" src="/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${movie.youtube}');">` : ''}
    ${googleplay = movie.googleplay != '' ? `<input class="btn" type="image" src="/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${movie.googleplay}');">` : ''}
    ${appleTV = movie.appletv != '' ? `<input class="btn" type="image" src="/logos/baa.png" width="84" height="54" onclick="openInNewTab('${movie.appletv}');">` : ''}
    ${amazon = movie.amazon != '' ? `<input class="btn" type="image" src="/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${movie.amazon}');">` : ''}
    </center>
    </div>`).join(' ')
    Covid.innerHTML = html;
}
function openInNewTab(url) {
    window.open(url, '_blank').focus();
}