const item = ["milk", "butter", "apple", "black"]
const combine = ["can", "milk", "pie", "berry"]

for (let i = 0; i < item.length; i++) {
    console.log(`${item[i]} ${combine[i]}`);
}

function add(x, y) {
    return x + y;
}

function isPerfectSquare(num) {
    let sqrtVal = Math.sqrt(num);
    if (sqrtVal * sqrtVal === num) {
        return true;
    }
    return false;
}

function isPerfectSquareSrt(n) {
    return Math.sqrt(n) * Math.sqrt(n) === n;
}

function areAllPerfectSquares(numArray) {
    let returnValue = true;
    for (let n of numArray) {
        let sqrtN = Math.sqrt(n);
        returnValue = returnValue && (sqrtN * sqrtN === n);
    }
    return returnValue;
}