function multiplyBy(num) {
    return function (n) { return num * n };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(100));
console.log(triple(100));

console.log(multiplyBy(3)(400));
