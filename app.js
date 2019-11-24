//reverse
let alphabets = ["N", "O", "I", "T", "A", "N", "I", "M", "R", "E", "T", "E", "D"];
console.log(alphabets);
console.log("Reverse");
console.log(alphabets.reverse());

//join
console.log(alphabets.join())
console.log(alphabets.join(""))
console.log(alphabets.join("."))

let randomJaffa = [12, "my oh my", true]
console.log(randomJaffa.join("."))

let animals = ["dog", "pig", "cat", "tiger", "lion", "bear"];
console.log("Animals");
console.log(animals);
console.log("Domestic Animals");
console.log(animals.slice(0, 3));
console.log("Predators");
console.log(animals.slice(3));
console.log("Same family of cats");
console.log(animals.slice(2, 5));
console.log("Predator Cats");
console.log(animals.slice(-3, -1));
console.log("testing");

//splice
//add to middle
console.log(animals);
animals.splice(3, 0, "panther", "jaguar");
console.log(animals);
//delete and replace
let removed = animals.splice(3, 4, "PANTHER", "JAGUAR", "TIGER", "LION");
console.log(animals);
console.log(removed);
