function biggestElement(input) {
    let maxVal = 0;
    let bestMaxVal = Math.max();
    let row = '';
    for (let i = 0; i < input.length; i ++){
        row = input[i].split(' ').map(Number);
        maxVal = Math.max.apply(Math, row);
        if (maxVal > bestMaxVal){
            bestMaxVal = maxVal;
        }
    }
    console.log(bestMaxVal);
}

biggestElement(['3 5 7 12',
    '-1 4 33 2',
    '8 3 0 4']

);