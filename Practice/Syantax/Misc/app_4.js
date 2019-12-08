function isPangram(str) {
    let result = true;
    let lowerStr = str.toLowerCase();
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    alphabet.forEach(function (el) {
        if (lowerStr.indexOf(el) === -1) {
            result = false;
            //break; ideally you break out but you will need to use traditional for loop for that
            //so this is executed no matter what for all the characters in teh string, better to use traditional loop in this case
        };
    });
    return result;
};

console.log(isPangram("Relaxing"));
console.log(isPangram("the quick brown fox jumps over the lazy dog"));
console.log(isPangram("Both fickle dwarves jinx my pig quiz."));
console.log(isPangram("Both fickle dwarves jinx my dog"));

//Alternative
const isPangramAlt = (str) => {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let strLower = str.toLowerCase();
    return [...alphabet].reduce((accumulator, curAlphabet) => {
        return accumulator && [...strLower].includes(curAlphabet);
    }, true);
};

console.log(isPangramAlt("Relaxing"));
console.log(isPangramAlt("the quick brown fox jumps over the lazy dog"));
console.log(isPangramAlt("Both fickle dwarves jinx my pig quiz."));
console.log(isPangramAlt("Both fickle dwarves jinx my dog"));
