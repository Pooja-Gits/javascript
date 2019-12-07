const movies = ["The Fantastic Mr. Fox",
    "Mr. and Mrs. Smith",
    "Mrs. Dove Fire",
    "Mr. Deeds"]

const movie = movies.find(w => w.indexOf("Mr.") === 0);
console.log(movie);

const movie1 = movies.find(w => w.includes("Mr."));
console.log(movie1);

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterOdd = number.filter(n => n % 2 === 0);
console.log(filterOdd);

const triple = number.map(n => n * 3);
console.log(triple);
const filterOddAgain = triple.filter(n => n % 2 !== 0).map(n => Math.sqrt(n));
console.log(filterOddAgain);