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
    <center>
    <Button class="a" onclick="changePage('Min Side')"> Min Side </button>
    <Button class="a" onclick="changePage('Kategorier')"> Kategorier </button>
    <Button class="a" onclick="changePage('movie')"> Film </button>
    <Button class="a" onclick="changePage('series')"> Serier </button>
    <Button class="a" onclick="changePage('favs')"> Favoritter </button>
    <Button class="a" onclick="changePage('random')"> Finn tilfeldig Film </button>
    </center>
    `;
    return html;
}

function loggpå() {
    let html = `
    ${showmeny()}
    <h1>Velkommen ${model.app.currentuser} </h1>`
    appDiv.innerHTML = html;
}

function movie() {
    let html = `
    ${showmeny()}
    <h1> Filmer! </h1>`;
    for (let i = 0; i < model.movies.length; i++) {
        html += `
        <p><img class="bilde" src="${model.movies[i].picture}" alt="spiderman"></p>
        <b>Tittel: ${model.movies[i].title}</b>
        <br><br>
        <Button onclick="openInNewTab('${model.movies[i].Netflix}');"> Se den på Netflix</Button>
        <br><br>
        <button onclick="addFavoritt(${i})"> Legg i mine favoritter</button>
        <hr>
        `;
    };
    appDiv.innerHTML = html;
}

function series() {
    let html = `
    ${showmeny()}
    <h1> Serier! </h1>`
    for (let i = 0; i < model.series.length; i++) {
        html += `
        <p><img class="bilde" src="${model.series[i].picture}" alt="The mentalist"></p>
        <b>Tittel: ${model.series[i].title}</b>
        <br><br>
        <Button onclick="openInNewTab('${model.series[i].Blockbuster}');"> Se den på Netflix</Button>
        <hr>
        `;
    };
    appDiv.innerHTML = html;
}

function minside() {
    let html = `
    ${showmeny()}
    <center>
    <h1> ${model.app.currentpage} </h1>
    </center>`;
    appDiv.innerHTML = html;
}

function favs() {
    let html = `
    ${showmeny()}
    <h1> Dine favoritter </h1>`;

    appDiv.innerHTML = html;
}

function random() {
    let html = `
    ${showmeny()}
    <center>
        <h1> Velkommen ${model.app.currentuser} </h1>
        <p> Finn Random Film </p>
        <button> Spin </button>
    </center>`;
    appDiv.innerHTML = html;
}

function categories() {
    let html = `
${showmeny()}
    <h1> Kategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button onclick="showUnder()">${model.categories[i].categoryName} </button>`;
    }
    appDiv.innerHTML = html;
}

function showUnder() {
    let html = `
    ${showmeny()}
    <h1> Underkategorier </h1>`;
    for (let i = 0; i < model.categories.length; i++) {
        html += `<button> ${model.categories[i].underCategory1}</button>`

    }

    appDiv.innerHTML = html;
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}