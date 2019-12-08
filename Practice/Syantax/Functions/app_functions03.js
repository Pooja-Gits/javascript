function avg(numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    return sum / numbers.length;
}

// Contains every letter of the english language
function isPangramOld(sentence) {
    let chars26 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let alpCount = 0;
    for (let c of chars26) {
        if (sentence.toLowerCase().indexOf(c) === -1)
            return false;
        alpCount++;
    }
    return alpCount >= 26;
}


function isPangram(sentence) {
    let chars26 = "abcdefghijklmnopqrstuvwxyz";
    let alpCount = 0;
    for (let c of chars26) {
        if (sentence.toLowerCase().indexOf(c) === -1)
            return false;
        alpCount++;
    }
    return alpCount >= 26;
}