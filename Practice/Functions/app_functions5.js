function add(x, y) {
    return x + y;
}

const sum = function (x, y) {
    return x + y;
}

console.log(add(10, 20));
console.log(sum(20, 30));

console.dir(add);
console.dir(sum);

const product = function multiply(x, y) {
    return x * y;
}

console.log(product(10, 20));
//console.log(multiply(10, 20));