const apiKey = "4ee26b74";
const baseUri = "http://www.omdbapi.com/";

async function searchMovies(searchTerm) {
    let response = await axios.get(baseUri, {
        params: {
            apikey: apiKey,
            s: searchTerm
        }
    });

    if (response.data.Response === "False")
        return [];

    return response.data.Search;
}

async function getMovieDetails(movieId) {
    let response = await axios.get(baseUri, {
        params: {
            apikey: apiKey,
            i: movieId
        }
    });

    if (response.data.Response === "False")
        return {};

    return response.data;
}