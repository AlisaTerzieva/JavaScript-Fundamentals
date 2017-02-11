function rounding(input) {
    let number = Number(input[0]);
    let precision = Number(input[1]);
    if (precision>15) precision = 15;
    number = number.toFixed(precision);
    console.log(parseFloat(number));
}

rounding(['10.5', '3']);