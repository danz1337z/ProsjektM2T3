function random() {
    let Netflix = '';
    let hbo = '';
    let viaplay = '';
    let youtube = '';
    let googleplay = '';
    let appleTv = '';
    let amazon = '';

    let html = `
    ${showmeny()}
    <center>
        <h1> Velkommen ${model.inputs.startpage.login}!</h1>
        <h3> Trykk på hjulet for å finne en tilfeldig film / random </h3>
        <img src="spinning-shit.png" class="spinner" onclick = "spin()"> 
        <br><br>
        </center>
        <div class="rand" id="random"></div>
    `;
    Covid.innerHTML = html;
}
function spin() {
    let random = Math.floor(Math.random() * model.movies.length);
    for (let i = 0; i < model.movies.length; i++) {
        document.getElementById("random").innerHTML = `
        <center>
        <img class= "bilde2" src="${model.movies[random].picture}"> 
        <h3> ${model.movies[random].title}</h3>
        <Button onclick="openInNewTab('${model.movies[random].Netflix}');"> Se den på Netflix</Button>
        <Button onclick="openInNewTab('${model.movies[random].hbo}');"> Se den på HBO Max</Button>
        <br>
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt" onclick="addTilfeldig(${random})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern-r" onclick="hideRandom(${random})">
       </center>
        `;

    }
}

//<img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt-r" onclick="addTilfeldig(${random})">
