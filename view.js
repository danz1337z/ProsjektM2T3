
let Covid = document.getElementById('app');

function changePage(side) {
    model.app.currentpage = side;
    model.testtest = "";
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


    //-----------------------------------------\\
    //---------------ACTION-SIDER---------------\\
    //-------------------------------------------\\
    if (side == "action-komedie") actionkomedie();
    if (side == "action-Drama") actiondrama();
    if (side == "action-Fantasy") actionfantasy();
    if (side == "action-Romantikk") actionromantikk();
    if (side == "action-Skrekk") actionskrekk();
    if (side == "action-Scifi") actionscifi();
    if (side == "action-Krim") actionkrim();
    if (side == "action-Thriller") actionthriller();


    //------------------------------------------\\
    //---------------KOMEDIE-SIDER---------------\\
    //--------------------------------------------\\
    if (side == "komedie-action") komedieaction();
    if (side == "komedie-Drama") komediedrama();
    if (side == "komedie-Fantasy") komediefantasy();
    if (side == "komedie-Romantikk") komedieromantikk();
    if (side == "komedie-Skrekk") komedieskrekk();
    if (side == "komedie-Scifi") komediescifi();
    if (side == "komedie-Krim") komediekrim();
    if (side == "komedie-Thriller") komediethriller();


    //--------------------------------------------\\
    //---------------ROMANTIKK-SIDER---------------\\
    //----------------------------------------------\\
    if (side == "romantikk-action") romantikkaction();
    if (side == "romantikk-Drama") romantikkdrama();
    if (side == "romantikk-Fantasy") romantikkfantasy();
    if (side == "romantikk-Komedie") romantikkkomedie();
    if (side == "romantikk-Skrekk") romantikkskrekk();
    if (side == "romantikk-Scifi") romantikkscifi();
    if (side == "romantikk-Krim") romantikkkrim();
    if (side == "romantikk-Thriller") romantikkthriller();


    //-----------------------------------------\\
    //---------------SKREKK-SIDER---------------\\
    //-------------------------------------------\\
    if (side == "skrekk-action") skrekkaction();
    if (side == "skrekk-Drama") skrekkdrama();
    if (side == "skrekk-Fantasy") skrekkfantasy();
    if (side == "skrekk-Romantikk") skrekkromantikk();
    if (side == "skrekk-Komedie") skrekkKomedie();
    if (side == "skrekk-Scifi") skrekkscifi();
    if (side == "skrekk-Krim") skrekkkrim();
    if (side == "skrekk-Thriller") skrekkthriller();


    //----------------------------------------\\
    //---------------SCIFI-SIDER---------------\\
    //------------------------------------------\\
    if (side == "scifi-action") scifiaction();
    if (side == "scifi-Drama") scifidrama();
    if (side == "scifi-Fantasy") scififantasy();
    if (side == "scifi-Romantikk") scifiromantikk();
    if (side == "scifi-Komedie") scifiKomedie();
    if (side == "scifi-Skrekk") scifiskrekk();
    if (side == "scifi-Krim") scifikrim();
    if (side == "scifi-Thriller") scifithriller();


    //---------------------------------------\\
    //---------------KRIM-SIDER---------------\\
    //-----------------------------------------\\
    if (side == "krim-action") krimaction();
    if (side == "krim-drama") krimdrama();
    if (side == "krim-fantasy") krimfantasy();
    if (side == "krim-romantikk") krimromantikk();
    if (side == "krim-komedie") krimkomedie();
    if (side == "krim-skrekk") krimskrekk();
    if (side == "krim-scifi") krimscifi();
    if (side == "krim-thriller") krimthriller();


    //-------------------------------------------\\
    //---------------THRILLER-SIDER---------------\\
    //---------------------------------------------\\
    if (side == "thriller-action") thrilleraction();
    if (side == "thriller-drama") thrillerdrama();
    if (side == "thriller-fantasy") thrillerfantasy();
    if (side == "thriller-romantikk") thrillerromantikk();
    if (side == "thriller-komedie") thrillerkomedie();
    if (side == "thriller-skrekk") thrillerskrekk();
    if (side == "thriller-scifi") thrillerscifi();
    if (side == "thriller-krim") thrillerkrim();


    //----------------------------------------\\
    //---------------DRAMA-SIDER---------------\\
    //------------------------------------------\\
    if (side == "drama-action") dramaaction();
    if (side == "drama-thriller") dramathriller();
    if (side == "drama-fantasy") dramafantasy();
    if (side == "drama-romantikk") dramaromantikk();
    if (side == "drama-komedie") dramakomedie();
    if (side == "drama-skrekk") dramaskrekk();
    if (side == "drama-scifi") dramascifi();
    if (side == "drama-krim") dramakrim();


    //----------------------------------------\\
    //---------------FANTASY-SIDER---------------\\
    //------------------------------------------\\
    if (side == "fantasy-action") fantasyaction();
    if (side == "fantasy-thriller") fantasythriller();
    if (side == "fantasy-drama") fantasydrama();
    if (side == "fantasy-romantikk") fantasyromantikk();
    if (side == "fantasy-komedie") fantasykomedie();
    if (side == "fantasy-skrekk") fantasyskrekk();
    if (side == "fantasy-scifi") fantasyscifi();
    if (side == "fantasy-krim") fantasykrim();


}

