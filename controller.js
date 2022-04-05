//Funksjon som legger til favoritt serie
function addSerie(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.series[index].title);
    model.app.favPics.push(model.series[index].picture);
    model.app.netflixLinker.push(model.series[index].Netflix);
    model.app.hboLinker.push(model.series[index].hbo);
    model.app.viaplayLinker.push(model.series[index].Viaplay);
    series();
}
//Funksjon som legger til favoritt film
function addFavoritt(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    model.app.favPics.push(model.movies[index].picture);
    model.app.netflixLinker.push(model.movies[index].Netflix);
    model.app.hboLinker.push(model.movies[index].hbo);
    model.app.viaplayLinker.push(model.movies[index].Viaplay);
    movie();
}
//Funksjon som legger til favoritt random
function addTilfeldig(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    model.app.favPics.push(model.movies[index].picture);
    model.app.netflixLinker.push(model.movies[index].Netflix);
    model.app.hboLinker.push(model.movies[index].hbo);
    model.app.viaplayLinker.push(model.movies[index].Viaplay);
    random();
}
//Funksjon som skjuler film
function hideMovie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    model.movies.splice(index, 1);
    movie();
}
//Funksjon som skjuler serie
function hideSerie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.series[index].title);
    model.series.splice(index, 1);
    series();
}
//Funksjon som skjuler random
function hideRandom(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.movies[index].title);
    random();
}
//Funksjon som fjerner favoritter
function slett(index) {
    model.app.favOs.splice(index, 1);
    model.app.favPics.splice(index, 1);
    model.app.netflixLinker.splice(index, 1);
    model.app.hboLinker.splice(index, 1);
    model.app.viaplayLinker.splice(index, 1);
    model.app.antallFavoritter--;
    favs();

}
//Funksjon som gjennoppretter skjult innhold
function gjennopprett(index) {
    model.app.antallHidet--;
    model.app.hide.splice(index, 1);
    skjult();

}
// Div funksjoner
function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("random")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
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
        <img src="https://www.downloadclipart.net/large/5630-rainbow-heart-design.png" class="favoritt-r" onclick="addTilfeldig(${random})">
        <img src="https://vignette4.wikia.nocookie.net/grimm/images/a/a5/X.png/revision/latest?cb=20161103004859" class="fjern-r" onclick="hideRandom(${random})">
       </center>
        `;

    }
}

// if (model.movies.Netflix = true) {
//     const para = document.createElement("div");
//     const node = document.createTextNode("<Button onclick='openInNewTab('${model.movies[random].Netflix}');'> Se den på Netflix</Button>")
//     para.appendChild(node);

//     const element = document.getElementById(playbtn);
//     element.appendChild(para);
// }


