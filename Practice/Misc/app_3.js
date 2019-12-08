function sum() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++)
        result += arguments[i];
    return result;
}

console.log(sum(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

function sumNew() {
    let argsArr = [...arguments];
    return argsArr.reduce((a, n) => a + n);
}

console.log(sumNew(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

function sumAll(...numbers) {
    return numbers.reduce((a, n) => a + n);
}

console.log(sumAll(10, 20, 30, 40, 50, 60, 70, 80, 90, 100));

function greet(firstName, lastName, ...titles) {
    return "Hello \"" + titles.reduce((a, n) => a + " " + n) + `. ${firstName} ${lastName}\"`;
}

console.log(greet("Manoj", "Bhargavan", "Katappa", "Jr", "III"));

const multiply = (...numbers) => numbers.reduce((a, n) => a * n);
console.log(multiply(10, 20, 30));