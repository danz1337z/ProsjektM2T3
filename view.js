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
        <a href="#" class="neon-btn" onclick ="random()">Login</a>
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
    <Button type="button" class="button" onclick="changePage('movie')">Alle filmer</button>
    <Button type="button" class="button" onclick="changePage('series')">Alle serier</button>
    <Button type="button" class="button" onclick="changePage('random')">Tilfeldig Film / Serie</button>
    <Button type="button" class="search-button" onclick="changePage('search')">&#128269;</button>
    </center>
</div>


    `;
    return html;
}

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