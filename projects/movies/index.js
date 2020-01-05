const apiKey = "4ee26b74";
const baseUrl = "http://www.omdbapi.com/";
let searchInputTimerId;

const fetchData = async (searchTerm) => {
    const response = await axios.get(baseUrl, {
        params: {
            apikey: apiKey,
            s: searchTerm
        }
    });
    return response.data;
}


const input = document.querySelector("input");
input.addEventListener("input", (event) => debounce(onInput(event.target.value), 500));

async function onInput(searchTerm) {
    let response = await fetchData(searchTerm);
    console.log(response);
}