function diagonalSums(input) {
    let matrix = [];
    for (let i = 0; i < input.length; i++){
        matrix.push(input[i].split(" ").map(Number));
    }
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < input.length; i++){
            leftDiagonalSum += matrix[i][i];
            rightDiagonalSum += matrix[i][input.length-1-i];
    }

    console.log(leftDiagonalSum + " " + rightDiagonalSum);
}

diagonalSums(['20 40',
    '10 60']
);