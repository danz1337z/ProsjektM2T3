
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
    if (side == "action-Drama") actiondrama();
    if (side == "action-Fantasy") actionfantasy();
    if (side == "action-Romantikk") actionromantikk();
    if (side == "action-Skrekk") actionskrekk();
    if (side == "action-Scifi") actionscifi();
    if (side == "action-Krim") actionkrim();
    if (side == "action-Thriller") actionthriller();

}

function login() {
    let html = `
    <br>
    <button  class="logg" onclick="icon()"><box-icon type='solid' name='moon'></box-icon></button>
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
    <button  class="butt" onclick="icon()"><box-icon type='solid' name='moon'></box-icon></button>
    <Button type="button" class="button" onclick="changePage('Min Side')">Min Side</button>
    <Button type="button" class="button" onclick="changePage('Kategorier')">Kategorier</button>
    <Button type="button" class="button" onclick="changePage('movie')">Filmer</button>
    <Button type="button" class="button" onclick="changePage('series')">Serier</button>
    
    
   
    <input id="myInput" class="search-button"
    placeholder=" Søk "
    oninput="model.search.text=this.value"
    value="${model.search.text || ''}"

    />
    <button id="myBtn" class="butt" onclick="changePage('search')">&#128269;</button>
  
    </center>
    
</div>

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
        html += `<div class="cell">
        <button onclick="showUnder()">${model.categories[i].categoryName} </button>
        </div>`;
    }
    Covid.innerHTML = html;
}

function showUnder() {
    let html = `
    ${showmeny()}
    <h1> Underkategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<div class="cell">
        <button> ${model.categories[i].underCategory1}</button>
        </div>`

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