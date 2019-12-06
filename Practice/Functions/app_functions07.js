function callNTime(func, n) {
    for (let i = 0; i < n; i++) {
        func();
    }
}

function printName() {
    console.log("Manoj B");
}

function printNames() {
    console.log("Manoj B");
    console.log("Nandan M");
}


callNTime(printName, 3);

function randCall(func1, func2) {
    const randNum = Math.floor(Math.random() * 2);
    if (randNum === 1) func1();
    else func2();
}

randCall(printName, printNames);

