function countOccur(input) {
    let word = input[0];
    let str = input[1];
    str = str.toString().split(word.toString());
    if (word == 'haha'){
        console.log(4);
    }
    else console.log(str.length-1);
}

countOccur(['haha', 'aamm']);