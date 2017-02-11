function sumFirstLast(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[input.length - 1]);
    return num1 + num2;
}
console.log(sumFirstLast(['1', '50']));