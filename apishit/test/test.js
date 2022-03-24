// api key  from TMDB 
const api = "api_key=9c01bc51e3095c9d889d05989bec36d1";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
    fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${api}`,
    fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
    fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
    fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
    fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
    fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
    fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
// used to truncate the string 
function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests.fetchActionMovies)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results);
        // every refresh the movie will be change
        const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
        console.log(setMovie);
        var banner = document.getElementById("banner");
        var banner_title = document.getElementById("banner__title");
        var banner__desc = document.getElementById("banner__description");
        banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
        banner__desc.innerText = truncate(setMovie.overview, 150);
        banner_title.innerText = setMovie.original_title;
    })