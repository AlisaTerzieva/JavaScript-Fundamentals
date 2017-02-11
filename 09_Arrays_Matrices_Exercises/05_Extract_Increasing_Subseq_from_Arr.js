function extractIncSubseq(input) {
    input = input.map(Number);

    for (let i = 1; i < input.length; i++){
        if (input[i] < input[i-1]){
            input.splice(i,1);
            i-=1;
        }
    }

    for (let i = 0; i < input.length; i ++){
        console.log(input[i]);
    }
}

extractIncSubseq([
    '2',
    '2',
    '3',
    '2',
    '3',
    '2'
]);