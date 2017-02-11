function lastKNumbersSequence(input) {
    let k = Number(input[0]);
    let n = Number(input[1]);

    let resultArr = [];
    resultArr.push(1);
    let sum = 0;

    for ( let i = 1; i < k; i++){
        for (let j = i-1; j >= i-n; j--) {
            if (resultArr[j]) {
                sum += resultArr[j];
            }
        }
        resultArr.push(sum);
        sum = 0;
    }

    console.log(resultArr);
}

lastKNumbersSequence(['8', '2']);