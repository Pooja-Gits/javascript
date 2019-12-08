const votes = ["y", "y", "n", "y", "n", "y", "n", "n", "y", "y", "m", "n", "n", "y", "y", "m"]

const result = votes.reduce((accumulator, curVote) => {
    if (curVote === "y")
        accumulator.for += 1;
    else if (curVote === "n")
        accumulator.against += 1;
    else
        accumulator.odd = (accumulator.odd || 0) + 1;
    return accumulator;
}, { for: 0, against: 0 });

console.log(result);

const tallyResult = votes.reduce((tally, curVote) => {
    if (tally[curVote] == undefined)
        tally[curVote] = 1;
    else
        tally[curVote]++;
    return tally;
}, {});

console.log(tallyResult);

const tallyResult1 = votes.reduce((accumulator, curVote) => {
    accumulator[curVote] = (accumulator[curVote] || 0) + 1;
    return accumulator;
}, {});

console.log(tallyResult1);