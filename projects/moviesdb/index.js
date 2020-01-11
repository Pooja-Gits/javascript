const movieContainer = document.querySelector("#movieContainer");

createAutoComplete({
    maxOptions: 8,
    rootElement: movieContainer,
    fetchDataIterableCallback: async (searchTerm) => {
        let response = await searchMovies(searchTerm);
        return response;
    },
    clickOptionCallback: (movie) => {
        renderMovie(movie);
    },
    clickInputTextCallback: (movie) => {
        console.log("this is jaffa");
        console.log(movie);
        return movie.title;
    },
    renderOptionCallback: (movie) => {

        let poster_path = movie.poster_path;
        if (!poster_path || poster_path === "null")
            poster_path = `<i class="fas fa-icons"></i>`;
        else
            poster_path = `<img src="https://image.tmdb.org/t/p/w500/${poster_path}"`;

        return `
            <div class="card is-medium">
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                ${poster_path}
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-6">${movie.title}</p>
                            <p class="subtitle is-6">${movie.release_date}</p>
                        </div>
                    </div>
                </div>
                <br/>
            </div>
        `;

    }
}
);

async function renderMovie(movie) {
    const movieDetailsData = await getMovieDetails(movie.id);
    console.log(movieDetailsData);
    const movieDetails = document.querySelector("#movieDetails");
    let { homepage, title, overview, runtime, poster_path,
        release_date, tagline, genres, production_companies, revenue,
        vote_average, vote_count, budget } = movieDetailsData;
    let imageTemp = "";

    if (poster_path && poster_path !== "null") {
        imageTemp = `<figure class="media-right">
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}">
        </figure>`;
    }

    let genresComplied = "";
    for (let genre of genres) {
        if (genresComplied === "") {
            genresComplied = genre.name;
        }
        else {
            genresComplied = genresComplied + `, ${genre.name}`;
        }
    }

    let productionComplied = "";
    for (let production_company of production_companies) {
        let { name, logo_path } = production_company;
        if (productionComplied === "")
            productionComplied = logo_path ? `<img height="30" width="30" src="https://image.tmdb.org/t/p/w500/${logo_path}" /> ${name}` : name;
        else
            productionComplied = productionComplied + "<br/>" +
                (logo_path ? `<img height="30" width="30" src="https://image.tmdb.org/t/p/w500/${logo_path}" /> ${name}` : name);
    }

    let template = `
    <article class="media">
        <div class="media-content">
            <div class="content">
                <div class="columns">
                    <div class="column">
                            ${imageTemp}
                    </div>
                    <div class="column">
                            <h1>${title}</h1>
                            <h4>${tagline}</h4>
                            <p>${overview}</p>
                            <p>Released on ${release_date}, Runtime ${runtime} Minutes.</p>
                            <p>Genre: ${genresComplied}.</p>
                            <p><h6>Production Houses</h6> ${productionComplied}</p>
                            <p>Budget: $${budget}, Revenue: $${revenue}</p>
                            <p>Profit Margin: $${revenue - budget}.</p>
                            <p>Rating: ${vote_average}</p>
                            <p>Vote Count: ${vote_count}</p>
                    </div>
                </div>
            </div>
        </div>
    </article>
    `;

    movieDetails.innerHTML = template;
}