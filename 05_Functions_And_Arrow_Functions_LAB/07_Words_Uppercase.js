function wordsUpper(input) {
    inputString = input.toString().toUpperCase();
    wordsArr = inputString.split(/\W+/);
    words = [];
    for (let i = 0; i < wordsArr.length; i++){
        if (wordsArr[i] != ""){
            words.push(wordsArr[i]);
        }
    }
    console.log(words.join(', '));
}

wordsUpper(['john$jo90hn&john^john@johnjo']);