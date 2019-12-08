const square = x => x * x;
const sum = (x, y) => x + y;
const isEven = x => x % 2 === 0;
const greet = () => console.log("Hello");
const greetAgain = () => { console.log("Hello"); console.log("Ok") };

console.log(square(10));
console.log(sum(10, 20));
console.log(isEven(4));
console.log(isEven(5));
greet();
greetAgain();

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numParity = num.map(n => {
    return {
        value: n,
        parity: n % 2 === 0
    };
});

console.log(numParity);