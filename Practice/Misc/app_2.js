let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function sum(num) {
    return num.reduce((a, n) => a + n);
}

console.log(sum(numbers));

console.log(Math.max(...numbers));

const cephalopods = ['dumbo octopus', 'humboldt squid', 'flamboyant cuttlefish'];

const gastropods = ['giant african snail', 'banana slug', 'variable neon slug'];

const cnidaria = ['fire coral', 'moon jelly'];

const jaffas = [...cephalopods, ...gastropods];
console.log(...jaffas.join(",\n"));

const jaffas1 = [...cephalopods, ...gastropods, ...cnidaria, 'jaffas'];
console.log(...jaffas.join(","));

const alphabets = [..."abcdefghijklmnopqrstuvwxyz"];
console.log(alphabets);

let result = alphabets.map(l => {
    return l.toUpperCase() + " " + l.toLowerCase() + "|";
})
console.log(...result);