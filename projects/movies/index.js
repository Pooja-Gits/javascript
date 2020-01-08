let baseAutocompleteConfig = {
    itemType: "Movies",
    fetchDataCallback: async (searchTerm) => { return await searchMovies(searchTerm); },
    optionItemCallback: (movie) => {
        let { Poster, Title, Year } = movie;
        if (!Poster || Poster === "N/A")
            return `<h6 class="title is-5">${Title} (${Year})</h6>`;
        else
            return `<img src="${Poster}" width="40" /> <h6 class="title is-5">${Title} (${Year})</h6>`;

    },
    optionValue: (movie) => { return movie.Title; }
}

let movieLeft;
let movieRight;

let autocompleteConfigOne = {
    rootElement: document.querySelector(".autocomplete-one"),
    ...baseAutocompleteConfig,
    onOptionClick: async (movie) => {
        let movieId = movie.imdbID;
        let movieDetails = await getMovieDetails(movieId);
        document.querySelector(".autocomplete-one-details").innerHTML = getMovieArticle(movieDetails);
        movieLeft = movie;
        compareMovies();
    }
}

let autocompleteConfigTwo = {
    rootElement: document.querySelector(".autocomplete-two"),
    ...baseAutocompleteConfig,
    onOptionClick: async (movie) => {
        let movieId = movie.imdbID;
        let movieDetails = await getMovieDetails(movieId);
        document.querySelector(".autocomplete-two-details").innerHTML = getMovieArticle(movieDetails);
        movieRight = movie;
        compareMovies();
    }
}

function compareMovies() {
    if (movieLeft && movieRight) {
        let movieLeftAttributes = document.querySelector(".autocomplete-one-details").querySelectorAll(".notification");
        let movieRightAttributes = document.querySelector(".autocomplete-two-details").querySelectorAll(".notification");
        for (let i = 0; i < movieLeftAttributes.length; i++) {
            if (parseFloat(movieLeftAttributes[i].dataset.value) === parseFloat(movieRightAttributes[i].dataset.value)) {
                movieRightAttributes[i].classList.add("is-info");
                movieRightAttributes[i].classList.remove("is-warning");
                movieLeftAttributes[i].classList.add("is-info");
                movieLeftAttributes[i].classList.remove("is-warning");
            }
            else {
                if (parseFloat(movieLeftAttributes[i].dataset.value) > parseFloat(movieRightAttributes[i].dataset.value)) {
                    movieRightAttributes[i].classList.remove("is-primary");
                    movieRightAttributes[i].classList.add("is-warning");
                    movieLeftAttributes[i].classList.add("is-primary");
                    movieLeftAttributes[i].classList.remove("is-warning");
                }
                else {
                    movieLeftAttributes[i].classList.remove("is-primary");
                    movieLeftAttributes[i].classList.add("is-warning");
                    movieRightAttributes[i].classList.add("is-primary");
                    movieRightAttributes[i].classList.remove("is-warning");
                }
            }
        }
    }
}

createAutocomplete(autocompleteConfigOne);
createAutocomplete(autocompleteConfigTwo);

function getMovieArticle(movie) {
    let { Awards, BoxOffice, Metascore, imdbRating, imdbVotes, Title, Year, Genre, Runtime, Plot, Poster } = movie;

    let boxoffice = BoxOffice.replace(/\$/g, "").replace(/,/g, "");
    if (!boxoffice || boxoffice === "N/A")
        boxoffice = "0"

    let awards = Awards.split(" ").reduce((accumulator, word) => {
        let value = parseInt(word);
        if (isNaN(value)) {
            return accumulator;
        }
        else {
            return accumulator + value;
        }
    }, 0);

    let imageTemp = "";

    if (Poster && Poster !== "N/A") {
        imageTemp = `<figure class="media-left">
            <p class="image">
            <img src="${Poster}">
            </p>
        </figure>`;
    }

    let template = `
    <article class="media">
        ${imageTemp}
        <div class="media-content">
            <div class="content">
                <h1>${Title} (${Year})</h1>
                <h5>${Genre} (Runtime: ${Runtime})</h5>
                <p>${Plot}</p>
            </div>
        </div>
    </article>
    <div class="notification is-primary" data-value="${awards}">
        <p class="title is-3">${Awards}</p>
        <p class="subtitle is-5">Awards</p>
    </div>
    <div class="notification is-primary" data-value="${boxoffice}">
        <p class="title is-3">${BoxOffice}</p>
        <p class="subtitle is-5">Box Office</p>
    </div>
    <div class="notification is-primary" data-value="${Metascore}">
        <p class="title is-3">${Metascore}</p>
        <p class="subtitle is-5">Metascore</p>
    </div>
    <div class="notification is-primary" data-value="${imdbRating}">
        <p class="title is-3">${imdbRating}</p>
        <p class="subtitle is-5">IMDB Rating</p>
    </div>
    <div class="notification is-primary" data-value="${imdbVotes.replace(/,/g, "")}">
        <p class="title is-3">${imdbVotes}</p>
        <p class="subtitle is-5">IMDB Votes</p>
    </div>
    `;
    return template;
}