const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num.reduce((accumulator, curVal) => accumulator += curVal));
console.log(num.reduce((accumulator, curVal) => accumulator * curVal));

function factorial(n) {
    let numbers = [];
    for (i = 1; i <= n; i++)
        numbers.push(i);
    return numbers.reduce((accumulator, curVal) => accumulator * curVal);
}

console.log(factorial(10));

const nArr = [767, 8, 56, 87, 108, 56, 890, 777]
const max = nArr.reduce((curMax, curVal) => {
    if (curMax >= curVal)
        return curMax;
    else
        return curVal;
});

console.log(max);

const min = nArr.reduce((curMin, curVal) => {
    if (curMin <= curVal)
        return curMin;
    else
        return curVal;
});

console.log(min);

const maxO = nArr.reduce((max, curVal) => Math.max(max, curVal));
const minO = nArr.reduce((min, curVal) => Math.min(min, curVal));
console.log(maxO, minO);