function negativePositive(input) {
let resultArr = [];
    for (let i = 0; i < input.length; i ++){
        if (Number(input[i]) >=0) {
            resultArr.push(Number(input[i]));
        }
        else resultArr.unshift(Number(input[i]));
    }
    return resultArr;
}
console.log(negativePositive(['3', '-2', '0', '-1']));