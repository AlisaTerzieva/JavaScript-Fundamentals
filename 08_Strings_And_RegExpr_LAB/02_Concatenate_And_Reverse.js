function concatenateReverse(input) {
    input = input.toString().split(',');
    for (let i = 0; i < input.length; i++){
        input[i] = input[i].toString().split('').reverse().join('');
    }
    console.log(input.reverse().join(''));
}

concatenateReverse(['I', 'am', 'student']);