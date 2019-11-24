let shoppingList = ["apple", "orange", "pineapple"];
console.log(shoppingList);
let lottoNumbers = [10, 23, 45, 67, 12];
console.log(lottoNumbers);
let myCollections = ["bed", "goat", 10, 23.67, true, NaN, null, undefined];
console.log(myCollections);

let randomNumbers = [10, 20, 30, 40, 50]
for (let index = 0; index < randomNumbers.length; index++) {
    randomNumbers[index] = Math.ceil(Math.random() * 1000);
}
console.log(randomNumbers);

let length = randomNumbers.length;
for (let index = randomNumbers.length; index < length * 2; index++) {
    randomNumbers[index] = Math.ceil(Math.random() * 1000);
}
console.log(randomNumbers);