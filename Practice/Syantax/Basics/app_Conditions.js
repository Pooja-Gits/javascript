// Always use === & !== 
// == matches even if the two items are of different type like 2 == '2' will return true
// but 2 === '2' will return false

let rating = 11;

if (rating % 2 === 0) {
    console.log("Its Even");
}
else {
    console.log("Its Odd");
}

rating = 1;
if (rating >= 0) {
    if (rating >= 1) {
        if (rating === 3) {
            console.log(`You are awesome, rating ${rating}`);
        }
        else if (rating === 2) {
            console.log(`Meets Expectation, rating ${rating}`);
        }
        else if (rating === 1) {
            console.log(`Needs improvement, rating ${rating}`);
        }
        else {
            console.log(`Invalid Rating should be 1, 2 or 3, rating ${rating}`)
        }
    }
}
else {
    console.log(`Rating cannot be negative ${rating}`)
}