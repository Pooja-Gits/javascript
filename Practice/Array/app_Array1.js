let shoppingList = ["apple", "orange", "pineapple"];
console.log(shoppingList);
let lottoNumbers = [10, 23, 45, 67, 12];
console.log(lottoNumbers);
let myCollections = ["bed", "goat", 10, 23.67, true, NaN, null, undefined];
console.log(myCollections);


//Add Values to array, using existing index will overwrite
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

//Pop and Push
//Pop - remove from end Push - add to end
randomNumbers.pop();
randomNumbers.pop();
randomNumbers.push("it ain't me it ain't me, i no fortunate one no");
console.log(randomNumbers);

//Shift and Unshift
//Unshift -- Add to the beginning of the array
let dishesToDo = ["Big Bowl"];
dishesToDo.unshift("Large Plate");
dishesToDo.unshift("Small Plate");
console.log(dishesToDo);
console.log(dishesToDo.shift());
console.log(dishesToDo);
dishesToDo.unshift("fork", "knife");
console.log(dishesToDo);



