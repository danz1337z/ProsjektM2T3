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
    </center>`;
    for (let i = 0; i < model.undercategories.length; i++) {
        let first = i % 2 == 0 ? 'first' : '';
        html += `
        <div class="cell2 ${first} "></div>
        <input type="button" onclick="actionkomedie()" class="catbutt" value="${model.undercategories[i].underCategory}">
        `;
    };

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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

    Covid.innerHTML = html;
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