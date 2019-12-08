let names = [
    "Manoj",
    "Saranaya",
    "Nandan",
    "Iron",
    "Warrior",
    "Active"
]

let [first, second, third] = names;
console.log(first);
console.log(second);
console.log(third);

let [first1, , , fourth1] = names;
console.log(first1);
console.log(fourth1);

let [first2, ...rest] = names;
console.log(first2);
console.log(rest);