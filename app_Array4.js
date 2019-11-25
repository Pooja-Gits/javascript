const pi = 22 / 7;
//pi = 22 / 7 * 1; //not Allowed
console.log(pi);

const someArray = [1, 2, 3, 6, 7];
console.log(someArray);
someArray.splice(3, 0, 5, 4);
console.log(someArray);
someArray.reverse();
console.log(someArray);
someArray.sort();
console.log(someArray);
//someArray = someArray.slice(); // Not Allowed

let ticTak = [
    ["X", "O", " "],
    ["O", "X", "O"],
    [" ", " ", "O"]
];

console.log("Board");
console.log("----------");
for (let i = 0; i < ticTak.length; i++) {
    console.log(ticTak[i].join(" | "));
}
console.log("----------");
