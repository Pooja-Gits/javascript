const votes = ["y", "y", "n", "y", "n", "y", "n", "n", "y", "n", "n", "n", "n", "y", "y"]

const result = votes.reduce((accumulator, curVote) => {
    if (curVote === "y")
        accumulator.for += 1;
    else
        accumulator.against += 1;
    return accumulator;
}, { for: 0, against: 0 });

console.log(result);