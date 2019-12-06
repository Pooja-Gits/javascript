const words = ["asap", "byob", "rsvp", "diy"]

let wordsEnhanced = words.map(function (word) {
    let result = "";
    for (i = 0; i < word.length; i++) {
        if (result === "")
            result += word[i].toUpperCase();
        else
            result += "." + word[i].toUpperCase();
    }
    console.log(result);
    return result;
});

console.log(wordsEnhanced);

let wordsEnhanced2 = words.map(function (word) {
    return word.toUpperCase().split('').join('.');
});
console.log(wordsEnhanced2);

const num = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let doubles = [];
for (let i = 0; i < num.length; i++) {
    doubles.push(num[i] * 2);
}
console.log(doubles);

let doubles2 = num.map(function (n) { return n * 2; });
console.log(doubles2);


const books = [
    {
        title: "Good Omens",
        authors: ["Terry Pratchett", "Neil Gaiman"],
        rating: 4.25
    },
    {
        title: "Bone: The Complete Edition",
        authors: ["Jeff Smith"],
        rating: 4.42
    },
    {
        title: "American Gods",
        authors: ["Neil Gaiman"],
        rating: 4.11
    },
    {
        title: "A Gentleman in Moscow",
        authors: ["Amor Towles"], rating: 4.36
    }
];

let bookTitles = books.map(function (book) {
    return book.title;
})
console.log(bookTitles);
