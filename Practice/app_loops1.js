let evenNumbers = [];
let oddNumbers = [];

let range = 10000;
let evenRange = 0;
let oddRange = 0;

for (let i = 1; i <= range; i++) {
    if (i % 2 == 0) {
        evenNumbers[evenRange++] = i;
    }
    else {
        oddNumbers[oddRange++] = i;
    }
}

console.log(evenNumbers.concat(oddNumbers).sort());
console.log(evenNumbers);
console.log(oddNumbers);
