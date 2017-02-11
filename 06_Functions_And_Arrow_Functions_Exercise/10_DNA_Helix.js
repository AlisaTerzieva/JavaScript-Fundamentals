function dnaHelix(input) {
    let lengthDNA = Number(input);
    let sequence = 'ATCGTTAGGG';
    let counter = 0;

    for (let i = 0; i < lengthDNA; i++){
        if (i % 4 == 0){
            console.log('**'+sequence[counter] + sequence[counter + 1] + '**');
        }
        else if (i % 2 == 1){
            console.log('*' + sequence[counter] + '--' + sequence[counter + 1] + '*');
        }
        else {
            console.log(sequence[counter] + '----' + sequence[counter + 1]);
        }
        if (counter + 1 == 9){
            counter = 0;
        }
        else counter += 2;
    }
}

dnaHelix(['10']);