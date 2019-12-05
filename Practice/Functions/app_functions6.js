function add(x, y) { return x + y; }
const subtract = function (x, y) { return x - y; }
const multiply = function (x, y) { return x * y; }
function divide(x, y) { return x / y; }
const operations = [add, subtract, multiply, divide]

for (let curOp of operations) {
    console.log(`${curOp} --> ${curOp(100, 20)}`);
}

let someObject = {
    doSomething: multiply
}

console.log(someObject.doSomething(10, 20));