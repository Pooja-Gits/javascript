const words = ["dog", "dig", "log", "bag", "wag"];

const endsWithG = words.every(w => w.endsWith("g"));
console.log(endsWithG);
console.log(words.every(w => w.length === 3));

console.log(words.some(w => w.startsWith("l")));
console.log(words.every(w => w.startsWith("l")));

//Sort
const prices = [400.50, 3000, 99.99, 35.99, 12.30, 9500]
prices.sort((p1, p2) => p1 - p2);
console.log(prices);
prices.sort((p1, p2) => p2 - p1);
console.log(prices);