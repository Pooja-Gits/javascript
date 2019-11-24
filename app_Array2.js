let fruits = ["apple", "orange"]
let vegetables = ["cauliflower", "spinach"]
let meats = ["fish", "chicken"]

//concat
let allFoods = fruits.concat(vegetables, meats);
console.log(fruits, vegetables, meats);
console.log(allFoods);

//includes
console.log(allFoods.includes("apple"))
if (allFoods.includes("chicken")) {
    console.log("Waw chicken");
}

if (allFoods.includes("ell")) {
    console.log("Waw chicken");
}

//indexof
console.log(allFoods.indexOf("spinach"))