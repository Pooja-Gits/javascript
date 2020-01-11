const apiKey = "62481217a495a389966885bc27ec82dd";
const searchApi = "https://api.themoviedb.org/3/search/movie";
const movieApi = "https://api.themoviedb.org/3/movie/";


async function searchMovies(searchTerm) {
    let response = await axios.get(searchApi, {
        params: {
            api_key: apiKey,
            query: searchTerm
        }
    });
    return response.data.results;
}

async function getMovieDetails(movieId) {
    let response = await axios.get(`${movieApi}${movieId}`, {
        params: {
            api_key: apiKey
        }
    });
    return response.data;
}

async function getPopularMovies() {
    let response = await axios.get("https://api.themoviedb.org/3/discover/movie", {
        params: {
            api_key: apiKey,
            language: "en-US",
            sort_by: "popularity.desc"
        }
    });
    console.log(response.data.results);
}