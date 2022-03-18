function addFavoritt(index) {
    model.movies.push(model.favs[index].title)
}

function loggpå() {
    if (model.inputs.startpage.login == model.users[0].name && model.inputs.startpage.pwd == model.users[0].pwd) {
        changePage("random")

    } else {
        alert("Feil Passord eller Brukernavn")

    }
}