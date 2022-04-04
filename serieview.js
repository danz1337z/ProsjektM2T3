function series() {
    let html = `
    ${showmeny()}
    <br>
    <h1> Serier </h1>
    <!-- row -->
    <div id="headrow">
    <div class="row">
    <h2 class="row__title"></h2>
    <div class="row__posters">
    <h3 class="movie_title"></h3>
    </div>
    </div>
    </div>
    `;

    fetch(requests.fetchNetflixOrignals)
        .then((res) => res.json())
        .then((data) => {
            const headrow = document.getElementById("headrow");
            const row = document.createElement("div");
            row.className = "row";
            headrow.appendChild(row);
            const title = document.createElement("h2");
            title.className = "row__title";
            row.appendChild(title);
            const row_posters = document.createElement("div");
            row_posters.className = "row__posters";
            row.appendChild(row_posters);
            data.results.forEach(movie => {
                console.log(movie);
                const poster = document.createElement("img");
                poster.className = "row__poster";
                var s2 = movie.id;
                poster.id = s2;
                poster.src = img_url + movie.poster_path;
                row_posters.appendChild(poster);

            });
        });



    appDiv.innerHTML = html;
}