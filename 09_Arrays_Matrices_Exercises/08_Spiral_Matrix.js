function spiralMatrix(input) {
    input = input[0].split(' ').map(Number);
    let rows = input[0];
    let cols = input[1];
    let value = 1;
    let left = 0;
    let right = cols;
    let top = 0;
    let bottom = rows;
    let arr = [];

    for (let i = top; i < bottom; i++){
        arr[i] = [];
        for (let j = left; j < right; j++){
            arr[i][j] = value;
            value++;

            left++;
        }

    }
    for (let i = top; i < bottom; i++){
        for (let j = left-1; j < right; ){
            arr[i][j] = value;
            value++;
        }
    }
    console.log(arr);
}

spiralMatrix(['5 5']);