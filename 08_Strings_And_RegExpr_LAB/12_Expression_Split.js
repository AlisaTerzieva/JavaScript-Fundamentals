function expressionSplit(input) {
    let result = input.toString().split(/[\s.();,]+/);
    console.log(result.join('\n').trim());

}

expressionSplit(['let sum = 4 * 4,b = "wow";']);