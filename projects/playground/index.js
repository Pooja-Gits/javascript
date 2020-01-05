const apiKey = "4ee26b74";
const baseUrl = "http://www.omdbapi.com/";
const searchString = "avengers";
const searchBox = document.getElementById("searchString");

async function searchMovie(name) {
    let searchResult = await axios.get(`${baseUrl}`,
        {
            params: {
                apikey: apiKey,
                s: name
            }
        });
    return searchResult;
}

async function getMovieDetails(movieId) {
    let movieResult = await axios.get(`${baseUrl}`, {
        params: {
            apikey: apiKey,
            i: movieId
        }
    });
    return movieResult;
}

let firstMovie;
searchBtn.addEventListener("click", async function (e) {
    let searchText = searchBox.value;
    if (searchText.length >= 5) {
        let result = await searchMovie(searchText);
        let movieDetailsPromises = [];
        for (let i = 0; i < result.data.Search.length && i <= 3; i++) {
            movieDetailsPromises.push(getMovieDetails(result.data.Search[i].imdbID));
        }
        let movieDetailsResults = await Promise.all(movieDetailsPromises);
        for (let movie of movieDetailsResults) {
            let { Title, Year, Poster } = movie.data;

            let div = document.createElement("div");
            div.style.alignContent = "center";
            let img = document.createElement("img");
            img.src = Poster;
            img.width = "50";
            let title = document.createElement("b");
            title.innerText = `  ${Title} (${Year})`
            div.appendChild(img);
            div.appendChild(title);
            document.body.appendChild(div);
            console.log(Title, Year, Poster);
        }


        // firstMovie = firstMovie.data;
        // console.log(firstMovie);
        // if (firstMovie) {
        //     document.getElementById("movieName").innerText = firstMovie.Title;
        //     document.getElementById("moviePoster").src = firstMovie.Poster;
        //     document.getElementById("movieBoxOffice").innerText = firstMovie.BoxOffice;
        //     document.getElementById("movieCriticRating").innerText = firstMovie.imdbRating;
        // }
    }

});
