const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5]

function getStats(ratings) {
    let max = Math.max(...ratings);
    let min = Math.min(...ratings);
    let sum = ratings.reduce((a, n) => a + n);
    let avg = sum / ratings.length;
    let result = { max, min, sum, avg };
    return result;
}

console.log(getStats(reviews));

const role = "host";
const person = "Sheru Bhai";
const role2 = "scientist";
const person2 = "Some guy";

let team = {};
team[role] = person;
team[role2] = person2;

console.log(team);

const role3 = "host";
const person3 = "Sheru Bhai";
const role4 = "scientist";
const person4 = "Some guy";

let team2 = { [role3]: person3, [role4]: person4, [25 / 5 * 6]: "waw" };
console.log(team2);

const addProp = (obj) => { return { ...obj, [45 % 3 + 4444]: "wawing wow" } };
console.log(addProp(team2));
