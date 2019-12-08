const magicSquare = [
    [2, 7, 6],
    [9, 5, 1],
    [4, 3, 8]
];

let expectedResult = 15;
for (let i = 0; i < magicSquare.length; i++) {
    let horizontalTotal = 0;
    let verticalTotal = 0;
    for (let j = 0; j < magicSquare[i].length; j++) {
        horizontalTotal += magicSquare[i][j];
        verticalTotal += magicSquare[j][i];
    }
    console.log((horizontalTotal === expectedResult) ? `Line ${i + 1} Horizontal is as expected, ${horizontalTotal}.` :
        `Line ${i + 1} Horizontal is not as expected, ${horizontalTotal}.`);
    console.log((verticalTotal === expectedResult) ? `Line ${i + 1} Vertical is as expected, ${verticalTotal}.` :
        `Line ${i + 1} Vertical is not as expected, ${verticalTotal}.`);
}