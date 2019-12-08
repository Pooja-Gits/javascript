let winner = { name: "karimeen", country: "India", Age: 45 };

let { name: winnerName, country } = winner;
console.log(winnerName, country);

let running = [
    { name: "karimeen", country: "India", age: 45 },
    { name: "kutus", country: "China", age: 45 },
    { name: "nandan", country: "USA", age: 45 }
]

let [, silver] = running;
console.log(silver);
let { age: silverAge, country: silverCountry } = silver;
console.log(silverAge, silverCountry);

const getFormattedRunner = ({ name, age, country }) => `${name} aged ${age} is from ${country}`;

console.log(getFormattedRunner(silver));

const response = [
    "HTTP/1.1",
    "200 OK",
    "application/json"
]

const decodeResponse = ([version, responseCode, format]) => `Version: ${version}, Response Code: ${responseCode} and Format: ${format}`;
console.log(decodeResponse(response));