function login() {
    //<button  class="logg" onclick="icon()"></box-icon>🌓</button>
    let html = `
    <br>
    <Center>
    <h1>${model.app.currentpage}</h1>
    <input type = "text" onchange="model.inputs.startpage.login = this.value" placeholder ="User Name">
    <br><br>
    <input type = "password" onchange="model.inputs.startpage.pwd = this.value" placeholder ="Password">
    <br><br>
    <a href="#" class="neon-btn" onclick ="loggpå()">Login</a><br>
        </Center>
    `;
    Covid.innerHTML = html;
}

function showmeny() {

    let html = /*html*/`
   
    <div class="btn-group">
   
    <center>
    <button  class="butt" title="Dark Mode" onclick="icon()"></box-icon>🌓</button>
    <Button type="button" class="button" onclick="changePage('Min Side')">Min Side</button>
    <Button type="button" class="button" onclick="changePage('Kategorier')">Kategorier</button>
    <Button type="button" class="button" onclick="changePage('movie')">Filmer</button>
    <Button type="button" class="button" onclick="changePage('series')">Serier</button>
    
    <input id="myInput" class="search-button" placeholder=" Søk... " onchange="model.search.text=this.value; changePage('search')"
        value="${model.testtest || ''}" />
    <button id="myBtn" class="butt" onclick="changePage('search')">&#128269;</button>


    
    </center>
    
</div>

    `;
    return html;
    Covid.innerHTML = html;
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
    <div class="flyttFavo">
    <h1> Dine favoritter </h1>
    </div>
     `;
    for (let i = 0; i < model.app.favOs.length; i++) {
        html += `
        <div class="flyttFavo">
        <img class="bilde" src="${model.app.favPics[i]}" alt="bilde"><br><br>
        ${model.app.favOs[i]}
        <br>
        <div class="btn-group">
       
        ${Netflix = model.app.netflixLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/Netflix-Logo.png" width="96" height="54" onclick="openInNewTab('${model.app.netflixLinker[i]}');">` : ''}
        ${hbo = model.app.hboLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/HBO_logo_blue.png" width="86" height="44" onclick="openInNewTab('${model.app.hboLinker[i]}');">` : ''}
        ${viaplay = model.app.viaplayLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/viaplay-logo-1-min.png" width="110" height="48" onclick="openInNewTab('${model.app.viaplayLinker[i]}');">` : ''}
        ${youtube = model.app.youtubeLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/red-youtube-logo-png-xl.png" width="64" height="54" onclick="openInNewTab('${model.app.youtubeLinker[i]}');">` : ''}
        ${googleplay = model.app.googleLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/Google_Play_logo_store.png" width="54" height="54" onclick="openInNewTab('${model.app.googleLinker[i]}');">` : ''}
        ${appleTV = model.app.appletvLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/baa.png" width="84" height="54" onclick="openInNewTab('${model.app.appletvLinker[i]}');">` : ''}
        ${amazon = model.app.amazonLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/prime-video-amazon.webp" width="120" height="54" onclick="openInNewTab('${model.app.amazonLinker[i]}');">` : ''}
        ${tv2 = model.app.tv2Linker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/TV_2_Norge.webp" width="44" height="54" onclick="openInNewTab('${model.app.tv2Linker[i]}');">` : ''}
        ${disney = model.app.disneyLinker[i] != '' ? `<input class="btn" type="image" src="/ProsjektM2T3/logos/disneyplus.png" width="100" height="54" onclick="openInNewTab('${model.app.disneyLinker[i]}');">` : ''}
        <br><br>
        <button class="buttis" onclick="slett(${i})">Slett</button>
        <hr>
        </div>
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
    <div class="flyttFavo">
    <h1> Skjult innhold </h1>
    </div>
     `;
    for (let i = 0; i < model.app.hide.length; i++) {
        html += `
        <div class="flyttFavo">
         <b>
        ${model.app.hide[i].title}
        </b>
        <hr>
        </div>
        `};
    Covid.innerHTML = html;
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}