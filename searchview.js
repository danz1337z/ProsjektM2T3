function search() {
    let html = /*html*/`
    ${showmeny()}
    <h3>Søk</h3>
    <input 
        type="text" 
        oninput="model.search.text=this.value"
        value="${model.search.text || ''}"
    />
    <button onclick="updateView()">Søk</button>
    
    <h5>Søkeresultater:</h5>
    <ul>
    ${grandioseTanker()}
    </ul>
`;
    Covid.innerHTML = html;
}

function grandioseTanker() {
    let html = '';
    let movies = model.movies;

    const searchText = model.search.text;
    if (searchText !== '') {
        movies = filterInnhold(searchText, movies);
    }
    for (let i = 0; i < movies.length; i++) {
        const resultat = movies[i];
        html += /*html*/`
            <li>${resultat.title} ${resultat.Netflix}</li>
        `;
    }


    return html;
    Covid.innerHTML = html;
}

function filterInnhold(searchText, movies) {
    searchText = searchText.toLowerCase();
    let filteredList = [];
    for (let resultat of movies) {
        const title = resultat.title.toLowerCase();
        const Netflix = resultat.Netflix.toLowerCase();
        if (title.indexOf(searchText) != -1
            || Netflix.indexOf(searchText) != -1) {
            filteredList.push(resultat);
        }
    }
    return filteredList;

}
