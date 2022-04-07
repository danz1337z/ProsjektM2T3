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
    model.app.hidePics.push(model.movies[index].picture);
    model.movies.splice(index, 1);
    movie();
}
//Funksjon som skjuler serie
function hideSerie(index) {
    model.app.antallHidet++;
    model.app.hide.push(model.series[index].title);
    model.app.favPics.push(model.series[index].picture);
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


//Show / Hide Pwd på minside
function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}