function biggestNumber(input) {
    let numbers = input;
    let biggestNum = Math.max.apply(Math, input);
    console.log(biggestNum);
}

biggestNumber(['-10', '3']);