// In JavaScript the below values all have falsy values
// false, 0, empty string ""/'', null, undefined, Nan

let mystery = 10;

if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = 0;
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = null;
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = false;
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = NaN;
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = '';
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}

mystery = undefined;
if (mystery) {
    console.log(`True ${mystery}`);
}
else {
    console.log(`False ${mystery}`);
}