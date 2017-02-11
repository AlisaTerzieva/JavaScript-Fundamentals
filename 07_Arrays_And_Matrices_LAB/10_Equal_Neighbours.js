function equalNeighbours(input) {
    let matrix = [];
    let cols = input[0].split(' ').length;
    let rows = input.length;
    let equals = 0;

    for (let i = 0; i < input.length; i++){
        matrix.push(input[i].split(' '));
    }

    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (i != rows - 1) {
                if (matrix[i][j] == matrix[i + 1][j]) {
                    equals++;
                }
            }
            if (j != cols - 1) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    equals++;
                }
            }
        }
    }
    console.log(equals);
}


equalNeighbours(['2 2 5 7 4',
                 '4 0 5 3 4',
                 '2 5 5 4 2']);