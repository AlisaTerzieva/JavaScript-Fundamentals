function magicMatrices(input) {
    let rows = input.length;
    let arr = [];
    for (let i = 0; i < rows; i++) {
        arr.push(input[i].split(" ").map(Number));
    }
    let result = [];
    let sumH = 0;
    let sumV = 0;
    for (let i = 0; i < rows; i++) {
        sumH = arr[i].reduce(function (a, b) {
            return a + b;
        });
        result.push(sumH);
    }
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < input.length; j++) {
            sumV += arr[j][i];
            //console.log(arr[j][i]);
        }
        //console.log('----');
        result.push(sumV);
        sumV = 0;
    }
    //console.log(result);
    let allEqual = arr => arr.every(e => e == arr[0]);
    if (result.length < 1) {
        console.log('false');
    }
    else {
        console.log(allEqual(result));
    }
}
magicMatrices([
    '1 0 1',
    '0 1 1']
);

