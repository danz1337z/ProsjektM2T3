let appDiv = document.getElementById('app');


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
    if (side == "skjult") skjult();
}

function login() {
    let html = `
    <br>
        <Center>
        <h1> ${model.app.currentpage} </h1>
        <input type = "text" onchange="model.inputs.startpage.login = this.value" placeholder ="User Name">
        <br><br>
        <input type = "password" onchange="model.inputs.startpage.pwd = this.value" placeholder ="Password">
        <br><br>
        <button onclick ="random()"> Login </button>
        </Center>
    `;
    appDiv.innerHTML = html;
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
    </center>
</div>


    `;
    return html;
}

function loggpå() {
    let html = `
    ${showmeny()}
    <h1>Velkommen ${model.app.currentuser} </h1>`
    appDiv.innerHTML = html;
}

// function movie() {
//     let html = `
//     ${showmeny()}
//     <h1> Filmer </h1>`;
//     for (let i = 0; i < model.movies.length; i++) {
//         let first = i % 5 == 0 ? 'first' : '';
//         html += `
//         <div class="cell ${first} ">
//         <br>
//         <center>
//         <img class="bilde" src="${model.movies[i].picture}" alt="spiderman">

//         <br>
//         <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addFavoritt(${i})">
//         <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideMovie(${i})">
//         <br><br>
//         <b>Tittel: ${model.movies[i].title}</b>
//         <br><br>
//         <Button onclick="openInNewTab('${model.movies[i].Netflix}');"> Se den på Netflix</Button>
//         <br><br>
//         </center>

//         </div>
//         `;

//     };
//     appDiv.innerHTML = html;
// }

// function series() {
//     let html = `
//     ${showmeny()}
//     <h1> Serier </h1>`
//     for (let i = 0; i < model.series.length; i++) {
//         let first = i % 5 == 0 ? 'first' : '';
//         html += `
//         <div class="cell ${first} ">
//         <br>
//         <center>
//         <img class="bilde" src="${model.series[i].picture}" alt="The mentalist">
//         <br>
//         <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addSerie(${i})">
//         <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern" onclick="hideSerie(${i})">
//         <br><br>
//         <b>Tittel: ${model.series[i].title}</b>
//         <br><br>
//         <Button onclick="openInNewTab('${model.series[i].hbo}');"> Se den på HBO max</Button>
//         <br><br>
//         </center>
//         </div>
//         `;
//     };
//     appDiv.innerHTML = html;
// }

function minside() {
    let html = `
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    <img class="profilbilde" src="https://kvener.no/wp-content/uploads/2019/02/blank-profile-picture-973460_640.png"></img>
    <br><br>
    Navn: ${model.app.currentuser} <button> Endre Navn </button> <br>
    Epost: ${model.app.currentepost} <button> Endre Epost </button> <br>
    Passord: ***** <button> Endre Passord </button> <br>
    <br><br>
    <div class="btn-group">
    <Button type="button" class="button" onclick="changePage('favs')">Mine favoritter(${model.app.antallFavoritter})</button>
    <Button type="button" class="button" onclick="changePage('skjult')">Skjult innhold(${model.app.antallHidet})</button>
    </div>
    </center>
    `;

    appDiv.innerHTML = html;
}

function favs() {
    let html = `
    ${showmeny()}
    <h1> Dine favoritter </h1>
     `;
    for (let i = 0; i < model.app.favOs.length; i++) {
        html += `
         <b>
        ${model.app.favOs[i]}
         <Button onclick="openInNewTab('${model.app.favOs[i]}');"> Se den på Netflix</Button>
        <button onclick="slett(${i})">Slett</button>
        </b>
       
        <hr>
        `};
    appDiv.innerHTML = html;
}


// function random() {
//     let html = `
//     ${showmeny()}
//     <center>
//         <h1> Velkommen ${model.app.currentuser}!</h1>
//         <h3> Trykk på hjulet for å finne en tilfeldig film / serie </h3>
//         <img src="spinning-shit.png" class="spinner" onclick = "spin()"> 
//         <br><br>
//         </center>
//         <div class="rand" id="random"></div>
//     `;
//     appDiv.innerHTML = html;
// }

function categories() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Kategorier </h1>

    <br><button onclick="showUnderAction()"> Action </button>
    <br><br><button onclick="showUnderKomedie()"> Komedie </button>
    <br><br><button onclick="showUnderRomantikk()"> Romantikk </button>
    <br><br><button onclick="showUnderSkrekk()"> Skrekk </button>
    <br><br><button onclick="showUnderScifi()"> Scifi </button>
    <br><br><button onclick="showUnderKrim()"> Krim </button>
    <br><br><button onclick="showUnderThriller()"> Thriller </button>
    <br><br><button onclick="showUnderDrama()"> Drama </button>
    <br><br><button onclick="showUnderFantasy()"> Fantasy </button>
    <br><br><button onclick="showUnderDokumentar()"> Dokumentar </button>

    </center>
    `;
    appDiv.innerHTML = html;
}

function showUnderAction() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <input type="button" onclick="categories()" class="catbutt" value="${model.undercategories[i].underCategory}">
        `;
    };

    appDiv.innerHTML = html;
}

function showUnderKomedie() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories2.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories2[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderRomantikk() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories3.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories3[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderSkrekk() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories4.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories4[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderScifi() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories5.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories5[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderKrim() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories6.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories6[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderThriller() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories7.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories7[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}

function showUnderDrama() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories8.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories8[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderFantasy() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories9.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories9[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
}
function showUnderDokumentar() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    </center>
`;
    for (let i = 0; i < model.undercategories10.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2${first} "></div>
        <button class="catbutt" onclick="categories()">${model.undercategories10[i].underCategory}</button>
        `;
    };

    appDiv.innerHTML = html;
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
    appDiv.innerHTML = html;
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}