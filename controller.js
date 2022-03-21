function addFavoritt(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);
    movie();
}
function addSerie(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.series[index].title);
    series();
}
function addTilfeldig(index) {
    model.app.antallFavoritter++;
    model.app.favOs.push(model.movies[index].title);

}
function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("random")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
}

function slett(index) {
    model.app.favOs.splice(index, 1);
    model.app.antallFavoritter--;
    favs();

}


function spin() {
    let random = Math.floor(Math.random() * model.movies.length);
    for (let i = 0; i < model.movies.length; i++) {
        document.getElementById("random").innerHTML = `
        <h2>Film</h2>
        <h3> ${model.movies[random].title}</h3>
        <img class= "bilde2" src="${model.movies[random].picture}"</img> 
        <br>
        <Button onclick="openInNewTab('${model.movies[random].Netflix}');"> Se den på Netflix</Button>
        <button onclick="addTilfeldig(${random})"> Legg i mine favoritter</button>
    
        `;

    }
}


// let filtertliste=[];