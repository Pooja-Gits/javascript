function intCode(list) {
    let increment = 4;
    let curLocation = 0;
    while (list[curLocation] != 99) {
        let curResult = 0;
        switch (list[curLocation]) {
            case 1: curResult = list[list[curLocation + 1]] + list[list[curLocation + 2]]; break;
            case 2: curResult = list[list[curLocation + 1]] * list[list[curLocation + 2]]; break;
        }
        list[list[curLocation + 3]] = curResult;
        curLocation += increment;
    }
    return list;
}

//input
let listNum = [
    1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 6, 19, 1, 9, 19, 23, 2, 23, 10, 27, 1, 27, 5, 31, 1, 31, 6, 35, 1, 6, 35, 39, 2, 39, 13, 43, 1, 9, 43, 47, 2, 9, 47, 51, 1, 51, 6, 55, 2, 55, 10, 59, 1, 59, 5, 63, 2, 10, 63, 67, 2, 9, 67, 71, 1, 71, 5, 75, 2, 10, 75, 79, 1, 79, 6, 83, 2, 10, 83, 87, 1, 5, 87, 91, 2, 9, 91, 95, 1, 95, 5, 99, 1, 99, 2, 103, 1, 103, 13, 0, 99, 2, 14, 0, 0
]
//Error Code 1202 replace pos 1 with 12 and pos 2 with 02 before running
listNum[1] = 12;
listNum[2] = 02;
let rescue = intCode(listNum);
console.log(`${rescue[0]}`);

//Part 2
let expectedOutput = 19690720;
let curResult = -1;
let finalNoun = 0;
let finalVerb = 0;
for (let noun = 0; noun <= 99; noun++) {

    let loopBreak = false;
    for (let verb = 0; verb <= 99; verb++) {
        //reset
        listNum = [
            1, 0, 0, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 6, 19, 1, 9, 19, 23, 2, 23, 10, 27, 1, 27, 5, 31, 1, 31, 6, 35, 1, 6, 35, 39, 2, 39, 13, 43, 1, 9, 43, 47, 2, 9, 47, 51, 1, 51, 6, 55, 2, 55, 10, 59, 1, 59, 5, 63, 2, 10, 63, 67, 2, 9, 67, 71, 1, 71, 5, 75, 2, 10, 75, 79, 1, 79, 6, 83, 2, 10, 83, 87, 1, 5, 87, 91, 2, 9, 91, 95, 1, 95, 5, 99, 1, 99, 2, 103, 1, 103, 13, 0, 99, 2, 14, 0, 0
        ]
        listNum[1] = noun;
        listNum[2] = verb;
        let curResult = intCode(listNum);
        //console.log(`${noun} ${verb} ${curResult[0]}`)
        if (curResult[0] === expectedOutput) {
            finalNoun = noun;
            finalVerb = verb;
            loopBreak = true;
            break;
        }
    }
    if (loopBreak) break;
}

console.log(`${finalNoun}  ${finalVerb}`);
