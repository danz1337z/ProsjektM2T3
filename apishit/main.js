// fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/game?info=mini_info&limit=10&page=1&titleType=movie", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
// 		"x-rapidapi-key": "76d4c83ea9msh0ba34351e73b57ep10e7a6jsnc902a217da28"
// 	}
// })
// 	.then(response => response.json())
// 	.then(data => {
// 		const list = data.results;

// 		list.map((item) => {
// 			const name = item.title;
// 			const poster = item.i.primaryImage.url;
// 			const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
// 			document.querySelector('.movies').innerHTML += movie;
// 		})
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});

// fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/game?info=mini_info&limit=10&page=1&titleType=movie", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
// 		"x-rapidapi-key": "76d4c83ea9msh0ba34351e73b57ep10e7a6jsnc902a217da28"
// 	}
// })
// 	.then(response => response.json())
// 	.then(data => {
// 		const list = data.d;

// 		list.map((item) => {
// 			const name = item.l;
// 			const poster = item.i.imageUrl;
// 			const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
// 			document.querySelector('.movies').innerHTML += movie;
// 		})
// 	})
// 	.catch(err => {
// 		console.error(err);
// 	});



// let dataIMDB = [];

// const getdataIMDB = async () => {
// 	// kan bare kalles på 100 ganger daglig
// 	let response = await fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/game?info=mini_info&limit=10&page=1&titleType=movie", {
// 		"method": "GET",
// 		"headers": {
// 			"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
// 			"x-rapidapi-key": '76d4c83ea9msh0ba34351e73b57ep10e7a6jsnc902a217da28'
// 		}
// 	});
// 	let data = await response.json();
// 	dataIMDB = data.results;
// 	console.log(dataIMDB[0]);
// 	document.getElementById("app").innerHTML = '<img src="' + dataIMDB[0].primaryImage.url + '">\t<div>' + dataIMDB[0].primaryImage.caption.plainText + '</div>'
// 	return dataIMDB;
// };

// getdataIMDB()

var dataIMDB = [];
async function getdataIMDB() {
	// kan bare kalles på 100 ganger daglig
	let response = await fetch("https://data-imdb1.p.rapidapi.com/titles/search/title/action?info=mini_info&limit=10&page=1&titleType=movie", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "data-imdb1.p.rapidapi.com",
			"x-rapidapi-key": "76d4c83ea9msh0ba34351e73b57ep10e7a6jsnc902a217da28"
		}
	});
	let data = await response.json();
	dataIMDB = data.results;
	console.log(dataIMDB[0]);
	document.getElementById("app").innerHTML = `<img src="${dataIMDB[0].primaryImage.url}">	<div>${dataIMDB[0].primaryImage.caption.plainText}</div>`
	return dataIMDB;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'data-imdb1.p.rapidapi.com',
		'X-RapidAPI-Key': 'fc93763f19msh30c034cc9ad1212p1790c8jsnced5dd9c592f'
	}
};

fetch('https://data-imdb1.p.rapidapi.com/titles/utils/genres', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));