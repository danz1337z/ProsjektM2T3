function categories() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Kategorier </h1>
    <button class="catbutt" onclick="showUnderAction()"> Action </button>
    <button class="catbutt" onclick="showUnderKomedie()"> Komedie </button>
    <button class="catbutt" onclick="showUnderRomantikk()"> Romantikk </button>
    <br>
    <button class="catbutt" onclick="showUnderSkrekk()"> Skrekk </button>
    <button class="catbutt" onclick="showUnderScifi()"> Scifi </button>
    <button class="catbutt" onclick="showUnderKrim()"> Krim </button>
    <br>
    <button class="catbutt" onclick="showUnderThriller()"> Thriller </button>
    <button class="catbutt" onclick="showUnderDrama()"> Drama </button>
    <button class="catbutt" onclick="showUnderFantasy()"> Fantasy </button>
    <br>
    <button class="catbutt" onclick="showUnderDokumentar()"> Dokumentar </button>
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
    <Button class="catbutt"" onclick="changePage('action-komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('action-Drama')">Drama</button>
    <Button class="catbutt"" onclick="changePage('action-Fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('action-Romantikk')">Romantikk</button>
    <Button class="catbutt"" onclick="changePage('action-Skrekk')">Skrekk</button>
    <Button class="catbutt"" onclick="changePage('action-Scifi')">Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('action-Krim')">Krim</button>
    <Button class="catbutt"" onclick="changePage('action-Thriller')">Thriller</button>
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
    <Button class="catbutt"" onclick="changePage('komedie-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('komedie-Drama')">Drama</button>
    <Button class="catbutt"" onclick="changePage('komedie-Fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('komedie-Romantikk')">Romantikk</button>
    <Button class="catbutt"" onclick="changePage('komedie-Scifi')">Scifi</button>
    <Button class="catbutt"" onclick="changePage('komedie-Krim')">Krim</button>
    <br>
    <Button class="catbutt"" onclick="changePage('komedie-Thriller')">Thriller</button>
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
    <Button class="catbutt"" onclick="changePage('romantikk-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Drama')">Drama</button>
    <br>
    <Button class="catbutt"" onclick="changePage('romantikk-Komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('romantikk-Scifi')">Scifi</button>
    <br>
    <Button class="catbutt"" onclick="changePage('romantikk-Thriller')">Thriller</button>
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
    <Button class="catbutt"" onclick="changePage('skrekk-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Drama')">Drama</button>
    <br>
    <br>
    <Button class="catbutt"" onclick="changePage('skrekk-Fantasy')">Fantasy</button>
    <Button class="catbutt"" onclick="changePage('skrekk-Thriller')">Thriller</button>
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
    <Button class="catbutt"" onclick="changePage('scifi-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('scifi-Drama')">Drama</button>
    <Button class="catbutt"" onclick="changePage('scifi-Fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('scifi-Romantikk')">Romantikk</button>
    <Button class="catbutt"" onclick="changePage('scifi-Komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('scifi-Thriller')">Thriller</button>
    <br>
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
    <Button class="catbutt"" onclick="changePage('krim-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('krim-drama')">Drama</button>
    <Button class="catbutt"" onclick="changePage('krim-fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('krim-komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('krim-thriller')">Thriller</button>
    <br>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderThriller() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('thriller-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('thriller-drama')">Drama</button>
    <Button class="catbutt"" onclick="changePage('thriller-fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('thriller-romantikk')">Romantikk</button>
    <Button class="catbutt"" onclick="changePage('thriller-komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('thriller-skrekk')">Skrekk</button>
    <br>
    <Button class="catbutt"" onclick="changePage('thriller-scifi')">Scifi</button>
    <Button class="catbutt"" onclick="changePage('thriller-krim')">Krim</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderDrama() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('drama-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('drama-thriller')">Thriller</button>
    <Button class="catbutt"" onclick="changePage('drama-fantasy')">Fantasy</button>
    <br>
    <Button class="catbutt"" onclick="changePage('drama-romantikk')">Romantikk</button>
    <Button class="catbutt"" onclick="changePage('drama-komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('drama-skrekk')">Skrekk</button>
    <br>
    <Button class="catbutt"" onclick="changePage('drama-scifi')">Scifi</button>
    <Button class="catbutt"" onclick="changePage('drama-krim')">Krim</button>
    </center>`;

    Covid.innerHTML = html;
}

function showUnderFantasy() {
    let html = `
    ${showmeny()}
    <center>
    <br>
    <h1> Underkategorier </h1>
    <Button type="button" class="buttis" onclick="changePage('Kategorier')">&#11013; Tilbake</button><br><br>
    <Button class="catbutt"" onclick="changePage('fantasy-action')">Action</button>
    <Button class="catbutt"" onclick="changePage('fantasy-thriller')">Thriller</button>
    <Button class="catbutt"" onclick="changePage('fantasy-drama')">Drama</button>
    <br>
    <Button class="catbutt"" onclick="changePage('fantasy-komedie')">Komedie</button>
    <Button class="catbutt"" onclick="changePage('fantasy-skrekk')">Skrekk</button>
    <br>
    <Button class="catbutt"" onclick="changePage('fantasy-scifi')">Scifi</button>
    <Button class="catbutt"" onclick="changePage('fantasy-krim')">Krim</button>
    </center>`;

    Covid.innerHTML = html;
}