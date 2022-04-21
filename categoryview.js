function categories() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Kategorier </h1>
    <br><button class="catbutt" onclick="showUnderAction()"> Action </button>
    <br><br><button class="catbutt" onclick="showUnderKomedie()"> Komedie </button>
    <br><br><button class="catbutt" onclick="showUnderRomantikk()"> Romantikk </button>
    <br><br><button class="catbutt" onclick="showUnderSkrekk()"> Skrekk </button>
    <br><br><button class="catbutt" onclick="showUnderScifi()"> Scifi </button>
    <br><br><button class="catbutt" onclick="showUnderKrim()"> Krim </button>
    <br><br><button class="catbutt" onclick="showUnderThriller()"> Thriller </button>
    <br><br><button class="catbutt" onclick="showUnderDrama()"> Drama </button>
    <br><br><button class="catbutt" onclick="showUnderFantasy()"> Fantasy </button>
    <br><br><button class="catbutt" onclick="showUnderDokumentar()"> Dokumentar </button>
    </center>
    `;
    Covid.innerHTML = html;
}

function showUnderAction() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('action-komedie')">Action-Komedie</button>
    <Button class="catbutt"" onclick="changePage('action-Drama')">Action-Drama</button>
    <Button class="catbutt"" onclick="changePage('action-Fantasy')">Action-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('action-Romantikk')">Action-Romantikk</button>
    <Button class="catbutt"" onclick="changePage('action-Skrekk')">Action-Skrekk</button>
    <Button class="catbutt"" onclick="changePage('action-Scifi')">Action-Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('action-Krim')">Action-Krim</button>
    <Button class="catbutt"" onclick="changePage('action-Thriller')">Action-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderKomedie() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('komedie-action')">Komedie-Action</button>
    <Button class="catbutt"" onclick="changePage('komedie-Drama')">Komedie-Drama</button>
    <Button class="catbutt"" onclick="changePage('komedie-Fantasy')">Komedie-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('komedie-Romantikk')">Komedie-Romantikk</button>
    <Button class="catbutt"" onclick="changePage('komedie-Skrekk')">Komedie-Skrekk</button>
    <Button class="catbutt"" onclick="changePage('komedie-Scifi')">Komedie-Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('komedie-Krim')">Komedie-Krim</button>
    <Button class="catbutt"" onclick="changePage('komedie-Thriller')">Komedie-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderRomantikk() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('romantikk-action')">Romantikk-Action</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Drama')">Romantikk-Drama</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Fantasy')">Romantikk-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('romantikk-Komedie')">Romantikk-Komedie</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Skrekk')">Romantikk-Skrekk</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Scifi')">Romantikk-Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('romantikk-Krim')">Romantikk-Krim</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Thriller')">Romantikk-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderSkrekk() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('skrekk-action')">Skrekk-Action</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Drama')">Skrekk-Drama</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Fantasy')">Skrekk-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('skrekk-Romantikk')">Skrekk-Romantikk</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Komedie')">Skrekk-Komedie</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Scifi')">Skrekk-Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('skrekk-Krim')">Skrekk-Krim</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Thriller')">Skrekk-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderScifi() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('scifi-action')">Scifi-Action</button>
    <Button class="catbutt"" onclick="changePage('scifi-Drama')">Scifi-Drama</button>
    <Button class="catbutt"" onclick="changePage('scifi-Fantasy')">Scifi-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('scifi-Romantikk')">Scifi-Romantikk</button>
    <Button class="catbutt"" onclick="changePage('scifi-Komedie')">Scifi-Komedie</button>
    <Button class="catbutt"" onclick="changePage('scifi-Skrekk')">Scifi-Skrekk</button>
    <br>
    <Button class="catbutt"" onclick="changePage('scifi-Krim')">Scifi-Krim</button>
    <Button class="catbutt"" onclick="changePage('scifi-Thriller')">Scifi-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderKrim() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('krim-action')">Krim-Action</button>
    <Button class="catbutt"" onclick="changePage('krim-drama')">Krim-Drama</button>
    <Button class="catbutt"" onclick="changePage('krim-fantasy')">Krim-Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('krim-romantikk')">Krim-Romantikk</button>
    <Button class="catbutt"" onclick="changePage('krim-komedie')">Krim-Komedie</button>
    <Button class="catbutt"" onclick="changePage('krim-skrekk')">Krim-Skrekk</button>
    <br>
    <Button class="catbutt"" onclick="changePage('krim-scifi')">Krim-Scifi</button>
    <Button class="catbutt"" onclick="changePage('krim-thriller')">Krim-Thriller</button>
    </center>`;

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
}