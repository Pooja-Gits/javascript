let planetsBaseUri = "https://swapi.co/api/planets/";

async function getDataFromApi(uri) {
    const result = await axios.get(uri);
    return result;
}

async function getPlanetData() {
    let nextUri = planetsBaseUri;
    let planetDataObject = [];
    do {
        let planetData = await getDataFromApi(nextUri);
        //get planet data
        for (let planet of planetData.data.results) {
            //get film data
            let planetFilms = [];
            let filmDataPromises = [];
            for (let film of planet.films) {
                filmDataPromises = [...filmDataPromises, getDataFromApi(film)];
            }
            let filmDataResults = await Promise.all(filmDataPromises);
            for (let filmData of filmDataResults) {
                //get characters
                let filmCharacters = [];
                let filmCharactersPromises = [];
                for (let character of filmData.data.characters) {
                    filmCharactersPromises = [...filmCharactersPromises, axios.get(character)];
                }
                let filmCharactersResults = await Promise.all(filmCharactersPromises);
                for (let filmCharacter of filmCharactersResults) {
                    filmCharacters = [...filmCharacters, { "name": filmCharacter.data.name, "birthYear": filmCharacter.data.birth_year }]
                }
                planetFilms = [...planetFilms, { "name": filmData.data.title, "director": filmData.data.director, "characters": filmCharacters }]
            }
            planetDataObject = [...planetDataObject, { "name": planet.name, "population": planet.population, "Films": planetFilms }];
        }
        nextUri = planetData.data.next;
    } while (nextUri);
    console.log(planetDataObject);
}

getPlanetData();

let btn = document.getElementById("clickBtn");
btn.addEventListener("click", () => {
    setTimeout(() => {
        alert("Phew");
        console.log("Ok now i am on stack");
    }, 10);
});