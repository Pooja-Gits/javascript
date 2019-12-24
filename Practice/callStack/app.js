const num1 = document.querySelector("#number1");
const num2 = document.querySelector("#number2");
const submitBtn = document.querySelector("#formSubmit");
const result = document.querySelector("#result");

const sum = (x, y) => x + y;
const sub = (x, y) => x - y;
const mul = (x, y) => x * y;
const div = (x, y) => x / y;
const sqr = (x) => mul(x, x);
const cube = (x) => mul(sqr(x), x);


document.querySelector("#mathForm").addEventListener("submit", function (e) {
    let number1 = num1.value;
    let number2 = num2.value;
    result.innerHTML = `<b>Number 1:</b> ${number1} <br/><b>Number 2:</b> ${number2}` +
        `<br>Square Of Sums: ${sqr(sum(number1, number2))}` +
        `<br>Sum of Squares: ${sum(sqr(number1), sqr(number2))}` +
        `<br>Cube Of Sums: ${cube(sum(number1, number2))}` +
        `<br>Sum of Cubes: ${sum(cube(number1), cube(number2))}`;
    e.preventDefault();
});
