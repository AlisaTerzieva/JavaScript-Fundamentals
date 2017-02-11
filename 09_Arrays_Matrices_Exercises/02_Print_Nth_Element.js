function printNthElement(input) {
    let step = input[input.length - 1];
    step = parseInt(step);
    for(let i = 0; i < input.length - 1; i += step){
        console.log(input[i]);
    }
}

printNthElement(['dsa', 'asd', 'test', 'tset',  '4']);